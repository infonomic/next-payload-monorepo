import path from 'path'
import fs from 'fs'
import { next, nextBuild } from '@org/web'
import express from 'express'
import { payload } from '@org/cms'
import { config as dotenv } from 'dotenv'

console.log('Application started in:', process.cwd())

const envFilePath = path.resolve(process.cwd(), '.env')
if (fs.existsSync(envFilePath)) {
  const config = dotenv()
  if (config.error != null) {
    throw config.error
  }
}

const localEnvFilePath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(localEnvFilePath)) {
  const localConfig = dotenv({
    path: localEnvFilePath,
    override: true,
  })
  if (localConfig.error != null) {
    throw localConfig.error
  }
}

const NEXT_DIR = path.join(process.cwd(), '../web')
const MONGODB_URL = process.env.MONGODB_URL ?? ''
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET ?? ''
const PORT = parseInt(process.env.PORT || '3000', 10)
const DEV = process.env.NODE_ENV !== 'production'
const HOSTNAME = process.env.HOSTNAME ?? '127.0.0.1'

const server = express()

const start = async () => {
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URL,
    express: server,
  })

  if (!process.env.NEXT_BUILD) {
    const nextApp = next({
      dir: NEXT_DIR,
      dev: DEV,
      hostname: HOSTNAME,
      port: PORT,
      customServer: true,
    })

    const nextHandler = nextApp.getRequestHandler()

    server.get('*', (req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
      console.log('NextJS started')

      server
        .once('error', (err) => {
          console.error(err)
          process.exit(1)
        })
        .listen(PORT, async () => {
          console.log(`Server listening on http://${HOSTNAME}:${PORT}...`)
        })
    })
  } else {
    server.listen(PORT, async () => {
      console.log('NextJS is now building...')
      // TODO: revisit - is this neccessary? Or should this custom server
      // be re-written to follow
      // https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
      // @ts-expect-error: error number of args
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })
  }
}

start()

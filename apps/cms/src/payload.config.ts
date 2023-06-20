import path from 'path'

import { buildConfig } from 'payload/config'

import nestedDocs from '@payloadcms/plugin-nested-docs'

import { Categories } from './collections/categories'
import { Media } from './collections/media'
import { Posts } from './collections/posts'
import { Tags } from './collections/tags'
import { Users } from './collections/users'
import { seed } from './seed'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL as string,
  i18n: {
    lng: 'en',
  },
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './custom.scss'),
    webpack: (config) => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config?.resolve?.alias,
            react: path.join(__dirname, '../node_modules/react'),
            'react-dom': path.join(__dirname, '../node_modules/react-dom'),
            'react-i18next': path.join(__dirname, '../node_modules/react-i18next'),
            payload: path.join(__dirname, '../node_modules/payload'),
            '@faceless-ui/modal': path.join(__dirname, '../node_modules/@faceless-ui/modal'),
          },
        },
      }
    },
  },
  collections: [Posts, Media, Categories, Tags, Users],
  localization: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [
    nestedDocs({
      collections: ['docs'],
      parentFieldSlug: 'parent',
      breadcrumbsFieldSlug: 'breadcrumbs',
      generateLabel: (_, doc: any) => doc.title,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED != null) {
      await seed(payload)
    }
  },
})

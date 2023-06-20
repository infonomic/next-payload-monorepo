import { formatPagePath } from './formatPagePath'

import type { Payload } from 'payload'

export const regeneratePage = async ({
  doc,
  collection,
  payload,
}: {
  doc: any // eslint-disable-line @typescript-eslint/no-explicit-any
  collection: string
  payload: Payload
}): Promise<void> => {
  const path = formatPagePath(collection, doc)

  try {
    const res = await fetch(
      `${process.env.PAYLOAD_PUBLIC_APP_URL as string}/api/revalidate?secret=${
        process.env.PAYLOAD_PRIVATE_NEXTJS_REVALIDATION_KEY as string
      }&path=${path}`
    )

    if (res.ok) {
      payload.logger.info(`Revalidated path ${path}`)
    } else {
      payload.logger.error(`Error revalidating path ${path}`)
    }
  } catch (err: unknown) {
    payload.logger.error(`Error hitting revalidate route for ${path}`)
  }
}

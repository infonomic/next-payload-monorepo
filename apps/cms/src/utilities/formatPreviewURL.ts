import { formatPagePath } from './formatPagePath'

export const formatPreviewURL = (
  collection: string,
  doc: any // eslint-disable-line @typescript-eslint/no-explicit-any
): string => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${process.env.PAYLOAD_PUBLIC_APP_URL}/api/preview?url=${formatPagePath(collection, doc)}`
}

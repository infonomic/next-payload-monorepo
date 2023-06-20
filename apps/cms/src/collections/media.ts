import path from 'path'

import type { CollectionConfig } from 'payload/types'

import { isAdmin, isAdminOrEditor } from '../access'

const getAdminThumbnail = ({ doc }: any): string => {
  if (doc.mimeType === 'image/svg+xml' || doc?.sizes?.thumbnail == null) {
    return doc.url
  } else {
    return doc.sizes.thumbnail.url
  }
}

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    enableRichTextLink: false,
    enableRichTextRelationship: false,
    group: 'Resources',
  },
  access: {
    create: isAdminOrEditor,
    read: ({ req }) => {
      if (req.payloadAPI === 'local') return true
      return false
    },
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    adminThumbnail: getAdminThumbnail,
    mimeTypes: ['image/*', 'audio/*', 'video/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        height: 400,
        width: 400,
        position: 'center',
      },
      {
        name: 'small',
        width: 900,
        height: 600,
        position: 'center',
      },
      {
        name: 'medium',
        width: 1200,
        height: 800,
        position: 'center',
      },
      {
        name: 'large',
        width: 2100,
        height: 1400,
        position: 'center',
      },
      {
        name: 'small_webp',
        width: 900,
        height: 600,
        position: 'center',
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'medium_webp',
        width: 1200,
        height: 800,
        position: 'center',
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'large_webp',
        width: 2100,
        height: 1400,
        position: 'center',
        formatOptions: {
          format: 'webp',
        },
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'darkModeFallback',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Choose an upload to render if the visitor is using dark mode.',
      },
    },
  ],
}

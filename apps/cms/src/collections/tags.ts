import { type CollectionConfig } from 'payload/types'

import { isAdminOrEditor, isAdmin } from '../access'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
    enableRichTextLink: false,
    enableRichTextRelationship: false,
    group: 'Taxonomy',
  },
  labels: {
    singular: 'Tag',
    plural: 'Tags',
  },
  access: {
    create: isAdminOrEditor,
    read: () => true,
    readVersions: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

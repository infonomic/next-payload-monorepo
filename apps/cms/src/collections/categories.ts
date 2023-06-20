import { type CollectionConfig } from 'payload/types'

import { isAdminOrEditor, isAdmin } from '../access'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    enableRichTextLink: false,
    enableRichTextRelationship: false,
    group: 'Taxonomy',
  },
  access: {
    create: isAdminOrEditor,
    read: () => true,
    readVersions: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

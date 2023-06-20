import { type CollectionConfig } from 'payload/types'

import { isAdmin, isAdminFieldLevel, isAdminOrSelf, isAdminOrSelfFieldLevel } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    enableRichTextLink: false,
    enableRichTextRelationship: false,
    group: 'Misc',
  },
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['public'],
      required: true,
      access: {
        read: isAdminOrSelfFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Public',
          value: 'public',
        },
      ],
    },
  ],
}

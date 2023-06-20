import type { Access } from 'payload/config'

import type { User } from '../payload-types'

export const publishedOnly: Access<
  any, // eslint-disable-line @typescript-eslint/no-explicit-any
  User
> = ({ req: { user } }) => {
  // if (user?.roles?.includes('admin')) {
  //   return true
  // }

  // Any authenticated user can read.
  if (user != null) {
    return true
  }

  // Otherwise - return query constraint
  return {
    _status: {
      equals: 'published',
    },
  }
}

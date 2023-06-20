import { type Payload } from 'payload'

import { User } from '../payload-types'

export const seed = async (payload: Payload): Promise<void> => {
  // const site1 = await payload.create<Site>({
  //   collection: 'sites',
  //   data: {
  //     title: 'Site 1',
  //   }
  // });

  // const site2 = await payload.create<Site>({
  //   collection: 'sites',
  //   data: {
  //     title: 'Site 2',
  //   }
  // });

  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create<'users'>({
    collection: 'users',
    data: {
      email: 'admin@someorg.com',
      password: 'Welcome100!',
      name: 'Anthony Bouch',
      roles: ['admin'],
    },
  })

  // This user will be created with the default role of `editor`
  await payload.create<'users'>({
    collection: 'users',
    data: {
      email: 'guest@someorg.com',
      password: 'Welcome100!',
      name: 'Guest User',
      roles: ['public'],
    },
  })

  // This page will be created and assigned to Site 1
  // await payload.create<Page>({
  //   collection: 'pages',
  //   data: {
  //     _status: 'published',
  //     title: 'Site 1 Home',
  //     content: [
  //       {
  //         children: [
  //           {
  //             text: "Here's some content for Site 1's home page."
  //           }
  //         ]
  //       }
  //     ],
  //     site: site1.id
  //   }
  // })

  // // This page will be created and assigned to Site 2
  // await payload.create<Page>({
  //   collection: 'pages',
  //   data: {
  //     _status: 'published',
  //     title: 'Site 2 Home',
  //     content: [
  //       {
  //         children: [
  //           {
  //             text: "Here's some content for Site 2's home page."
  //           }
  //         ]
  //       }
  //     ],
  //     site: site2.id
  //   }
  // })
}

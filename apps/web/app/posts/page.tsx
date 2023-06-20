import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import { Card } from '@org/uikit'
import { Post } from '@org/cms'

import { Branding } from '../components/branding'
import { Menu } from '../components/menu'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'A test posts page.',
  openGraph: {
    title: 'Posts',
    description: 'A test posts page.',
  },
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Posts() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/posts/page.tsx</code>
        </p>
        <Branding />
      </div>

      <div className="w-full max-w-6xl">
        <div className="w-full sm:grid sm:grid-cols-3 gap-3">
          {data?.docs?.length > 0 ? (
            data.docs.map((doc: Post) => (
              <Card key={doc.id} hover={true} className="mb-4">
                <Link href="/">
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {doc.title}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    A short excerpt for this post...
                  </p>
                </Link>
                {doc.title}
              </Card>
            ))
          ) : (
            <p>
              No posts yet - vist <a href="http://localhost:3000/admin">http://localhost/admin</a>{' '}
              to create some!
            </p>
          )}
        </div>
      </div>
      <Menu />
    </main>
  )
}

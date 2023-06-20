import Image from 'next/image'
import { Metadata } from 'next'

import { Menu } from '../components/menu'
import { Branding } from '../components/branding'

export const metadata: Metadata = {
  title: 'About',
  description: 'A test about page that I just made up',
  openGraph: {
    title: 'About',
    description: 'A test about page that I just made up',
  },
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/about/page.tsx</code>
        </p>
        <Branding />
      </div>

      <div className="max-w-6xl">
        <div>
          <p>An about page here...</p>
        </div>
      </div>
      <Menu />
    </main>
  )
}

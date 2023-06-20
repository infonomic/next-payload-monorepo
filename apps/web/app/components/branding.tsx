import Image from 'next/image'
export function Branding() {
  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <span>by&nbsp;</span>
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
      <span>&nbsp;and&nbsp;</span>
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://payloadcms.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/payload.svg"
          alt="Payload Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  )
}

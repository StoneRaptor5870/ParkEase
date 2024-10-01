'use client'

import { CarScene } from '@autospace/3d/src/scenes/CarScene'
import { IconSearch } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen min-h-[300px] md:min-h-[400px]">
      <div className="absolute top-16 bottom-0 left-0 right-0">
        <CarScene />
      </div>
      <div className="flex flex-col items-start space-y-2 font-black text-7xl md:text-8xl">
        <div className="z-10 inline-block px-3 bg-primary mt-2">Need</div>{' '}
        <div className="z-10 inline-block px-3 bg-primary text-5xl md:text-8xl">
          parking?
        </div>
        <Link
          href="/search"
          className="z-10 flex items-center gap-2 px-3 py-2 text-xl font-medium text-black underline underline-offset-4 bg-primary md:text-lg"
        >
          <IconSearch /> Search now
        </Link>
      </div>
    </main>
  )
}

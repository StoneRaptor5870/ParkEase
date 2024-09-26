'use client'

import { IsLoggedIn } from '@autospace/ui/components/organisms/IsLoggedIn'
import { IsValet } from '@autospace/ui/components/organisms/IsValet'

export default function Home() {
  return (
    <main>
      <IsLoggedIn>
        {(uid) => <IsValet uid={uid}>Hello valet.</IsValet>}
      </IsLoggedIn>
    </main>
  )
}

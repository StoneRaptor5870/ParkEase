'use client'

import { IsLoggedIn } from '@autospace/ui/components/organisms/IsLoggedIn'
import { IsValet } from '@autospace/ui/components/organisms/IsValet'
import { ValetTrips } from '@autospace/ui/components/templates/ValetTrips'

export default function Page() {
  return (
    <main>
      <IsLoggedIn>
        {(uid) => (
          <IsValet uid={uid}>
            <ValetTrips uid={uid} />
          </IsValet>
        )}
      </IsLoggedIn>
    </main>
  )
}

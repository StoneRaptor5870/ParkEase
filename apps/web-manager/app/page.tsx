'use client'

import { IsLoggedIn } from '@autospace/ui/components/organisms/IsLoggedIn'
import { IsManager } from '@autospace/ui/components/organisms/IsManager'
import { ListGarages } from '@autospace/ui/components/organisms/ListGarages'

export default function Home() {
  return (
    <IsLoggedIn>
      <IsManager>
        {(companyId) => <ListGarages companyId={companyId} />}
      </IsManager>
    </IsLoggedIn>
  )
}

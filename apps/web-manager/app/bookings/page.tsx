import { IsLoggedIn } from '@autospace/ui/components/organisms/IsLoggedIn'
import { IsManager } from '@autospace/ui/components/organisms/IsManager'
import { ListGarageBookings } from '@autospace/ui/components/templates/ListGarageBookings'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const garageId = Number(searchParams['garageId'])
  return (
    <main>
      <IsLoggedIn>
        <IsManager>
          <ListGarageBookings garageId={garageId} />
        </IsManager>
      </IsLoggedIn>
    </main>
  )
}

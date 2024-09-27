import { IsAdmin } from '@autospace/ui/components/organisms/IsAdmin'
import { AdminHome } from '@autospace/ui/components/templates/AdminHome'

export default function Home() {
  return (
    <main>
      <IsAdmin>
        <AdminHome />
      </IsAdmin>
    </main>
  )
}

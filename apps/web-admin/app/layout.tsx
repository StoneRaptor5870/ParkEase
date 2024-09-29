import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@autospace/ui/app/globals.css'
import { MenuItem } from '@autospace/util/types'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import { SessionProvider } from '@autospace/ui/components/molecules/SessionProvider'
import { ToastContainer } from '@autospace/ui/components/molecules/Toast'
import { Container } from '@autospace/ui/components/atoms/Container'
import { Header } from '@autospace/ui/components/organisms/Header'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'ParkEase | Admin',
  description: 'Admin access for parkease management.',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Garages', href: '/' },
  { label: 'Admins', href: '/manageAdmins' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-25`}>
        <SessionProvider>
          <ApolloProvider>
            <Header type="admin" menuItems={MENUITEMS} />
            <Container>{children}</Container>
          </ApolloProvider>
        </SessionProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

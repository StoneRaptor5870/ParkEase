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
  title: 'Autospace | Valet',
  description: 'ParkEase valet access portal.',
}

const MENUITEMS: MenuItem[] = [{ label: 'My Trips', href: '/my-trips' }]
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
            <Header type="valet" menuItems={MENUITEMS} />
            <Container>{children}</Container>
          </ApolloProvider>
        </SessionProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

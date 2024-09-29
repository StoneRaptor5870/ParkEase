import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import '@autospace/ui/app/globals.css'
import { SessionProvider } from '@autospace/ui/components/molecules/SessionProvider'
import { Header } from '@autospace/ui/components/organisms/Header'
import { MenuItem } from '@autospace/util/types'
import { ToastContainer } from '@autospace/ui/components/molecules/Toast'
import { Container } from '@autospace/ui/components/atoms/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ParkEase Customer',
  description: 'Vehicle parking application for customers.',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body
            className={`${inter.className} antialiased bg-gray-25`}
          >
            <Header menuItems={MENUITEMS} />
            <Container>{children}</Container>
            <ToastContainer />
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}

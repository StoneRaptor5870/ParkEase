import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import '@autospace/ui/app/globals.css'
import { SessionProvider } from '@autospace/ui/components/molecules/SessionProvider'
import { Header } from '@autospace/ui/components/organisms/Header'
import { MenuItem } from '@autospace/util/types'
import { ToastContainer } from '@autospace/ui/components/molecules/Toast'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'ParkEase Customer',
  description: 'Vehicle parking application for customers.',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'About', href: '/about' },
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
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-25`}
          >
            <Header menuItems={MENUITEMS} />
            {children}
            <ToastContainer />
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}

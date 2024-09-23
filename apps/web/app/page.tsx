'use client'

import { useQuery } from '@apollo/client'
import { CompaniesDocument, SearchGaragesDocument, } from '@autospace/network/src/gql/generated'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@autospace/ui/components/atoms/Button'
import { Sidebar } from '@autospace/ui/components/organisms/Sidebar'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  const { data: sessionData, status } = useSession()
  const { data: garages } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2024-12-14', start: '2024-12-04' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })

  if (loading) return <div>Loading...</div>

  return (
    <main className="bg-primary h-screen w-screen">
      ParkEase Home 
      <div>
        {data?.companies && data.companies.length > 0 ? (
          data.companies.map((company) => (
            <div className="p-4 rounded" key={company.id}>
              <div>{company.displayName}</div>
              <div>{company.description}</div>
            </div>
          ))
        ) : (
          <div>No companies</div>
        )}
      </div>
      <div>
        {garages?.searchGarages && garages.searchGarages.length > 0 ? (
          garages?.searchGarages.map((garage) => (
            <pre key={garage.id}>{JSON.stringify(garage, null, 2)}</pre>
          ))
        ) : (
          <div>No garages</div>
        )}
      </div>
    </main>
  )
}

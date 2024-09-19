'use client'

import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)

  if (loading) return <div>Loading...</div>

  return (
    <main className="bg-primary">
      ParkEase Home {add(10, 5)}
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
    </main>
  )
}

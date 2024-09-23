'use client'

import { SearchPage } from '@autospace/ui/components/templates/SearchPage'
import { FormProviderSearchGarage } from '@autospace/forms/src/searchGarages'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}
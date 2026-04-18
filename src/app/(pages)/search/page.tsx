import SearchComp from '@/components/Search/SearchComp/SearchComp'
import { getAllBrands } from '@/services/brands/getAllBrands'
import { getAllCategories } from '@/services/categories/getAllCategories/getAllCategories'
import React from 'react'

export default async function Search() {
    const allCategories = await getAllCategories()
    const allBrands = await getAllBrands()
  return (
    <SearchComp allBrands={allBrands?.data} allCategories={allCategories?.data} />
  )
}

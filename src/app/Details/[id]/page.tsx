import PDetails from '@/app/components/PDetails'
import ProductsCard from '@/app/components/ProductsCard'
import { GEtSanitydata } from '@/app/components/SanityData'
import React from 'react'

export default async function page({params}:{params:{id:string}}) {

  const data=await GEtSanitydata()
  const Poduct=data.filter((elm)=>elm._id==params.id)
  return <>
  <ProductsCard Product={Poduct} />

<PDetails />

  
  </>

}

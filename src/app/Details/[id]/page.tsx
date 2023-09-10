import PDetails from '@/app/components/PDetails'
import ProductsCard from '@/app/components/ProductsCard'
import { GEtSanitydata } from '@/app/components/SanityData'
import { v4 } from "uuid"
import { cookies } from "next/dist/client/components/headers";
import React from 'react'

export default async function page({params}:{params:{id:string}}) {

  const data=await GEtSanitydata()

  // const idgenerate = v4()
  //   const setcookey = cookies()


  //   if (!cookies().get('user_id')?.value) {

  //       setcookey.set('user_id', idgenerate)

  //   }

  const Poduct=data.filter((elm)=>elm._id==params.id)
  // const cookie=cookies().get('user_id')?.value as string 
  return <>
  <ProductsCard Product={Poduct} />

<PDetails />

  
  </>

}

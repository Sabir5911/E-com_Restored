import React from 'react'
import Cart from '../components/Cart'
import { cookies } from 'next/dist/client/components/headers'
import { mongo ,FilterQuery} from "mongoose"
import { createTypeReferenceDirectiveResolutionCache } from 'typescript';
import { auth } from '@clerk/nextjs';
import GetData from './GetData';
import { PRODUCTS } from '../components/SanityData';
import { Products } from '../store/slice';
import { NewUser } from '../lib/drizzle';


export default async function page() {
        

  const data:NewUser[]=await GetData()

console.log(data,'datadat');


const {userId}=auth()
const filter=data.filter((elm)=>elm.user_id===userId)

console.log(filter);

                            
  return (
    <Cart   filter={filter}/>
  )
}

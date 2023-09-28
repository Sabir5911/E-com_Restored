import Cart from '../components/Cart'
import GetData from './GetData';

import { NewUser } from '../lib/drizzle';
import { auth } from '@clerk/nextjs';


export default async function page() {
        

  const data:NewUser[]=await GetData()

const { userId } = auth()

const filter=data .filter((elm)=>elm.user_id===userId)

console.log(filter);

                            
  return (
    <Cart   filter={filter}/>
  )
}

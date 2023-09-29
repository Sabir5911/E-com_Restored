import Cart from '../components/Cart'
import GetData from './GetData';

import { NewUser } from '../lib/drizzle';
import { auth } from '@clerk/nextjs';


export default async function page() {
        

  const data:NewUser[]=await GetData()
  console.log(data);
  

const { userId :user_id } = auth()

const filter=data.filter((elm)=>elm.user_id===user_id as string)

console.log(filter,'data a raha from filter');

                            
  return (
    <Cart   filter={filter}/>
  )
}

import Cart from '../components/Cart'
import GetData from './GetData';

import { NewUser } from '../lib/drizzle';
import { auth } from '@clerk/nextjs';
import { cookies } from 'next/dist/client/components/headers';


export default async function page() {
        

  const data:NewUser[]=await GetData()
  console.log(data);
  
  const filter = data.filter(
    (elm) => elm.user_id == cookies().get("user_id")?.value
  );




                            
  return (
    <Cart   filter={filter}/>
  )
}

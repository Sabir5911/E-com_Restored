import Cart from '../components/Cart'
import GetData from './GetData';

import { NewUser } from '../lib/drizzle';
import { cookies } from 'next/dist/client/components/headers';


export default async function page() {
        

  const data:NewUser[]=await GetData()
  
  const filter = data.filter( (elm) => elm.user_id == cookies().get("user_id")?.value as string  );

                  
  return (
    <Cart   filter={filter}/>
  )
}

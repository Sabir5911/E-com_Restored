import Cart from '../components/Cart'

import {  User} from '../lib/drizzle';
import { cookies } from 'next/dist/client/components/headers';

const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://ecom-59111.vercel.app";

 async function GetData() {
    
    try {
        const res = await fetch(`${BASE_URL}/api`, {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET",
          cache: "no-store",
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
    console.log(result);
    
        return result;
      } catch (error) {
        console.log((error as { message: string }).message);
      }
}


export default async function page() {
        

  const data:User[]=await GetData()
  
  console.log(data,'datatatattata');
  
  const cartdata = data .filter( (elm) => elm.user_id == cookies().get("user_id")?.value as string  );

                  
  return (
    <Cart   data={cartdata}/>
  
  )
}

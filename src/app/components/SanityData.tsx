import { client } from "../../../sanity/lib/client";
import { Image as IIMAGE } from "sanity";

export interface PRODUCTS {
  _id: string;
  image: IIMAGE[];
  price: number;
  name: string;
  Type: string;
  category: {
    name: string;
  };
}

export const GEtSanitydata = async () => {
  const res: PRODUCTS[] = await client.fetch(
    `*[_type=='product'] {
   
    _id,
    image,
    price,
    name,  
    Type,
 category->{
  name
 }
   }
    `,
    {
      caches: "no-store",
    }
  );

  return res;
};

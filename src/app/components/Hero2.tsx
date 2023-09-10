import Image from 'next/image';

import React from 'react'
import { GEtSanitydata, PRODUCTS } from './SanityData'
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';
export default async function Hero2() {

    const data:PRODUCTS[]=await GEtSanitydata()

    console.log(data);

   const res= data.slice(0,3)
  
   return (
    <>
        <div className="flex flex-col justify-center items-center ">
          <text className="text-[#0093F8] text-xl font-bold py-11">
            PRODUCTS
          </text>
          <h1 className="text-4xl font-bold text-center">Check What We Have</h1>
        </div>

        <div className="flex flex-wrap justify-evenly items-center ">
          {res.map((elm,i) => (
            <Link href={{ pathname: `/Details/${elm._id}` }}  key={i}>
              <div className="mt-10 rounded-md ">
                <Image
                  src={urlForImage(elm.image[0]).url()}
                  width={300}
                  height={300}
                  alt="sa"
                  className="hover:scale-110 duration-500"
                />
                <h3 className="font-bold text-lg mt-3">{elm.name}</h3>
                <span className="text-lg font-semibold text-gray-400">
                  {elm.Type}
                </span>
                <p className="font-bold text-lg">${elm.price}</p>
              </div>
            </Link>
          ))}
        </div>
    </>
  );
}
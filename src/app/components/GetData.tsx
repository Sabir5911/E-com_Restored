import React from 'react'

const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://ecom-59111.vercel.app";

export default async function GetData() {
    
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

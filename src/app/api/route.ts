
import { auth } from "@clerk/nextjs";

import { db, userdetails } from "../lib/drizzle";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {

  try {
    const res = await db.select().from(userdetails)
    //Converting circular structure to JSON
    // --> starting at object with constructor 'PgTable'
    // |     property 'task1' -> object with constructor 'PgVarchar'
    // --- property 'table' closes the circle   error resolved (await) 
    return NextResponse.json(res)

  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}

export const POST = async (request: NextRequest) => {

  const res = await request.json()

  const { userId } = auth()

  try {
    const req = await db.insert(userdetails).values({
      product_id: res.product_id,
      product_name: res.product_name,
      quantity: res.quantity,
      user_id: userId as string,
      product_image: res.product_image,
      product_type: res.product_type,
      product_size: res.product_size,
    price: res.price ,


    }).returning()

    return NextResponse.json(req)
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}









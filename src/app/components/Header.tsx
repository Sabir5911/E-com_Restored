"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import serch from "../../../public/assets/serch.png";

import logo from "../../../public/assets/Logo.jpg";

import shop from "../../../public/assets/shop.png";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  let data = [
    {
      name: "Female",
      href: "/Products/Female",
    },
    {
      name: "Male",
      href: "/Products/Male",
    },
    {
      name: "Kids",
      href: "/Products/Kids",
    },
    {
      name: "AllProducts",
      href: "/Products/AllProducts",
    },
  ];
  const TotalAmont = useSelector(
    (state: RootState) => state.cartSlice.quantity
  );
  return (
    <>
      <main className="mt-12">
        <div className="flex justify-around items-center  ">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="image"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>

          <ul className=" justify-center items-center text-base gap-x-12 font-medium hidden lg:flex ">
            {data.map((elm, i) => (
              <Link href={elm.href} key={i + 1}>
                {" "}
                {elm.name}
              </Link>
            ))}
          </ul>

          <div className=" border border-slate-300 rounded-md   h-8 w-96  gap-x-2 items-center justify-start hidden lg:flex ">
            <Image src={serch} alt="image" width={25} height={25} />
            <input
              type="email"
              name="email"
              className=" outline-0	 "
              placeholder="What are you looking for"
            />
          </div>
          <UserButton afterSignOutUrl="/"/>

          <div className="flex  items-center justify-center gap-3">
            <div className="hidden lg:flex"></div>
            <div className="lg:hidden"></div>

            <Link href={"/cart"}>
              <div className="flex  items-center justify-center items-center gap-3">
                <div className="hidden lg:flex">
                  <BsCart3 size={25} />

                  <span className=" w-5 h-5 float-right  rounded-full text-white bg-red-500 text-sm flex justify-center items-center">
                    {TotalAmont}
                  </span>

                  <div></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

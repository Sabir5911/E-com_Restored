"use client";
import React, { useState } from "react";
import { PRODUCTS } from "./SanityData";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useDispatch, useSelector } from "react-redux";
import { Products, cartActions } from "../store/slice";
import { RootState } from "../store/store";
import { useRouter } from "next/navigation";
export default function ProductsCard({ Product }: { Product: PRODUCTS[] }) {
  const [Size, SetSize] = useState("L");

  const handleSize = (size: string) => {
    SetSize(size);
  };

  const { refresh } = useRouter();
  const handleColor = (Seleted_Size: string) =>
    Size === Seleted_Size
      ? "bg-slate-900 text-white"
      : "bg-slate-300 text-white";

  const Totalamount: number = useSelector(
    (state: RootState) => state.cartSlice.TotalAmount
  );

  const [Quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(Quantity + 1);
  };
  const decrement = () => {
    setQuantity(Quantity - 1);

    if (Quantity <= 1) {
      setQuantity(1);
    }
  };

  const [index, setindex] = useState(0);
  console.log(index);

  const ChangeIndex = (i: number) => {
    setindex(i);
  };

  const dispath = useDispatch();

  const handledata = (data: Products) => {
    dispath(cartActions.addProduct(data));
  };

  // const handleapi = async () => {

  //   const data= await fetch("/api", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({

  //       product_id: Product[0]._id,
  //       product_name: Product[0].name,
  //       quantity: Quantity,
  //       product_image: urlForImage(Product[0].image[0]).url(),
  //       product_type: Product[0].Type,
  //       price:Product[0].price as number,

  //       product_size: Size,


  //     }),

  //   });

  //   const result = await data.json();
    
  //   
  // };
  refresh();

  return (
    <>
      <div>
        {Product.map((elm, i) => (
          <div
            className="mt-12 flex  justify-evenly flex-wrap items-center "
            key={i}
          >
            <div className="w-72 lg:w-[500px]">
              {Product.map((elm, i) => (
                <div key={i} className="flex gap-x-10">
                  <div className="gap-8">
                    {elm.image.map((elm, i) => (
                      <div
                        onMouseEnter={() => ChangeIndex(i)}
                        key={i}
                        className="mt-3"
                      >
                        <Image
                          src={urlForImage(elm).url()}
                          alt="sa"
                          width={200}
                          height={200}
                          priority={true}
                          className="border 2  hover:scale-105 duration-300 "
                        />
                      </div>
                    ))}
                  </div>
                  <Image
                    src={urlForImage(elm.image[index]).url()}
                    alt="image"
                    width={900}
                    priority={true}
                    height={900}
                    className="object-fill	rounded border-2 		"
                  />
                </div>
              ))}
            </div>

            <div>
              <div>
                <h1 className="text-2xl lg:text-3xl">{elm.name}</h1>
                <text className="text-xl text-[#C6C6C6] font-medium">
                  {elm.Type}
                </text>
              </div>

              <div className="mt-2">
                <text className="text-xl font-bold">SELECT SIZE</text>
                <div className="flex gap-x-2 text-2xl mt-5 font-semibold text-[#666] lg:gap-x-5">
                  {["XS", "S", "M", "L", "XL"].map((elm, i) => (
                    <div
                      onClick={() => handleSize(elm)}
                      key={i}
                      className={`w-10 h-10 flex justify-center items-center rounded-full cursor-pointer ${handleColor(
                        elm
                      )} hover:bg-yellow-300`}
                    >
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
              {/* //////////////////// */}

              <div className="flex gap-x-10 justify-center items-center mt-8  flex-col float-left ">
                <div className="flex items-center gap-x-2 text-2xl">
                  <h1 className="text-xl font-bold ">QUANTITY :</h1>

                  {/* Minus */}
                  <button
                    onClick={decrement}
                    className="w-8 h-8 border rounded-full center "
                  >
                    -
                  </button>
                  {/* Number */}
                  <span className="text-sm">{Quantity}</span>
                  {/* Plus */}
                  <button
                    onClick={increment}
                    className="w-8 h-8 border rounded-full center text-2xl"
                  >
                    +
                  </button>
                </div>
                <div
                  className="mt-7 flex gap-x-10  float-left lg:float-none"
                  // onClick={handleapi}
                >
                  <button
                    className="bg-blue-100 text-[#0000ff] px-4 py-3 rounded-md hover:shadow-xl font-semibold  text-base  "
                    onClick={() =>
                      handledata({
                        _id: Product[0]._id,
                        category: Product[0].category.name,
                        image: urlForImage(Product[0].image[0]).url(),
                        name: Product[0].name,
                        price: Product[0].price,
                        quantity: Quantity,
                        totalprice: Totalamount,
                        Type: Product[0].Type,
                        size: Size,
                      })
                    
                    }
                  >
                    ADD TO CART
                  </button>
                  <text className="text-3xl font-bold self-center">
                    {elm.price}$
                  </text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

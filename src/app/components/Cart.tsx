//@ts-nocheck
"use client";
import { Products, cartActions } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { RootState } from "../store/store";
import Image from "next/image";
import { IUser } from "../lib/model/schema";
import {useRouter}  from "next/navigation";
import { urlForImage } from "../../../sanity/lib/image";
import { NewUser } from "../lib/drizzle";

export default function Cart({filter}:{filter:NewUser[]}) {



  const data: Products[] = useSelector(
    (state: RootState) => state.cartSlice.items
  );     

  const quantity: number = useSelector(
    (state: RootState) => state.cartSlice.quantity
  );

  const Totalamount: number = useSelector(
    (state: RootState) => state.cartSlice.TotalAmount
  );

  return (
    <>
      <div className="flex   justify-start    flex-wrap mt-32">
        <div>
          {filter.map((elm, i) => (
            <div
              className="flex gap-x-10 p-2 justify-around flex-wrap flex-1		"
              key={i }
            >
              <Image
                src={`${elm.product_image}`}
                width={120}
                height={120}
                alt="sa"
                className="rounded-md	w-auto h-auto	mb-5 "
              />
              <div className="flex  flex-col flex-wrap   justify-center  ">
                <div className="text-xs flex gap lg:text-lg  font-bold ">
                  {" "}
                  {elm.product_name}
                </div>
                <div className="text-xs text-[#94A3B8] font-bold ">
                  {" "}
                  {elm.product_type}
                </div>
                <div className="text-xs font-bold"> {elm.price}$</div>

                {/* ///////////// */}

                <div className="mt-3 lg:mt-5 ">
                  <div className="text-sm font-medium ">
                    Delivery Estimation
                  </div>
                  <div className="text-xs font-semibold text-[#FFC700]">
                    5 Working Days
                  </div>

                  <div className="flex gap-5 text-[#85858B]">
                    <div className="text-xs font-sans font-semibold">
                      Qty:{elm.quantity}
                    </div>
                    <div className="text-xs font-sans font-semibold ">
                      {" "}
                      Size :{elm.product_size}
                    </div>
                  </div>
                </div>
              </div>
              <div className="float right my-auto ">
                <button>
                  {" "}
                  <AiOutlineDelete size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ///////////////////////// */}

        <div className="bg-[#D1D5DB] w-[280px] h-[200px] rounded-md px-6   mx-auto      mt-6   ">
          <h1 className="text-lg  font-bold mt-3">Order Summary</h1>

          <div className="flex  flex-col  justify-start">
            <div className="flex justify-between mt-5">
              <text className="text-lg font-medium">Items in Cart:</text>
              <div className="text-lg font-medium">{quantity} </div>
            </div>
            <hr />

            <div className="flex justify-between mt-5">
              <text className="text-lg font-sans">Sub Total</text>
              <div className="text-lg font-sans">{Totalamount} Pk</div>
            </div>
            <hr />

            <div className="flex justify-center items-center"></div>
          </div>
          <button
            // onClick={handleCheckout}
            type="button"
            className="inline-block rounded flex  mt-4 mx-auto bg-[#3061AF] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

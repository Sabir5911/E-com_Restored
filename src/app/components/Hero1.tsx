import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import boy1 from "../../../public/assets/boy1.webp";
import { Data, Data2 } from "./Data/Data";
export default function Hero1() {
  return (
    <>
      <section>
          <div className="flex flex-col justify-center items-center mt-32 gap-y-4">
            <text className="text-[#0062F5] font-semibold">PROMOTIONS</text>
            <h1 className="text-4xl font-semibold text-center">Our Promotions Events</h1>
          </div>


          <div className=" mt-12   lg:flex  justify-center items-center gap-11 flex-wrap flex flex-1">
            {/* first box */}
            <div>
              <div className="flex flex-1 flex-col justify-center items-center gap-y-3 ">

                <div className="bg-[#D6D6D8] flex  items-center lg:w-[500px] h-52  w-96  justify-center">
                  <div >
                    <h1 className="lg:text-3xl font-bold text-2xl text-center">GET UP TO 60%</h1>
                    <text className="lg:text-lg pt-3 text-base text-center">
                      For the summer  season
                    </text>
                  </div>
                  <div className="lg:w-48 -mb-16 self-center w-44 ">
                    <Image
                      src={"/assets/girl2.webp"}
                      alt="sa"
                      width={300}
                      height={310}
                    />
                  </div>
                </div>
                {/* second box */}
                <div>
                  <div className="bg-[#212121]   items-center lg:w-[500px] justify-center h-52  w-96 ">
                    <div className="flex justify-center items-center flex-col pt-10">
                      <h1 className="text-white text-3xl font-bold">
                        GET 30% Off
                      </h1>
                      <div className="flex flex-col justify-center items-center pt-6 gap-2">
                        <text className="text-white">USE PROMO CODE</text>
                        <button className="mb-4 text-white font-bold bg-[#474747] px-11 py-2 rounded-md">
                          D I N E W E E K E N D S A L E{" "}
                        </button>
                      </div>
                    </div>
                  </div>     
                </div>
              </div>          
            </div>

            <div className="   items-center justify-center  flex gap-x-5 lg:flex flex-wrap">
              {Data.map((elm,i=0) => (
                <div className={`  w-96  bg-[#EFE1C7] self-center lg:w-80`} key={i+1}>
                  <div className="flex flex-col justify-center ml-5 ">
                    <h4 className="font-thick  text-lg pt-10">{elm.Text}</h4>
                    <div className="flex  gap-3 mt-2 ">
                      <text className="line-through text-xl">
                        {elm.Number2}
                      </text>
                      <text className="text-xl font-bold">{elm.Number}</text>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={elm.Image} alt="sa" width={230} height={230} />
                  </div>
                </div>
              ))}
              {Data2.map((elm,i=0) => (
                <div className={`  w-96  bg-[#D7D7D9] self-center lg:w-80 lg:mt-0 mt-5`} key={i+1}>
                  <div className="flex flex-col justify-center ml-5 ">
                    <h4 className="font-thick  text-lg pt-10">{elm.Text}</h4>
                    <div className="flex  gap-3 mt-2 ">
                      <text className="line-through text-xl">
                        {elm.Number2}
                      </text>
                      <text className="text-xl font-bold">{elm.Number}</text>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={elm.Image} alt="sa" width={230} height={230} />
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  );
}
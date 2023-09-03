import React from "react";

export default function PDetails() {
  return (
    <>
      <div className="bg-white  mt-28 shadow-md w-auto max-w-5xl mx-auto px-14">
        {/* //////////////// */}
        <div className="  flex justify-center  flex-col pt-20 ">
          <h1 className="text-3xl font-bold">Product Information</h1>

          <span className="   absolute lg:text-[120px] text-4xl font-bold  opacity-10 text-gray-500 z-10 ">
            Overview
          </span>
        </div>

        <hr className="my-14 border" />
        {/* //////////////// */}


          <div >

            <div className="flex justify-around ">
              <div className="text-lg text-slate-500 font-bold">
                <h1>PRODUCT DETAILS</h1>
              </div>
              <div className="text-base text-justify  text-slate-500 font-light  basis-2/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>

            <div className="flex justify-around  mt-16 ">
              <div className="text-lg text-slate-500 font-bold">
                <h1>PRODUCT CARE</h1>
              </div>

              <div className="text-lg font-semibold mb-20 basis-2/4 ">
                <li> Hand wash using cold water.</li>
                <li> Do not using bleach..</li>
                <li> Hang it to dry..</li>
                <li> Iron on low temperaturer.</li>
              </div>
            </div>

            {/* //////////////// */}
          </div>
        </div>
    </>
  );
}

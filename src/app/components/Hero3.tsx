import Image from "next/image";
import Link from "next/link";
export default function Hero3() {
  return (
    <>
<div className="flex  justify-center lg:ml-[500px] mt-32 text-left">
        <h1 className="lg:text-5xl font-bold max-w-lg -mb-12 text-4xl">
          Unique and Authentic Vintage Designer <br /> Jewellery
        </h1>
      </div>
  

      <div className="flex justify-center items-center flex-wrap lg:flex justify-around  bg-[#FBFCFF] ">
{/* ////////////////////////////// */}
          <div className="flex flex-col  justify-center  pt-12  items-center ">

            <div className="flex justify-center  items-center  mt-16 relative  w-96 lg:gap-x-20 gap-x-2" >

              <span className="   absolute lg:text-[85px] text-6xl font-bold  opacity-10 text-gray-500 z-10 ">
                Different from others
              </span>

              <div className="flex flex-col gap-y-6 justify-center items-center  ">
                <div>
                  <h1 className="text-base font-bold lg:text-lg">
                    Using Good Quality  Materials
                  </h1>
                  <p className="text-sm  ">
                    Lorem ipsum dolor sit 
                    amt consectetur 
                    adipiscing elit.
                  </p>
                </div>
                <div>
                  <h1 className="text-base font-bold lg:text-lg">
                    Modern Fashion <br/>
                    Design
                  </h1>
                  <p className="text-sm ">
                    Lorem ipsum dolor sit  amt consectetur {" "}
                    adipiscing elit.
                  </p>
                </div>
              </div>

              {/* second */}
              <div className="flex flex-col gap-y-6 justify-center items-center">
                <div>
                  <h1 className="text-base font-bold">
                    100% Handmade  Products
                  </h1>
                  <p className="text-sm ">
                    Lorem ipsum dolor sit  amt consectetur
                     adipiscing elit.
                  </p>
                </div>
                <div>
                  <h1 className="text-base font-bold">
                    Discount for Bulk Orders
                  </h1>
                  <p className="text-sm ">
                    Lorem ipsum dolor sit  amt consectetur {" "}
                    adipiscing elit.
                  </p>
                </div>
              </div>
              
            </div>
{/* ...................             */}
           
          </div>

          {/* second box */}
          <div className=" flex justify-center items-center gap-x-3   mt-16 flex-wrap  ">
              <Image
                src={"/assets/girl5.png"}
                alt="12"
                width={200}
                height={200}
              />
              <div>
                <p className="text-sm text-slate-700    text-base max-w-sm text-justify mt-7">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Link href={"/AllProducts"}>
                  <button className="bg-black text-white font-semibold mt-6 px-4 py-2 flex mx-auto lg:float-left">
                    See all products
                  </button>
                </Link>
              </div>
            </div>
        </div>

    </>
  );
}
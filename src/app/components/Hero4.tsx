import React from 'react'

export default function Hero4() {
  return <>       

  
<div className='flex flex-col justify-center items-center   mt-40  relative  '>
<span className='absolute text-gray-500 lg:text-[100px] font-bold  opacity-10 text-6xl mx-auto	'>Newsletter</span>

<h1 className='text-4xl font-bold mb-6 text-center'>Subscribe Our Newsletter</h1>
    <div className='text-base py-6 text-center' >Get the latest information and promo offers directly</div>
  
    <div className='   gap-4  flex justify-center items-center flex-wrap lg:flex' >
    
        <input placeholder='input email adress ' className='border text-base w-72 h-12 pl-3 rounded-none '></input>
        <button className='bg-black text-white font-semibold px-3 py-3 rounded-sm text-sm  '>Get Started</button>

    </div>


</div>     

  </>
}
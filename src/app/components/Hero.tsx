import React from 'react'
import Image from 'next/image'
import shop1 from '../../../public/assets/shop1.svg'
import girl from '../../../public/assets/girl.jpg'
import s from '../../../public/assets/s.webp'
 import bust from '../../../public/assets/bust.webp'
import bust3 from '../../../public/assets/bust3.webp'
import bust4 from '../../../public/assets/bust4.webp'

export default function Hero() {
  return <>

      <main className='mt-44'>

        <div className='flex justify-around items-center'>
          <div className='lg:flex flex-col    '>
            <div>
              {/* <Button Text='Sale 70%' /> */}
            </div>
            <div className='mt-8  max-w-md'>
              <h1 className='lg:text-5xl font-bold mt-3 text-4xl  '>
                An Industrial  Take on streetwear
              </h1>
              <div className='mt-5  text-base max-w-xs lg:text-lg'>
              <text >
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </text>
            </div>
                      
            <div className='mt-12 '>

            <button className='flex justify-center items-center bg-slate-900 border text-white lg:py-4 lg:px-5 p-3 rounded-sm font-bold text-sm lg:text-lg ' >
            <Image src={shop1} alt='as' className='lg:w-10 h-10 w-10 h-10' />

    Start Shopping
    </button>

            </div>
            </div>




            <div className='flex  flex-wrap gap-x-8 mt-6 '>
              <Image src={s} alt='image' />
              <Image src={bust} alt='image' />
              <Image src={bust3} alt='image' />      
              <Image src={bust4} alt='image' />

            </div>
          </div>     
        
          <div className='hidden lg:flex  ' >

  <Image src={girl} alt='image' width={500} height={500}  />
</div>

        </div>


      </main>

  </>
}
'use client';

import React, { useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';

function Test() {

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6">
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto align-middle justify-center md:py-32 px-4'>

          {/* Left */}
          <div className='md:ml-5'>
            {/* TOP */}
            <div className='flex'>
              <Image
                src={'/migrate.PNG'}
                alt=''
                width={350}
                height={350}
                className='object-cover mx-auto'
              />
            </div>
          </div>

        {/* Right */}
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <div className='text-3xl font-bold'>Black Plain</div>
            <div className='text-xl font-medium'>500 PKR</div>
          </div>

          <div className='flex gap-2 items-center'>
            <h3>Quantity</h3>
            <p className='quantity-desc flex items-center border-black'>
              <span className='minus'>
                <AiOutlineMinus />
              </span>
              <span className='num'>1</span>
              <span className='plus'>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <button className='btn'>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Test

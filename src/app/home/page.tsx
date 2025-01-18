import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 place-items-center">
        <div className="flex-row place-items-center ">
            <div className="px-3">
            <h1 className="font-bold text-3xl lg:text-5xl mb-11">
                Beaded
                <span className='text-pink-600'> Wear</span>
            </h1>
            <p className="font-semibold mb-16">
            Wear Your Story, One Bead at a Time  <br />
            Discover Handcrafted Beaded Bracelets That Speak Your Style!
            </p>
            <div className="grid grid-cols-2 ">
              {/* button ui from aceternity.ui */}
            <Link
            href={"/"}
            className="
              py-3 
              px-6
              text-lg 
              font-bold
              text-center
              hover:bg-[#e484d3]
              rounded-[6px]
              border-2
              border-black
              text-white
              bg-pink-600
              transition
              duration-200
                hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
              >
                Shop Now
            </Link>
            </div>
            </div>
        </div>

        <div className="place-items-center mb-3">
            <Image src="/cover.png" alt="main image" className=" w-full md:w-[500px] px-4" width={500} height={550} />
        </div>
    </main>
  )
}

export default Home

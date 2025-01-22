'use client'

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import {FiShoppingBag} from 'react-icons/fi'
import Cart from './cart';
import { CartContext } from '../../app/context/CartContext';

export default function Header() {

  const {totalQuantity, showCart, setShowCart}:any = useContext(CartContext);
  
  const handleCick = () => {
    setShowCart(!showCart)
  }

  return (
    <div className='overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6'>
        <header className="overflow-hidden rounded-[6px] top-5 md:mx-auto z-50 
        xl:w-4/5 2xl:w-[68%] bg-[#d4e3ff] flex items-center 
        justify-between py-4 px-4 md:px-6 mx-6">
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={500}
            height={500}
            className="w-16"
          />
        </Link>
        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/"} className="hover:text-blue-500">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-blue-500">
            About
            </Link>
            <Link href={"/productsList"} className="hover:text-blue-500">
            Product
            </Link>
            <Link href={'/categories'} className="hover:text-blue-500">
               Category
              </Link>
            <Link href={"/contact"} className="hover:text-blue-500">
            Contact
            </Link>
          </div>
        </div>
        <button className='cart-icon' onClick={handleCick}>
                <FiShoppingBag />
                <span className='cart-item-qty'>{totalQuantity}</span>
        </button>
    </header>  

    {showCart && <Cart />}
    </div>

  );
}

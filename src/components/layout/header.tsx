import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
        xl:w-4/5 2xl:w-[68%] bg-[#d4e3ff] flex items-center 
        justify-between py-4 px-4 md:px-6 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/cover.png"}
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

            <ScrollLink
              to="/about"
              smooth={true}
              className="hover:text-blue-500"
            >
              About
            </ScrollLink>

            <ScrollLink
              to="products"
              smooth={true}
              className="hover:text-blue-500"
            >
              Product
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              className="hover:text-blue-500"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </Element>
    </header>
  );
}

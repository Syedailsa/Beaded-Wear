import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Home from "./home/page";
import About from "./about/page";
import Categories from "./categories/page";

export default function Page() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6">
      <div className="pt-5">
      {/* <Element
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
              to="category"
              smooth={true}
              className="hover:text-blue-500"
            >
              <Link href={'/categories'}>
               Category
              </Link>
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
      </Element> */}
      </div>
      <main className="md:pb-10">
        {/* <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68px] md:mx-auto mt-14">
        </div> */}
      </main>
      <Home />
      <br />
      <br />
      <Categories/>
      <br />
      <br />
      <About/>
    </div>
  );
}

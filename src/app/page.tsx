"use client";

import Header from "@/components/layout/header";
import Home from "./home/page";
import About from "./about/page";

export default function Page() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6">
      <div className="pt-5">
        <Header/>
      </div>
      <main className="md:pb-10">
        {/* <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68px] md:mx-auto mt-14">
        </div> */}
      </main>
      <br />
      <br />
      <Home />
      <br />
      <About/>
    </div>
  );
}

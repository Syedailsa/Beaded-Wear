import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-end p-7 ">
      {/* logo */}

      <div className="">
        <Image src={"/logo.png"} alt="site Logo" width={100} height={100} />
      </div>

      {/* navbar */}

      <ul className="flex gap-8 justify-center text-center text-sm font-semibold">
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Gallery</li>
        <li>Team</li>
      </ul>

      <div className="text-sm">
        <button className="box-border h-9 w-32 border-solid border rounded-md border-BrightNavyBlue bg-BrightNavyBlue text-white">
          Sign in
        </button>
      </div>
    </header>
  );
}

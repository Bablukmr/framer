"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function HeaderMobile() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="">
      <div className="w-full px-6 flex items-center justify-between">
        <div className="cursor-pointer">
          <Image alt="mercury" width={150} height={100} src={"/mercury.svg"} />
        </div>
        <div>
          <div
            onClick={() => setClicked(!clicked)}
            className={`p-2 border rounded-full transform transition-transform duration-500 ${
              clicked ? "rotate-90" : "rotate-0"
            }`}
          >
            {clicked ? <IoIosClose /> : <CiMenuBurger />}
          </div>
        </div>
      </div>
      <ul
        className={`w-[96%] ml-[2%] flex gap-3 items-start p-4 justify-center flex-col bg-white border border-t-0 rounded-xl mt-4 transition-opacity duration-500 ${
          clicked ? "opacity-100" : "opacity-0"
        }`}
      >
        <li className="hover:text-blue-600 hover:underline">Product</li>
        <li className="hover:text-blue-600 hover:underline">Compare</li>
        <li className="hover:text-blue-600 hover:underline">Pricing</li>
        <li className="hover:text-blue-600 hover:underline">Contact</li>
      </ul>
    </div>
  );
}

export default HeaderMobile;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import header from "../../../public/heder.svg";
import { FaApple } from "react-icons/fa";
import {
  RiArrowRightUpLine,
  RiArrowDropUpLine,
  RiArrowDropDownLine,
} from "react-icons/ri";

export default function Header() {
  const [isCompareHovered, setIsCompareHovered] = useState(false);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between absolute top-10 z-50">
        <div className="cursor-pointer">
          <Image alt="mercury" width={150} height={100} src={"/mercury.svg"} />
        </div>
        <ul className="flex gap-x-3 items-center">
          <li className="hover:bg-[#F4F5F6] px-4 py-2 rounded-full cursor-pointer">
            Product
          </li>
          <div
            onMouseEnter={() => setIsCompareHovered(true)}
            onMouseLeave={() => setIsCompareHovered(false)}
            className="relative"
          >
            <li
              // onClick={() => setIsCompareHovered(true)}
              className="hover:bg-[#F4F5F6] px-4 py-2 rounded-full cursor-pointer flex items-center"
            >
              Compare{" "}
              {isCompareHovered ? (
                <span className="text-xl">
                  <RiArrowDropUpLine />
                </span>
              ) : (
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              )}
            </li>
            {isCompareHovered ? (
              <>
              <div className="w-[120px] absolute bg-transparent h-[30px]"></div>
              
                <div className="w-[600px] h-[250px] mt-6 bg-white border absolute left-4 rounded-xl p-2 flex gap-4">
                  <ul className=" m-6 flex flex-col gap-y-2 text-sm font-medium">
                    <li className="text-[#53545C]">MERCURIUS PAGE</li>
                    <li className="mt-3 hover:text-blue-600 hover:underline cursor-pointer">
                      Home{" "}
                    </li>
                    <li className="hover:text-blue-600 hover:underline cursor-pointer">
                      Product
                    </li>
                    <li className="hover:text-blue-600 hover:underline cursor-pointer">
                      About
                    </li>
                    <li className="hover:text-blue-600 hover:underline cursor-pointer">
                      Pricing
                    </li>
                    <li className="hover:text-blue-600 hover:underline cursor-pointer">
                      Contact
                    </li>
                  </ul>
                  <ul className="m-6 flex flex-col gap-y-2 text-sm font-medium">
                    <li className="text-[#53545C]">USER PAGES</li>
                    <li className="mt-3 hover:text-blue-600 hover:underline cursor-pointer">
                      Login{" "}
                    </li>
                    <li className="hover:text-blue-600 hover:underline cursor-pointer">
                      Register
                    </li>
                    <li className="hover:text-blue-600 hover:underline cursor-pointer">
                      404 Error
                    </li>
                  </ul>
                  <div className="w-[40%] bg-slate-100  h-full flex flex-col items-center">
                    <Image src={header} alt="/" />
                    <button className="rounded-full mt-3 text-white bg-black py-3 px-4 flex gap-2 items-center ">
                      <FaApple /> App Store
                    </button>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <li className="hover:bg-[#F4F5F6] px-4 py-2 rounded-full cursor-pointer">
            Pricing
          </li>
          <li className="hover:bg-[#F4F5F6] px-4 py-2 rounded-full cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex gap-x-3 items-center">
          <button className="rounded-full hover:bg-black hover:text-white border py-2 px-4 border-black">
            Login
          </button>
          <button className="rounded-full text-white bg-black py-2 px-4 flex">
            Lets Talk <RiArrowRightUpLine />
          </button>
        </div>
      </div>
    </div>
  );
}

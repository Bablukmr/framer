import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-200 p-6">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-around">
        <div className="cursor-pointer">
          <Image alt="mercury" width={150} height={100} src={"/mercury.svg"} />
        </div>
        <p className="text-[#53545C]">
          Simple description or information about the company can be added here
        </p>
        <div className="flex gap-4 ">
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
      <div className="flex my-6 border-b border-blue-400 p-6 flex-col gap-4 lg:flex-row items-center justify-around">
        <ul className="flex flex-col gap-3 mt-3">
          <li className="text-[#53545C]">FLEXI SYSTEM</li>
          <li>Budgeting</li>
          <li>Savings</li>
          <li>Accounts</li>
          <li>Secured Data</li>
        </ul>
        <ul className="flex flex-col gap-3 mt-3">
          <li className="text-[#53545C]">SOLUTIONS</li>
          <li>Financial Planning</li>
          <li>Mercury API</li>
          <li>Fraud Detections</li>
          <li>Auto - Fix</li>
        </ul>
        <ul className="flex flex-col gap-3 mt-3">
          <li className="text-[#53545C]">FLEXI SYSTEM</li>
          <li>Budgeting</li>
          <li>Savings</li>
          <li>Accounts</li>
          <li>Secured Data</li>
        </ul>
        <ul className="flex flex-col gap-3 mt-3">
          <li className="text-[#53545C]">FLEXI SYSTEM</li>
          <li>Budgeting</li>
          <li>Savings</li>
          <li>Accounts</li>
          <li>Secured Data</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-4">
        <p>©2023 Mercury; All Rights Reserved.</p>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

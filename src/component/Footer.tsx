// import React from 'react'
import Image from "next/image";
import logo from "../assets/logo.svg";
export default function Footer() {
  return (
    <div className=" bg-black box-border w-[100vw] m-0 p-[2rem]">
      <div className="max-w-full">
        <h3 className="text-accent m-0">Categories</h3>
        <ul className="flex flex-col w-full text-white">
          <li>Fashion</li>
          <li>Fashion</li>
          <li>Fashion</li>
        </ul>
      </div>
      <div>
        <Image className="w-5" src={logo} alt="" />
      </div>
    </div>
  );
}

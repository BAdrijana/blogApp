import React from "react";
import logo from "../../src/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";

function AdminPage() {
  return (
    <div className="w-full">
      <div className="mt-5 ml-7">
        <Link className="w-[7rem]" href="/">
          <Image src={logo} alt="logo" className="w-[10rem] " />
        </Link>
      </div>
      <div className="container">
        <h1>Create a blog post</h1>
        <div className="flex justify-center w-full mt-5">
          <form className="flex flex-col gap-4 w-[90%] shadow-inset-custom py-6 px-5 rounded-xl">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Category" />
            <textarea placeholder="Content" />
            {/* <input type="file" placeholder="Image" /> */}
            <input type="text" placeholder="Image Url" />
            <div className="flex items-center gap-2">
              <div>
                <label>Top readed</label>
                <input type="checkbox" />
              </div>

              <div>
                <label>Trending</label>
                <input type="checkbox" />
              </div>
            </div>
            <input type="text" placeholder="Autor" />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

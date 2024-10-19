import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* ========== Left Side ========== */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>
          {' '}from <br className="max-md:hidden" /> images for free!
        </h1>
        <p className="my-6 text-[15px] to-gray-500">
          Instantly remove backgrounds for polished images, perfect for any
          project. <br className="max-sm:hidden" /> Instant background removal
          for flawless, ready-to-use images.
        </p>
        <div>
          <input type="file" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="Icon" />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>
      {/* ========== Right Side ========== */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
import React from "react";

export default function AudioGear() {
  return (
    <div className="pt-28 pb-24 flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-0 items-center text-center lg:text-start gap-8">
      <img
        className="AudioGear1 block lg:block lg:w-[45%]"
        src="./image-1-mobile.png"
        alt="image-1-mobile"
      />
      <img
        className="AudioGear2 hidden lg:hidden"
        src="./image-1-desktop.png"
        alt="image-1-desktop"
      />
      <div className="flex flex-col gap-8 lg:w-[45%]">
        <h2 className="font-medium text-[2rem]">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-gray-500">
          Located at the heart of New York, Audiophile is the premier store for
          high end headphones, earphones, speakers, and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

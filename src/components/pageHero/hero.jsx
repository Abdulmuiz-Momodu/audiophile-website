import React from "react";
import Section from "../section/section";
import Link from "next/link";
import AudioGear from "../audioGear/audioGear";

export default function Hero() {
  return (
    <div className="px-4 md:px-8 lg:px-28">
      <Section />
      <div className="flex flex-col pt-28 gap-6">
        <div className="ZX9 flex items-center justify-center lg:justify-start lg:items-start lg:px-16 bg-[#D87D4A] w-full">
          <div className="border-none rounded-[6px] text-white flex flex-col lg:flex-row items-center lg:items-start px-4 py-10 lg:pb-0 lg:pt-16 gap-6 lg:gap-24 lg:max-w-[inherit] max-w-[23rem]">
            <img
              className="lg:h-80"
              src="./speaker-nobg.png"
              alt="speaker-nobg"
            />
            <div className="flex flex-col text-center lg:text-start items-center lg:items-start gap-6">
              <h3 className="text-[3.3rem] font-medium tracking-widest leading-[56px]">
                ZX9 SPEAKER
              </h3>
              <p className="font-thin text-[#f1f1f1a6]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                href="/zx9-speaker"
                className="h-12 w-40 flex items-center justify-center font-normal bg-black hover:bg-[#303030]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
        <div className="ZX7 flex flex-col justify-center text-start pl-4 lg:pl-16 h-[20rem] bg-[#d2d2d2] gap-6 rounded-[6px]">
          <h3 className="text-[35px] font-medium">ZX7 SPEAKER</h3>
          <Link
            href="/zx7-speaker"
            className="h-12 w-40 border-2 border-black bg-transparent hover:text-white hover:bg-black flex items-center justify-center font-medium "
          >
            SEE PRODUCT
          </Link>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between">
          <img
            className="md:w-[48.5%]"
            src="./earphone-3.png"
            alt="earphone-3"
          />
          <div className="bg-[#F1F1F1] h-fit flex flex-col gap-6 rounded-[6px] text-start justify-center px-4 lg:pl-16 lg:py-16 py-6 md:w-[48.5%] md:h-[inherit]">
            <h3 className="text-[35px] font-medium">YX1 EARPHONES</h3>
            <Link
              href="/yx1-earphones"
              className="h-12 w-40 flex items-center justify-center hover:text-white hover:bg-black font-medium border-2 border-black bg-transparent"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
      <AudioGear />
    </div>
  );
}

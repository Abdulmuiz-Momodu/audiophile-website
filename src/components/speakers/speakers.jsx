import React from "react";
import Section from "../section/section";
import Link from "next/link";
import AudioGear from "../audioGear/audioGear";

export default function Speaker() {
  return (
    <div className="text-center lg:text-start">
      <div className="bg-[#131313] text-white flex flex-col items-center justify-center text-4xl font-medium tracking-[2px] h-[12rem]">
        <h1>SPEAKERS</h1>
      </div>
      <div className="px-4 pt-20 md:px-8 lg:pt-28 lg:px-28">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[8%] lg:h-[27rem]">
            <div className="bg-[#f1f1f1] w-full flex flex-col items-center justify-center h-[20rem] rounded-[6px] lg:w-[46%] lg:h-[inherit]">
              <img
                className="h-[65%]"
                src="./speaker-nobg.png"
                alt="headphone-nobg"
              />
              <img
                className="-mt-14"
                src="./icon-shadow.png"
                alt="icon-shadow"
              />
            </div>
            <div className="flex flex-col gap-6 items-center lg:items-start md:max-w-[85%] lg:max-w-[46%]">
              <div className="flex flex-col gap-4 md:max-w-[20rem]">
                <h3 className="text-[#D87D4A] tracking-[9px]">NEW PRODUCT</h3>
                <h1 className="w-[100%] text-[2.5rem] font-semibold tracking-wide leading-[40px]">
                  ZX9 SPEAKER
                </h1>
              </div>
              <p className="text-gray-500">
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity - creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <Link
                href="/zx9-speaker"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] hover:bg-[#FBAF85] tracking-[1.5px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-[8%] lg:h-[27rem]">
            <div className="bg-[#f1f1f1] w-full flex flex-col items-center justify-center h-[20rem] rounded-[6px] lg:w-[46%] lg:h-[inherit]">
              <img
                className="h-[65%]"
                src="./speaker-1.png"
                alt="white-headphone"
              />
              <img
                className="-mt-14"
                src="./icon-shadow.png"
                alt="icon-shadow"
              />
            </div>
            <div className="flex flex-col gap-6 items-center lg:items-start md:max-w-[85%] lg:max-w-[46%]">
              <h1 className="w-[100%] md:max-w-[20rem] text-[2.5rem] font-semibold tracking-wide leading-[40px]">
                ZX7 SPEAKER
              </h1>
              <p className="text-gray-500">
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <Link
                href="/zx7-speaker"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] tracking-[1.5px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
        <Section />
        <AudioGear />
      </div>
    </div>
  );
}

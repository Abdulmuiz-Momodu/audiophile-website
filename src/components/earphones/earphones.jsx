import React from "react";
import Link from "next/link";
import Section from "../section/section";
import AudioGear from "../audioGear/audioGear";

export default function Earphones() {
  return (
    <div className="text-center lg:text-start">
      <div className="bg-[#131313] text-white flex flex-col items-center justify-center text-4xl font-medium tracking-[2px] h-[12rem]">
        <h1>EARPHONES</h1>
      </div>
      <div className="px-4 pt-20 md:px-8 lg:pt-28 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[8%] lg:h-[27rem]">
          <div className="bg-[#f1f1f1] w-full flex flex-col items-center justify-center h-[20rem] rounded-[6px] lg:w-[46%] lg:h-[inherit]">
            <img
              className="h-[65%]"
              src="./earphone-nobg.png"
              alt="earphone-nobg"
            />
            <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
          </div>
          <div className="flex flex-col gap-6 items-center lg:items-start md:max-w-[85%] lg:max-w-[46%]">
            <div className="flex flex-col gap-4 md:max-w-[20rem]">
              <h3 className="text-[#D87D4A] tracking-[9px]">NEW PRODUCT</h3>
              <h1 className="w-[100%] text-[2.5rem] font-semibold tracking-wide leading-[40px]">
                YX1 WIRELESS EARPHONES
              </h1>
            </div>
            <p>
              Talior your listening experince with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link
              href="/yx1-earphones"
              className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] hover:bg-[#FBAF85] tracking-[1.5px]"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        <Section />
        <AudioGear />
      </div>
    </div>
  );
}

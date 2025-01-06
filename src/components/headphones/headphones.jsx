import React from "react";
import Section from "../section/section";
import Link from "next/link";

export default function Headphone() {
  return (
    <div className="text-center lg:text-start">
      <div className="bg-black text-white flex flex-col items-center justify-center text-4xl font-medium tracking-[2px] h-[12rem]">
        <h1>HEADPHONES</h1>
      </div>

      <div className="px-4 pt-20 md:px-8 lg:pt-28 lg:px-28">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[8%] lg:h-[27rem]">
            <div className="bg-[#f1f1f1] w-full flex flex-col items-center justify-center h-[20rem] rounded-[6px] lg:w-[46%] lg:h-[inherit]">
              <img
                className="h-[65%]"
                src="./headphone-head.png"
                alt="headpdone-head"
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
                  XX99 MARK II HEADPHONES
                </h1>
              </div>
              <p className="text-gray-500">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Link
                href="/FirstHeadphone"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] hover:bg-[#FBAF85] tracking-[1.5px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-[8%] lg:h-[27rem]">
            <div className="bg-[#f1f1f1] w-full flex flex-col items-center justify-center h-[20rem] rounded-[6px] lg:w-[46%] lg:h-[inherit]">
              <img className="h-[65%]" src="./image.png" alt="image" />
              <img
                className="-mt-14"
                src="./icon-shadow.png"
                alt="icon-shadow"
              />
            </div>
            <div className="flex flex-col gap-6 items-center lg:items-start md:max-w-[85%] lg:max-w-[46%]">
              <h1 className="w-[100%] md:max-w-[20rem] text-[2.5rem] font-semibold tracking-wide leading-[40px]">
                XX99 MARK I HEADPHONES
              </h1>
              <p className="text-gray-500">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <Link
                href="/SecondHeadphone"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] tracking-[1.5px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[8%] lg:h-[27rem]">
            <div className="bg-[#f1f1f1] w-full flex flex-col items-center justify-center h-[20rem] rounded-[6px] lg:w-[46%] lg:h-[inherit]">
              <img
                className="h-[65%]"
                src="./white-headphone.png"
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
                XX59 HEADPHONES
              </h1>
              <p className="text-gray-500">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <Link
                href="/ThirdHeadphone"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] tracking-[1.5px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>

        <Section />
      </div>
    </div>
  );
}

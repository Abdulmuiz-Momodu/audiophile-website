import React from "react";
import Link from "next/link";
import AudioGear from "../audioGear/audioGear";

export default function Footer() {
  return (
    <div className="flex flex-col gap-24">
      <AudioGear />
      <div className="flex flex-col items-center md:items-start px-8 md:px-8 lg:px-28 pb-12 bg-[#131313] text-center md:text-start gap-12">
        <div className="flex flex-col items-center md:items-start gap-10">
          <div className="border-[3px] w-[101px] border-[#D87D4A]"></div>
          <img src="icon-logo.png" alt="icon-logo" />
        </div>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium text-white">
          <Link className="hover:text-[#D87D4A]" href="/">
            HOME
          </Link>
          <Link className="hover:text-[#D87D4A]" href="/headphone">
            HEADPHONES
          </Link>
          <Link className="hover:text-[#D87D4A]" href="/speaker">
            SPEAKERS
          </Link>
          <Link className="hover:text-[#D87D4A]" href="/earphone">
            EARPHONES
          </Link>
        </ul>

        <p className="text-gray-500">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team if music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 w-full">
          <p className="font-medium text-gray-500">
            Copyright 2021. All Right Reserved
          </p>

          <div className="flex items-center gap-6">
            <a  
              href="https://www.facebook.com"
              // onMouseEnter={}
            >
              <img
                className="cursor-pointer"
                src="icon-facebook.png"
                alt="icon-facebook.png"
              />
            </a>
            <a  
              href="https://www.twitter.com"
              // onMouseEnter={}
            >
              <img
                className="cursor-pointer"
                src="icon-twitter.png"
                alt="icon-twitter.png"
              />
            </a>
            <a  
              href="https://www.instagram.com"
              // onMouseEnter={}
            >
              <img
                className="cursor-pointer"
                src="icon-instagram.png"
                alt="icon-instagram.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

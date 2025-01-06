"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCartStore from "@/components/cartStore/statemanagement"; // Zustand store import
import Section from "@/components/section/section";

export default function FirstSpeaker() {
  const router = useRouter();
  const { addToCart } = useCartStore(); // Access the addToCart function from Zustand

  const [quantity, setQuantity] = useState(1);

  // Product data
  const product = {
    id: "zx9-speaker",
    name: "ZX9 SPEAKER",
    price: 4500,
    image: "./speaker-nobg.png",
  };

  // Handle quantity change
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to cart handler
  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Pass quantity directly
  };

  return (
    <div className="flex flex-col items-start gap-8 p-4 lg:px-28 lg:pt-16">
      <div>
        <button
          className="text-gray-500  bg-transparent hover:text-[#D87D4A]"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>

      <div className="flex flex-col gap-16">
        <div className="product-details flex flex-col w-full md:flex-row md:h-[25rem] gap-6 lg:gap-[8%]">
          <div className="bg-[#f1f1f1] w-[100%] lg:w-[46%] md:h-[inherit] flex flex-col items-center justify-center h-[20rem] rounded-[6px]">
            <img className="h-[65%]" src={product.image} alt="speaker-nobg" />
            <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
          </div>
          <div className="flex flex-col md:justify-center gap-6 lg:max-w-[46%]">
            <h3 className="text-[#D87D4A] tracking-[9px]">NEW PRODUCT</h3>
            <h1 className="w-[100%] text-[2.5rem] font-semibold tracking-wide leading-[40px]">
              {product.name}
            </h1>
            <p className="text-gray-500">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <h5 className="text-[20px] font-bold tracking-widest">
              $ {product.price.toLocaleString()}
            </h5>
            <div className="flex gap-6">
              <div className="flex gap-4 items-center justify-between px-4 w-32 bg-[#f1f1f1]">
                <button onClick={decreaseQuantity}>-</button>
                <p className="font-medium">{quantity}</p>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button
                className="h-12 w-40 font-medium text-white bg-[#D87D4A] hover:bg-[#FBAF85]"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-32">
          <div className="product-features flex flex-col gap-8">
            <h2 className="text-2xl font-medium">FEATURES</h2>
            <p className="text-gray-500">
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
              <br />
              <br />
              Discover clear, more natural sounding highs than the competition
              with ZX9’s signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5” aluminum
              alloy bass unit. You’ll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.
            </p>
          </div>

          <div className="product-content flex flex-col gap-8">
            <h2 className="text-2xl font-medium">IN THE BOX</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">2x</p>
                <p className="text-gray-500">Speaker Unit</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">2x</p>
                <p className="text-gray-500">Speaker Cloth Panel</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">1x</p>
                <p className="text-gray-500">User Manual</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">1x</p>
                <p className="text-gray-500">3.5mm 10m Audio Cable</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">1x</p>
                <p className="text-gray-500">10m Optical Cable</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="product-image-1 flex flex-col gap-4">
            <img src="./bass-1.png" alt="bass-1" />
            <img src="./shelve.png" alt="shelve" />
          </div>
          <div className="product-image-2 ZX9-product"></div>
        </div>

        <div className="suggesstions flex flex-col gap-8 md:gap-0 md:justify-between">
          <h2 className="text-2xl font-medium">YOU MAY ALSO LIKE</h2>
          <div className="suggesstion-products flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
            <div className="suggestion-1 flex flex-col items-center gap-6 md:gap-0 md:justify-between md:h-[inherit]">
              <div className="suggestion-image flex justify-center py-4 rounded-lg bg-[#F1F1F1] w-[100%] md:h-80">
                <img
                  className="suggestion-item"
                  src="./speaker-1.png"
                  alt="speaker-1"
                />
              </div>
              <h1 className="text-[2rem] font-medium">ZX7 SPEAKER</h1>
              <Link
                href="/SecondSpeaker"
                className="h-12 w-40 flex flex-col items-center justify-center font-medium text-white bg-[#D87D4A] hover:bg-[#FBAF85]"
              >
                SEE PRODUCT
              </Link>
            </div>

            <div className="suggestion-2 flex flex-col items-center gap-6 md:gap-0 md:justify-between md:h-[inherit]">
              <div className="suggestion-image flex justify-center py-4 h-40 rounded-lg bg-[#F1F1F1] w-[100%] md:h-80">
                <img
                  className="suggestion-item"
                  src="./headphone-nobg.png"
                  alt="headphone-nobg"
                />
              </div>
              <h1 className="text-[2rem] font-medium">XX99 MARK I</h1>
              <Link
                href="/SecondHeadphone"
                className="h-12 w-40 flex flex-col items-center justify-center font-medium text-white bg-[#D87D4A] hover:bg-[#FBAF85]"
              >
                SEE PRODUCT
              </Link>
            </div>

            <div className="suggestion-3 flex flex-col items-center gap-6 md:gap-0 md:justify-between md:h-[inherit]">
              <div className="suggestion-image flex justify-center py-4 rounded-lg bg-[#F1F1F1] w-[100%] md:h-80">
                <img
                  className="suggestion-item"
                  src="./white-headphone.png"
                  alt="white-headphone"
                />
              </div>
              <h1 className="text-[2rem] font-medium">XX59</h1>
              <Link
                href="/ThirdHeadphone"
                className="h-12 w-40 flex flex-col items-center justify-center font-medium text-white bg-[#D87D4A] hover:bg-[#FBAF85]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Section />
    </div>
  );
}

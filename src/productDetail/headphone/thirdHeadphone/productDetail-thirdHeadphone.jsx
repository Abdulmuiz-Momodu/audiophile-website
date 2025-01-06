"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCartStore from "@/components/cartStore/statemanagement"; // Zustand store import
import Section from "@/components/section/section";

export default function ThirdHeadphone() {
  const router = useRouter();
  const { addToCart } = useCartStore(); // Access the addToCart function from Zustand

  const [quantity, setQuantity] = useState(1);

  // Product data
  const product = {
    id: "xx59-headphones",
    name: "XX59",
    fullName: "XX59 HEADPHONES",
    price: 899,
    image: "./white-headphone.png",
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
            <img
              className="h-[65%]"
              src={product.image}
              alt="white-headpdone"
            />
            <img className="-mt-14" src="./icon-shadow.png" alt="icon-shadow" />
          </div>
          <div className="flex flex-col md:justify-center gap-6 lg:max-w-[46%]">
            <h1 className="w-[100%] text-[2.5rem] font-semibold tracking-wide leading-[40px]">
              {product.fullName}
            </h1>
            <p className="text-gray-500">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
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
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
              <br />
              <br />
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </p>
          </div>

          <div className="product-content flex flex-col gap-8">
            <h2 className="text-2xl font-medium">IN THE BOX</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">1x</p>
                <p className="text-gray-500">Headphone Unit</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">2x</p>
                <p className="text-gray-500">Replacement Earcups</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">1x</p>
                <p className="text-gray-500">User Manual</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#D87D4A] font-medium">1x</p>
                <p className="text-gray-500">3.5mm 5m Audio Cable</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="product-image-1 flex flex-col gap-4">
            <img src="./image-2.png" alt="image-2" />
            <img src="./book-headphone.png" alt="book-headphone" />
          </div>
          <div className="product-image-2 XX59"></div>
        </div>

        <div className="suggesstions flex flex-col gap-8 md:gap-0 md:justify-between">
          <h2 className="text-2xl font-medium">YOU MAY ALSO LIKE</h2>
          <div className="suggesstion-products flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
            <div className="suggestion-1 flex flex-col items-center gap-6 md:gap-0 md:justify-between md:h-[inherit]">
              <div className="suggestion-image flex justify-center py-4 rounded-lg bg-[#F1F1F1] w-[100%] md:h-80">
                <img
                  className="suggestion-item"
                  src="./headphone-head.png"
                  alt="headphone-head"
                />
              </div>
              <h1 className="text-[2rem] font-medium">XX99 MARK II</h1>
              <Link
                href="/FirstHeadphone"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] hover:bg-[#FBAF85] tracking-[1.5px]"
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
                  src="./speaker-nobg.png"
                  alt="speaker-nobg"
                />
              </div>
              <h1 className="text-[2rem] font-medium">ZX9 SPEAKER</h1>
              <Link
                href="/FirstSpeaker"
                className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] hover:bg-[#FBAF85] tracking-[1.5px]"
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

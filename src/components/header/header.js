"use client";
import React, { useRef } from "react";
import Link from "next/link";
import useCartStore from "../cartStore/statemanagement"; // Import Zustand store

export default function Header({ openModal1, openModal2, toggleModal, closeMenu }) {
  const { getTotalCartQuantity  } = useCartStore();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("change");
  };
  
  if (closeMenu) {
    menuRef.current.classList.remove("change");  // Reset menu to bars
    closeMenu();  // Close modal
  };

  return (
    <div className="flex justify-between items-center bg-black border-b-2 border-[#191919] h-20 px-8 lg:px-28 relative">
      <div className="flex gap-6 items-center h-8">
        <button
          ref={menuRef}
          onClick={() => {toggleModal(); toggleMenu(); openModal2()}}
          className="flex flex-col gap-[5px] lg:hidden"
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <Link href="/">
          <img className="w-32" src="./icon-logo.png" alt="icon-logo" />
        </Link>
      </div>

      <ul className="hidden lg:flex gap-8 font-medium text-white">
        <Link className="hover:text-[#D87D4A]" href="/">HOME</Link>
        <Link className="hover:text-[#D87D4A]" href="/headphone">HEADPHONES</Link>
        <Link className="hover:text-[#D87D4A]" href="/speaker">SPEAKERS</Link>
        <Link className="hover:text-[#D87D4A]" href="/earphone">EARPHONES</Link>
      </ul>

      <div className="relative cursor-pointer" onClick={openModal1}>
        <img src="./icon-cart.png" alt="cart" className="w-6" />
          {getTotalCartQuantity() > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs px-[7px] py-[2px] rounded-full">
            {getTotalCartQuantity()}
          </span>
        )}
      </div>
    </div>
  );
}

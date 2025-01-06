"use client";
import React from "react";
import Cart from "../cart/cart";

export default function CartPage({ closeModal }) {
  return (
    <div>
      <Cart closeModal={closeModal}/>
    </div>
  );
}

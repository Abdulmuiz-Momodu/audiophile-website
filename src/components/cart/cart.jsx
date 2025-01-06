"use client";
import React from "react";
import useCartStore from "../cartStore/statemanagement";

export default function Cart({ closeModal }) {
  const {
    getTotalCartQuantity,
    cartItems,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
  } = useCartStore();

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-8">
          <p className="text-lg font-medium">CART IS EMPTY.</p>
          <button
            className="w-full bg-[#D87D4A] p-3 text-white font-medium"
            onClick={closeModal}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <button
            className="absolute top-3 right-3 text-xl font-medium"
            onClick={closeModal}
          >
            x
          </button>
          <div className="flex justify-between items-center pt-4">
            <h1 className="text-2xl font-bold">
              Cart({getTotalCartQuantity()})
            </h1>
            <p
              onClick={clearCart}
              className="cursor-pointer text-gray-500 underline hover:text-orange-500"
            >
              Remove all
            </p>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex gap-3">
                <div className="bg-[#f1f1f1] p-1 w-[3.5rem] h-[3.5rem] flex flex-col items-center justify-center rounded-[6px]">
                  <img
                    className="h-[75%]"
                    src={item.image}
                    alt={item.id}
                  />
                  <img
                    className="-mt-4"
                    src="./icon-shadow.png"
                    alt="icon-shadow"
                  />
                </div>
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-gray-500 font-medium">$ {Number(item.price).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center bg-[#6b72805c] gap-4 py-1 px-3">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <div className="text-lg flex justify-between">
              <h3 className="text-gray-500">TOTAL: </h3>
              <h3 className="font-medium">${getTotalPrice()}</h3>
            </div>
            <button className="w-full bg-[#D87D4A] p-3 text-white font-medium">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

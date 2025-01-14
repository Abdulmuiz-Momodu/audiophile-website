import React from "react";
import Link from "next/link";
import useCartStore from "../cartStore/statemanagement";

export default function ThankYou() {
  const { cartItems, getTotalCartQuantity, getTotalPrice, clearCart } =
    useCartStore();

  return (
    <div className="w-fit flex flex-col p-4 gap-8">
      <img className="w-16" src="/icon-checkout.png" alt="icon-checkout" />
      <h1 className="text-2xl font-medium">THANK YOU FOR YOUR ORDER</h1>
      <p className="text-gray-500">
        You will recieve an email confirmation shortly
      </p>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex gap-6 p-4 pl-6">
              <img className="w-8" src={item.image} alt={item.id} />
              <div className="flex flex-col gap-4">
                <h3 className="font-medium">{item.name}</h3>
                <p>$ {Number(item.price).toLocaleString()}</p>
              </div>
              <p>x{}</p>
            </div>
            <p>and {getTotalCartQuantity() - 1} other item(s)</p>
          </div>
        ))}
        <div>
          <h3>GRAND TOTAL</h3>
          <p>$ {getTotalPrice()}</p>
        </div>
      </div>
      <Link onClick={clearCart} href="/">
        BACK TO HOME
      </Link>
    </div>
  );
}

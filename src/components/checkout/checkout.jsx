"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ThankYou from "../thank-you/thank-you";
import useCartStore from "../cartStore/statemanagement";

export default function Checkout() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { cartItems, getTotalPrice, getProductQuantity } = useCartStore();

  const grandTotal = Number(getTotalPrice()) + 50 + 1079;
  
  const formattedGrandTotal = grandTotal.toLocaleString();

  const handleOpenModal = () => {
    setModal((prevstate) => !prevstate);
  };

  const handlePayment = () => {
    setModal(true);
    setLoading(true);
    setTimeout(() => {
      // alert("Payment successful!");
      // router.push("/thank-you"); // Redirect to thank you page after payment
      handleOpenModal();
      setLoading(false);
    }, 100000); // Simulating payment process
  };

  return (
    <>
      {modal && (
        <div className="fixed h-lvh w-full bg-[#6b7280c4] flex items-center justify-center">
          <div className="relative rounded-lg w-fit h-fit bg-white shadow-lg z-50">
            <ThankYou />
          </div>
        </div>
      )}
      <div className="flex flex-col bg-[#f1f1f1] items-start gap-8 p-4 lg:px-28 lg:pt-16">
        <div className="mb-8">
          <button
            className="text-gray-500 transition-all hover:text-[#D87D4A]"
            onClick={() => router.back()}
          >
            &larr; Go Back
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          {/* CHECKOUT */}
          <div className="flex flex-col lg:w-[60%] p-8 gap-12 w-full bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-medium">CHECKOUT</h1>
            <div className="flex flex-col gap-12">
              {/* Billing Details */}
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-[#D87D4A] tracking-wider">
                  BILLING DETAILS
                </h3>
                <div className="grid-area">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Name</p>
                    <input
                      type="text"
                      placeholder="Alexei Ward"
                      className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Email Address</p>
                    <input
                      type="email"
                      placeholder="alexei@mail.com"
                      className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Phone Number</p>
                    <input
                      type="tel"
                      placeholder="+1 202-555-0136"
                      className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                </div>
              </div>
              {/* Shipping Info */}
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-[#D87D4A] tracking-wider">
                  SHIPPING INFO
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Your Address</p>
                    <input
                      type="text"
                      placeholder="1137 Williams Avenue"
                      className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div className="grid-area">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">ZIP Code</p>
                      <input
                        type="text"
                        placeholder="10001"
                        className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">City</p>
                      <input
                        type="text"
                        placeholder="New York"
                        className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">Country</p>
                      <input
                        type="text"
                        placeholder="United States"
                        className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Details */}
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-[#D87D4A] tracking-wider">
                  PAYMENT DETAILS
                </h3>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row gap-2">
                    <p className="text-sm md:w-[50%] font-medium">
                      Payment Method
                    </p>
                    <div className="flex flex-col md:w-[50%] gap-2">
                      <label className="flex items-center gap-2 p-5 border rounded-md cursor-pointer">
                        <input type="radio" name="payment" /> e-Money
                      </label>
                      <label className="flex items-center gap-2 p-5 border rounded-md cursor-pointer">
                        <input type="radio" name="payment" /> Cash on Delivery
                      </label>
                    </div>
                  </div>
                  <div className="grid-area">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">e-Money Number</p>
                      <input
                        type="text"
                        placeholder="238521993"
                        inputMode="numeric"
                        maxLength="9"
                        pattern="\d{9}"
                        className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">e-Money PIN</p>
                      <input
                        type="password"
                        inputMode="numeric"
                        maxLength="4"
                        placeholder="6891"
                        pattern="\d{4}"
                        className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D87D4A] tracking-[0.3em]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="flex flex-col w-full lg:w-[36%] p-8 gap-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-medium">SUMMARY</h2>
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b"
                >
                  <div className="flex justify-between w-[inherit] pb-2">
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
                        <p className="text-gray-500 font-medium">
                          $ {Number(item.price).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p>x {getProductQuantity()}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <p>TOTAL</p>
                <p className="font-semibold">$ {getTotalPrice()}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>SHIPPING</p>
                <p className="font-semibold">$ 50</p>
              </div>
              <div className="flex justify-between items-center">
                <p>VAT (INCLUDED)</p>
                <p className="font-semibold">$ 1,079</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="font-bold text-lg">GRAND TOTAL</p>
              <p className="text-[#D87D4A] text-lg font-semibold">$ {formattedGrandTotal}</p>
            </div>
            <button
              onClick={handlePayment}
              disabled={loading}
              className={`w-full mt-8 py-4 rounded-md transition-all duration-300 ${
                loading ? "bg-gray-400" : "bg-[#D87D4A] hover:bg-[#FBAF85]"
              } text-white active:scale-95`}
            >
              {loading ? "PROCESSING..." : "CONTINUE & PAY"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

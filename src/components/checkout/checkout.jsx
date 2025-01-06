'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Payment successful!');
      router.push('/thank-you'); // Redirect to thank you page after payment
      setLoading(false);
    }, 2000); // Simulating payment process
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <button
          className="text-gray-500 hover:text-gray-800 transition-all hover:bg-[#D87D4A]"
          onClick={() => router.back()}
        >
          &larr; Go Back
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">CHECKOUT</h1>

        <div className="space-y-8">
          {/* Billing Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">BILLING DETAILS</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Name</p>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <p className="text-sm font-medium">Email Address</p>
                <input
                  type="email"
                  placeholder="alexei@mail.com"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <p className="text-sm font-medium">Phone Number</p>
                <input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SHIPPING INFO</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Your Address</p>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">ZIP Code</p>
                  <input
                    type="text"
                    placeholder="10001"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">City</p>
                  <input
                    type="text"
                    placeholder="New York"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Country</p>
                <input
                  type="text"
                  placeholder="United States"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">PAYMENT DETAILS</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <p className="text-sm font-medium">Payment Method</p>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" /> e-Money
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-2" /> Cash on Delivery
                </label>
              </div>

              <div>
                <p className="text-sm font-medium">e-Money Number</p>
                <input
                  type="text"
                  placeholder="238521993"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">SUMMARY</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>TOTAL</p>
            <p>$5,396</p>
          </div>

          <div className="flex justify-between items-center">
            <p>SHIPPING</p>
            <p>$50</p>
          </div>

          <div className="flex justify-between items-center">
            <p>VAT (INCLUDED)</p>
            <p>$1,079</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="font-bold text-lg">GRAND TOTAL</p>
          <p className="text-orange-500 text-lg">$5,446</p>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full mt-8 py-4 rounded-md transition-all duration-300 ${
            loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
          } text-white active:scale-95`}
        >
          {loading ? 'PROCESSING...' : 'CONTINUE & PAY'}
        </button>
      </div>
    </div>
  );
}

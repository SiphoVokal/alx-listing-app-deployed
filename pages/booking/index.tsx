"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { Calendar } from "lucide-react";
import { BookingSummaryProps } from "@/interfaces";
import { useSearchParams } from "next/navigation";



export default function BookingSummary({ property, booking }: BookingSummaryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePayment = () => {
    router.push(`/payment/${property.id}`);
  };

  const title = searchParams.get("title") || "Property";
  const image = searchParams.get("image") || "/placeholder.jpg";
  const rating = searchParams.get("rating");
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const total = searchParams.get("total") || "0";

  return (
    <div className="flex flex-col min-h-screen  mx-auto w-[55%] mt-12">
      <div className="flex-row">
        {/* Property Summary */}
        <div className="relative w-full h-56 md:h-72">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center text-sm text-gray-600">
          <FiStar className="text-yellow-500 mr-1" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex-1 p-4 space-y-4">
        {/* Booking Dates */}
        <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
          <h2 className="text-base font-semibold mb-2">Your Booking</h2>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Check-in</span>
            </div>
            <span>{startDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Check-out</span>
            </div>
            <span>{endDate}</span>
          </div>
        </div>

        {/* Total */}
        <div className="mt-4 flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Sticky Pay Now Button */}
      <div className="p-4">
        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

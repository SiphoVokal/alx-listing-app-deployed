// components/property/PropertyDetail.tsx

import { Property } from "@/interfaces";
import { FiStar } from "react-icons/fi";
import { Heart, Share2, Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface PropertyDetailProps {
  property: Property & {
    images: string[];
    amenities?: string[];
    rating: number;
    reviews?: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    guests: string;
    category?: string;
    description: string;
    price: number;
    discount?: number;
    serviceFee?: number;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [activeTab, setActiveTab] = useState("description");
  const router = useRouter();

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.imageUrl];

  const discount = property.discount || 0;
  const serviceFee = property.serviceFee || 0;
  const nights = 7;
  const subtotal = property.price * nights;
  const total = subtotal - discount + serviceFee;

  const handleReserve = () => {
    // ✅ send property + booking data via query params
    router.push(
      `/booking?title=${encodeURIComponent(property.title)}&image=${encodeURIComponent(
        images[0]
      )}&rating=${property.rating}&description=${encodeURIComponent(
        property.description
      )}&startDate=2024-09-20&endDate=2024-09-27&total=${total}`
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{property.title}</h1>
          <div className="flex flex-wrap items-center text-gray-600 gap-2 mt-1">
            {/* Rating */}
            <div className="flex items-center">
              <FiStar className="text-yellow-400" />
              <span className="ml-1 font-medium">
                {property.rating.toFixed(2)}
              </span>
              {property.reviews && (
                <span className="ml-1 text-gray-500">
                  ({property.reviews} reviews)
                </span>
              )}
            </div>

            {/* Location */}
            <span>• {property.location}</span>

            {/* Category */}
            {property.category && <span>• {property.category}</span>}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 sm:gap-3">
          <button className="flex items-center gap-1 px-3 py-1 border rounded-full hover:bg-gray-100 text-sm sm:text-base">
            <Heart size={16} /> Save
          </button>
          <button className="flex items-center gap-1 px-3 py-1 border rounded-full hover:bg-gray-100 text-sm sm:text-base">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-2 sm:h-[400px] rounded-lg overflow-hidden">
        {/* Large image (left) */}
        <div className="relative sm:col-span-2 sm:row-span-2 h-60 sm:h-auto">
          <Image
            src={images[0] || property.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Top right wide */}
        <div className="relative hidden sm:block sm:col-span-2 sm:row-span-1">
          <Image
            src={images[1] || property.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom right two smaller */}
        <div className="relative hidden sm:block sm:col-span-1 sm:row-span-1">
          <Image
            src={images[2] || property.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative hidden sm:block sm:col-span-1 sm:row-span-1">
          <Image
            src={images[3] || property.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
          />
          {/* Overlay button */}
          <button className="absolute bottom-2 right-2 bg-white opacity-80 px-4 py-1 border-white rounded-full text-xs sm:text-sm shadow hover:opacity-100 ">
            Show all photos
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="flex flex-wrap gap-4 mt-6 text-gray-700 text-sm">
        <div className="flex items-center gap-1">🛏 {property.bedrooms} Bedrooms</div>
        <div className="flex items-center gap-1">🛁 {property.bathrooms} Bathrooms</div>
        <div className="flex items-center gap-1">👥 {property.guests} guests</div>
      </div>

      {/* Tabs + Content + Booking */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 border-b text-sm sm:text-base">
            {["description", "offer", "reviews", "host"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-green-500 text-green-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description" && "Description"}
                {tab === "offer" && "What we offer"}
                {tab === "reviews" && "Reviews"}
                {tab === "host" && "About host"}
              </button>
            ))}
            <span className="ml-auto text-gray-400 text-xs sm:text-sm">
              Published July 01, 2024
            </span>
          </div>

          {/* Tab content */}
          <div className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            {activeTab === "description" && (
              <>
                <p>{property.description}</p>
                <h3 className="mt-4 font-semibold">The space</h3>
                <p className="text-sm mt-1">
                  BEDROOM & BATHROOM
                  <br />
                  • Bedroom 1 - Primary: King size bed, Ensuite bathroom with
                  stand-alone rain shower, Dual vanity, Walk-in closet,
                  Television, Sofa, Deck, Balcony, Ocean view
                </p>
                <button className="mt-3 text-green-600 font-medium">
                  Read more →
                </button>
              </>
            )}
            {activeTab === "offer" && (
              <section
                id="offer"
                className="py-10 px-4 sm:px-6 max-w-6xl mx-auto text-center shadow-md rounded-2xl bg-gray-50"
              >
                <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8">
                  What This Place Offers
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-12">
                  Each home is fully equipped to meet your needs, with ample space and
                  privacy.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-left text-sm sm:text-base">
                  <div className="flex items-center space-x-3"><span>⛰️</span><span>Mountain view</span></div>
                  <div className="flex items-center space-x-3"><span>🌅</span><span>Shared beach access</span></div>
                  <div className="flex items-center space-x-3"><span>👨‍🍳</span><span>Chef</span></div>
                  <div className="flex items-center space-x-3"><span>🤵</span><span>Butler</span></div>
                  <div className="flex items-center space-x-3"><span>🧹</span><span>Cleaning available during stay</span></div>
                  <div className="flex items-center space-x-3"><span>🍸</span><span>Bartender</span></div>
                  <div className="flex items-center space-x-3"><span>🏊</span><span>Pool - infinity</span></div>
                  <div className="flex items-center space-x-3"><span>🛁</span><span>Hot tub</span></div>
                  <div className="flex items-center space-x-3"><span>🍳</span><span>Kitchen</span></div>
                  <div className="flex items-center space-x-3"><span>📶</span><span>Wifi</span></div>
                </div>
              </section>
            )}
            {activeTab === "reviews" && <p>Reviews section goes here...</p>}
            {activeTab === "host" && <p>Host details here...</p>}
          </div>
        </div>

        {/* Right side booking card */}
        <div className="rounded-xl p-4 sm:p-5 shadow-lg h-fit text-sm sm:text-base">
          <h2 className="text-xl sm:text-2xl font-semibold">
            ${property.price.toLocaleString()}{" "}
            <span className="text-gray-500 text-sm">/night</span>
          </h2>

          {/* Date pickers */}
          <div className="mt-4 space-y-3">
            <div>
              <label className="block text-xs sm:text-sm text-gray-600">Check in</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="DD/MM/YY"
                  className="flex-1 outline-none text-sm"
                />
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-600">Check out</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="DD/MM/YY"
                  className="flex-1 outline-none text-sm"
                />
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Pricing breakdown */}
          <div className="mt-4 text-xs sm:text-sm text-gray-600 space-y-1">
            <div className="flex justify-between">
              <span>${property.price} x {nights} nights</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Weekly discounts</span>
              <span className="text-red-500">-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>${serviceFee}</span>
            </div>
            <div className="flex justify-between font-semibold text-sm sm:text-base border-t pt-2">
              <span>Total payment</span>
              <span className="text-green-600">${total}</span>
            </div>
          </div>

          {/* Button */}
          <button 
            onClick={handleReserve}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Reserve now
          </button>
        </div>
      </div>
    </div>
  );
}

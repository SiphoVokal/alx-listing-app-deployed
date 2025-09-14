// components/property/PropertyDetail.tsx

import { useState } from "react";
import { Property } from "@/interfaces";
import { FiStar } from "react-icons/fi";
import Image from "next/image";

interface PropertyDetailProps {
  property: Property & {
    images: string[]; 
    amenities?: string[]; 
    rating: number; 
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const images = property.images && property.images.length > 0 
  ? property.images 
  : [property.imageUrl];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Gallery Carousel */}
      <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-md mb-4">
        <Image
          src={images[currentImage] || property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />

        {/* Previous / Next buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          &#8594;
        </button>
      </div>

      {/* Title, Location, Price */}
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="mt-2 text-indigo-600 font-semibold">${property.price} / night</p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }, (_, i) => (
          <FiStar
            key={i}
            className={i < Math.round(property.rating) ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-gray-600">{property.rating.toFixed(1)} / 5</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700">{property.description}</p>

      {/* Amenities */}
      {property.amenities && property.amenities.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {property.amenities.map((amenity, i) => (
              <span
                key={i}
                className="px-3 py-1 border rounded-full text-sm bg-gray-100"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

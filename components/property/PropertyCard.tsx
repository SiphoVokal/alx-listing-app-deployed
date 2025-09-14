// components/PropertyCard.tsx
import Image from "next/image";
import { PropertyCardProps } from "@/interfaces";
import Link from "next/link";



const PropertyCard = ({
  id,
  imageUrl,
  title,
  location,
  rating,
  beds,
  baths,
  guests,
  price,
  tags = [],
}: PropertyCardProps) => {
  return (
    <Link href={`/property/${id}`} className="block">
      <div className="overflow-hidden bg-white rounded-xl">
        {/* Image Container */}
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
          {tags.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white bg-opacity-80 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="pt-4 px-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-900">{title}</h3>
            <div className="flex items-center text-yellow-500 text-sm font-semibold">
            <span className="mr-1">&#9733;</span> {rating}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-3">{location}</p>

            {/* Features */}
          <div className="flex items-center space-x-4 mb-2 text-gray-600 text-sm">          
            <div className="flex items-center">
              <span className="mr-1">&#128716;</span> {beds}
            </div>
            <div className="flex items-center">
              <span className="mr-1">&#128704;</span> {baths}
            </div>
            <div className="flex items-center">
              <span className="mr-1">&#128100;</span> {guests}
            </div>
              {/* Price */}
            <div className="text-lg font-bold text-gray-900">
              ${price}
              <span className="text-sm text-gray-500">/n</span>
            </div>
          </div>        
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

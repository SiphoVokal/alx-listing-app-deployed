"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { FiChevronDown } from "react-icons/fi";
import PropertyCard from "@/components/property/PropertyCard";
import { propertyData, categories } from "@/data/propertyData";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("Highest Price");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const filters = [
    "All", "Top Villa", "Free Reschedule", "Book Now, Pay Later", 
    "Self CheckIn", "Instant Book"
  ];

  const sortOptions = [
    "Highest Price",
    "Lowest Price",
    "Most Popular",
    "Recently Added",
  ];

  const handleSortOptionClick = (option: string) => {
    setSelectedSortOption(option);
    setIsSortMenuOpen(false);
  };

  const sortedProperties = useMemo(() => {
    const sorted = [...propertyData];

    switch (selectedSortOption) {
      case "Highest Price":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "Lowest Price":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "Most Popular":
        sorted.sort((a, b) => b.rating - a.rating); // assuming "rating" = popularity
        break;
      case "Recently Added":
        sorted.sort((a, b) => b.id - a.id); // assuming "id" = newer = higher id
        break;
      default:
        break;
    }

    return sorted;
  }, [selectedSortOption]);

  return (
    <main className="flex flex-col m-auto max-w-7xl w-[95%]">
      
      {/* Categories */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 py-4 md:gap-6 md:px-6">
        {categories.map((category, i) => (
          <div
            key={i}
            onClick={() => setSelectedCategory(category.name)}
            className={`
              flex flex-col items-center cursor-pointer p-2 rounded-lg transition-colors
              ${selectedCategory === category.name ? 'bg-gray-200' : ''}
              hover:bg-gray-50
            `}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={40}
              height={40}
              className=" w-full h-12 object-cover"
            />
            
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative h-[250px] w-full md:h-[400px] bg-white">
        
        <Image
          src={"/images/hero.png"}
          alt="Hero"
          fill
          className="object-cover rounded-4xl"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white text-center p-4 rounded-4xl">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Find your favorite place here!</h1>
          <p className="text-sm mt-2 md:text-lg">The best prices for over 2 million properties worldwide</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 px-4 py-6 md:flex-row md:flex-wrap md:px-6">
        {filters.map((f, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
              f === "All" ? "bg-green-200 text-green-800" : "bg-white"
            }`}
          >
            {f}
          </button>
        ))}
        <button className="px-4 py-2 md:ml-60 rounded-full border text-sm flex items-center">
          Filter
        </button>

        {/* Sort Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
            className="px-3 py-2 rounded-full border text-sm flex items-center justify-between gap-2"
          >
            Sort by: <FiChevronDown size={16} />
          </button>
          {isSortMenuOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10 w-48">
              {sortOptions.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSortOptionClick(option)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {sortedProperties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
      </div>
      
    </main>
  );
}

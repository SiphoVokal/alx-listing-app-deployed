"use client";

import { Search, User } from "lucide-react";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <>
      {/* Top Banner Alert */}
      {showBanner && (
        <div className="bg-green-700 text-white px-4 py-1 flex items-center justify-between text-xs md:text-sm md:px-6">
          <span className="m-auto text-center">Overseas trip? Get the latest information on travel guides</span>
          <button onClick={() => setShowBanner(false)}>
            <X className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      )}

      <header className="flex items-center justify-between p-4 shadow md:px-8">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image 
              src="/images/logo.png"
              className="hidden lg:block"
              alt="Logo"
              width={40}
              height={20}
            />
          </div>
        </Link>
        <div className="flex items-center justify-between flex-1 lg:hidden space-x-4">
        {/* Search bar */}
        <div className="flex-1 flex items-center bg-white border rounded-full shadow p-2">
          <input
            type="text"
            placeholder="Where to?"
            className="flex-1 text-sm focus:outline-none px-2"
          />
          <button className="ml-2 p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
              <button
                onClick={toggleSearch}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full border px-3 py-2 rounded"
              />
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                Search
              </button>
            </div>
          </div>
        )}

        {/* User icon + dropdown wrapper */}
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="p-2 border rounded-full shadow hover:bg-gray-100 transition"
          >
            <User className="w-8 h-8 text-gray-700" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-40 z-50">
              <Link
                href="/signin"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
        </div>

          {/* Desktop Search Bar (Hidden on smaller screens) */}
          <div className="hidden lg:flex items-center bg-white rounded-full shadow border-gray-800 p-2 max-w-3xl flex-1 mx-8 justify-between">
            <div className="flex flex-col px-4 border-r">
              <label className="text-xs text-gray-600 font-semibold">Location</label>
              <input
                type="text"
                placeholder="Search for destination"
                className="text-gray-400 text-xs focus:outline-none"
              />
            </div>
            <div className="flex flex-col px-4 border-r">
              <label className="text-xs text-gray-600 font-semibold">Check in</label>
              <input
                type="date"
                placeholder="Add date"
                className="text-gray-400 text-xs focus:outline-none"
              />
            </div>
            <div className="flex flex-col px-4 border-r">
              <label className="text-xs text-gray-600 font-semibold">Check out</label>
              <input
                type="date"
                placeholder="Add date"
                className="text-gray-400 text-xs focus:outline-none"
              />
            </div>
            <div className="flex flex-col px-4">
              <label className="text-xs text-gray-600 font-semibold">People</label>
              <input
                type="text"
                placeholder="Add guest"
                className="text-gray-400 text-xs focus:outline-none"
              />
            </div>
            <button className="ml-2 p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition">
              <Search className="w-3 h-3" />
            </button>
          </div>
          

        {/* Auth buttons (Hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/signin">
            <button className="px-5 py-2 text-sm rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              Sign in
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-5 py-2 text-sm rounded-full border hover:bg-gray-100 transition">
              Sign up
            </button>
          </Link>

          <div className="hidden md:flex lg:hidden relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <User className="w-6 h-6 text-gray-700" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-40 z-20">
                <Link
                  href="/signin"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

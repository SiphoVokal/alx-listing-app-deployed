import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-green-700 text-white px-2 py-2"></div>
      <footer className="bg-black text-gray-500 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left side: Logo + description */}
          <section>
            <Link href={"/"}>
              <div className="flex items-center mb-3">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={30}
                />
              </div>
            </Link>
            <p className="text-sm">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </section>

          {/* Right side: 3 list items */}
          <section className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex-1">
              <h3 className="text-lg mb-2">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                   Apartments in Dubai
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                   Hotels in New York
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                   Villa in Spain
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                   Mansion in Indonesia
                  </Link>
                </li>
              </ul>
            </div>
            
            <section className="grid grid-cols-1 md:grid-cols-3 lg:ml-4">
              <div className="flex-1">
                <h3 className="text-lg mb-2">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white">
                     About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                     Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                     Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                     Customers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                     Brand
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex-1">
                <h3 className="text-lg mb-2">Help</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white">
                     Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                     Cancel booking
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white">
                     Refunds Process
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs">
          © 2025 ALX. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

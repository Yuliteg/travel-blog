import React from "react";

import Link from "next/link";

import { Icon } from "@/ui/Icon";

export const Header = () => {
  return (
    <header className="shadow-sm z-50 bg-[#F0EBE1] py-4">
      <div className="w-11/12 mx-auto px-8 py-4 flex justify-between items-center border border-stroke rounded-lg">
        <div className="flex items-center">
          <Icon src={"/recipe/logo.svg"} alt="Flavor Palette" />
          <span className="ml-2 text-xl font-bold text-text-main leading-none">
            Flavor <br /> Palette
          </span>
        </div>

        <nav>
          <ul className="flex space-x-8 text-gray-700">
            <li>
              <Link href="/site" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/site/recipes" className="hover:text-red-500">
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/site/cooking-tips" className="hover:text-red-500">
                Cooking Tips
              </Link>
            </li>
            <li>
              <Link href="/site/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

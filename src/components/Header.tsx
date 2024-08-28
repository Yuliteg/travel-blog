import React from "react";

import Link from "next/link";

import { navItems } from "@/lib/constant";
import { Icon } from "@/ui/Icon";
import { getPath } from "@/utils/getPath";

import NavLink from "./NavLink";

export const Header = () => {
  return (
    <header className="shadow-sm z-50 py-4">
      <div className="w-11/12 mx-auto px-8 py-4 flex justify-between items-center border border-stroke rounded-lg">
        <Link href={getPath("/")} passHref aria-label="Go to homepage">
          <div className="flex items-center cursor-pointer group">
            <Icon src="/recipe/logo.svg" alt="Flavor Palette Logo" priority />
            <span
              className="ml-2 text-xl font-medium text-text-main leading-none transition-standard
            group-hover:text-primary-3"
            >
              Flavor Palette
            </span>
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-8 text-gray-800">
            {navItems.map((item) => (
              <NavLink key={item.path} href={item.path} label={item.label} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

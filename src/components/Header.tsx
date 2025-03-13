import React from "react";

import Link from "next/link";

import { navItems } from "@/lib/constants";
import { Icon } from "@/ui/Icon";

import NavLink from "./NavLink";

export const Header = () => {
  return (
    <header className="z-50 flex h-header items-center font-bold">
      <div className="mx-auto flex w-11/12 items-center justify-between rounded-xl border border-stroke px-8 py-4">
        <Link href={"/"} passHref aria-label="Go to homepage">
          <div className="group flex cursor-pointer items-center">
            <Icon src="/logo.svg" alt="Flavor Palette Logo" priority />
            <span className="ml-2 text-xl font-bold leading-none text-text-main transition-colors duration-200 ease-in-out group-hover:text-primary-3">
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

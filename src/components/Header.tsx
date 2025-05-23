import React from "react";

import Link from "next/link";

import { BASE_PATH, navItems } from "@/lib/constants";
import { Icon } from "@/ui/Icon";

import NavLink from "./NavLink";

export const Header = () => {
  return (
    <header className="flex h-header w-full items-center border-b border-white/10 bg-deep-blue-gradient text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex w-11/12 items-center justify-between py-4">
        {/* Logo */}
        <Link href={BASE_PATH} passHref aria-label="Go to homepage">
          <div className="group flex cursor-pointer items-center">
            <Icon
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`}
              alt="Secret Europe Logo"
              priority
              width={30}
              height={30}
            />
            <span className="ml-2 text-xl font-bold leading-none text-white transition-colors duration-200 ease-in-out group-hover:text-primary-3">
              Secret Europe
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex space-x-8 text-white">
            {navItems.map((item) => (
              <NavLink key={item.path} href={item.path} label={item.label} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

"use client";

import React, { FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getPath } from "@/utils/getPath";

interface NavLinkProps {
  href: string;
  label: string;
}

const removeTrailingSlash = (url: string) => url.replace(/\/$/, "");

const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const normalizedPathname = removeTrailingSlash(pathname);
  const normalizedHref = removeTrailingSlash(getPath(href));

  console.log("normalizedPathname", normalizedPathname);
  console.log("normalizedHref", normalizedHref);

  const isActive = normalizedPathname === normalizedHref;

  return (
    <li className="relative">
      <Link
        href={getPath(href)}
        className={`hover:text-primary-3 transition-standard  ${isActive ? "text-black" : "text-gray-500"}`}
      >
        {label}
      </Link>

      <span
        className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-500 transition-transform duration-200 ease-in-out ${
          isActive ? "scale-x-100" : "scale-x-0"
        } hover:scale-x-100 origin-left`}
      ></span>
    </li>
  );
};

export default NavLink;

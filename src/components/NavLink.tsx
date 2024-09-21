"use client";

import React, { FC, useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BASE_PATH } from "@/lib/constants";
import { getPath } from "@/utils/getPath";

interface NavLinkProps {
  href: string;
  label: string;
}

const removeTrailingSlash = (url: string) => url.replace(/\/$/, "");

const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const normalizedPathname = removeTrailingSlash(pathname);
    const normalizedHref = removeTrailingSlash(getPath(href));

    setIsActive(
      normalizedPathname === normalizedHref ||
        normalizedPathname === `${BASE_PATH}${normalizedHref}`
    );
  }, [pathname, href]);
  return (
    <li className="relative">
      <Link
        href={getPath(href)}
        className={`transition-colors duration-200 ease-in-out hover:text-primary-3 ${isActive ? "text-black" : "text-gray-600"}`}
      >
        {label}
      </Link>

      <span
        className={`absolute bottom-[-2px] left-0 h-[2px] w-full bg-red-500 transition-transform duration-200 ease-in-out ${
          isActive ? "scale-x-100" : "scale-x-0"
        } origin-left hover:scale-x-100`}
      ></span>
    </li>
  );
};

export default NavLink;

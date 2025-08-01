"use client";

import React, { FC, useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const removeTrailingSlash = (url: string) => url.replace(/\/$/, "");

const NavLink: FC<NavLinkProps> = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === href);

  useEffect(() => {
    setIsActive(removeTrailingSlash(pathname) === removeTrailingSlash(href));
  }, [pathname]);

  return (
    <li className="relative">
      <Link
        href={href}
        className={`transition-colors duration-200 ease-in-out hover:text-green-500 ${isActive ? "text-white" : "text-white"}`}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {label}
      </Link>

      <span
        className={`absolute bottom-[-2px] left-0 h-[2px] w-full bg-green-500 transition-transform duration-200 ease-in-out ${
          isActive ? "scale-x-100" : "scale-x-0"
        } origin-left hover:scale-x-100`}
      ></span>
    </li>
  );
};

export default NavLink;

"use client";

import React, { useEffect, useRef, useState } from "react";

import FocusTrap from "focus-trap-react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { BASE_PATH, mobileNavItems, navItems } from "@/lib/constants";
import { Icon } from "@/ui/Icon";

import NavLink from "./NavLink";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`;
  const drawerRef = useRef<HTMLDivElement>(null);

  useEscapeKey(() => setIsOpen(false), isOpen); // Close drawer on Escape key

  // Lock body scroll when drawer is open and
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="flex h-header w-full items-center bg-deep-blue-gradient text-white shadow-inset-light-gray backdrop-blur-md">
        <div className="mx-auto flex h-full w-11/12 items-center justify-between">
          {/* Logo */}
          <Link href={BASE_PATH} passHref aria-label="Go to homepage">
            <div className="group flex cursor-pointer items-center">
              <Icon
                src={logoPath}
                alt="Secret Europe Logo"
                priority
                width={30}
                height={30}
              />
              <span className="ml-2 text-xl font-medium leading-none text-white transition-colors duration-200 ease-in-out hover:text-green-500">
                Secret Europe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex">
            <ul className="flex space-x-8 text-white">
              {navItems.map((item) => (
                <NavLink key={item.path} href={item.path} label={item.label} />
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className="z-50 rounded p-2 transition-colors duration-200 hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
            isOpen
              ? "pointer-events-auto opacity-50"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      {isOpen && (
        <FocusTrap
          active={isOpen}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            escapeDeactivates: true
          }}
        >
          <aside
            ref={drawerRef}
            className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-zinc-800 p-6 text-white shadow-lg transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-8 flex items-center justify-between">
              <Icon
                src={logoPath}
                alt="Secret Europe Logo"
                priority
                width={30}
                height={30}
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="rounded p-2 transition-colors duration-200 hover:bg-white/10 md:hidden"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-4">
              <ul className="flex flex-col space-y-4 text-white">
                {mobileNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    href={item.path}
                    label={item.label}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </aside>
        </FocusTrap>
      )}
    </>
  );
};

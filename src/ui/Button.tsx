import React from "react";

import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  variant?: "filled" | "outlined";
  bgColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  bgColor = "bg-primary-3",
  textColor = "text-black",
  size = "md",
  children,
  onClick,
  className,
  href,
  ariaLabel
}) => {
  const baseStyles =
    "text-md rounded-sm font-semibold transition-colors duration-200 ease-in-out uppercase font-montserrat";

  const isOutlinedTransparent =
    variant === "outlined" && bgColor === "transparent";

  const variants = {
    filled: `${bgColor} ${textColor} hover:bg-opacity-80`,
    outlined: isOutlinedTransparent
      ? `border-2 border-gray-900 ${textColor} bg-transparent hover:border-orange-400 hover:text-orange-500 focus:outline-none focus:bg-orange-400/10`
      : `border-2 ${bgColor} ${textColor} hover:bg-opacity-80 border-gray-900`
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-md",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} passHref className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type="button"
      {...(ariaLabel && { "aria-label": ariaLabel })}
    >
      {children}
    </button>
  );
};

import React from "react";

import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  variant?: "filled" | "outlined";
  color?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "bg-orange-400",
  size = "md",
  children,
  onClick,
  className,
  href
}) => {
  const baseStyles =
    "text-md rounded-full font-semibold transition-colors duration-200 ease-in-out uppercase font-montserrat";

  const variants = {
    filled: `${color} text-black hover:bg-opacity-80`,
    outlined: `border-2 ${color} text-black hover:bg-opacity-80 hover:text-white`
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
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

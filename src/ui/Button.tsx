import React from "react";

import clsx from "clsx";

interface ButtonProps {
  variant?: "filled" | "outlined";
  color?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "bg-orange-400",
  size = "md",
  children,
  onClick,
  className
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

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
};

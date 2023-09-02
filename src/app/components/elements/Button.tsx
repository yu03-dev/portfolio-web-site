import React from "react";

type ButtonProps = {
  className: string | undefined;
  children: React.ReactNode;
};

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={
        className +
        " bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300"
      }
    >
      {children}
    </button>
  );
};

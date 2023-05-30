import Link from "next/link";
import React from "react";

interface MenuProps {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    border: string;
    red: string;
  };
  onClick: () => void;
  theme: string;
}

const MenuComponent = ({ colors, onClick, theme }: MenuProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-stretch">
      <Link
        href={"/"}
        onClick={onClick}
        className={`text-[42px] sm:text-[50px] xl:text-[60px] pl-[30px] xl:pl-[50px] flex justify-start items-center w-full h-full`}
      >
        <span className={`font-semibold ${colors.primary}`}>01</span>
        <span className={`${colors.red}`}>.</span>
        <span className={`font-extralight pl-[10px] ${colors.primary}`}>
          Home
        </span>
      </Link>
      <Link
        href={"/about"}
        onClick={onClick}
        className={`text-[42px] sm:text-[50px] xl:text-[60px] pl-[30px] xl:pl-[50px] flex justify-start items-center w-full h-full border-t-[1px] ${
          theme === "dark" ? "border-white" : "border-black"
        }`}
      >
        <span className={`font-semibold ${colors.primary}`}>02</span>
        <span className={`${colors.red}`}>.</span>
        <span className={`font-extralight pl-[10px] ${colors.primary}`}>
          About <span className="hidden sm:inline">Me</span>
        </span>
      </Link>
      <Link
        href={"/projects"}
        onClick={onClick}
        className={`text-[42px] sm:text-[50px] xl:text-[60px] pl-[30px] xl:pl-[50px] flex justify-start items-center w-full h-full border-t-[1px] ${
          theme === "dark" ? "border-white" : "border-black"
        }`}
      >
        <span className={`font-semibold ${colors.primary}`}>03</span>
        <span className={`${colors.red}`}>.</span>
        <span className={`font-extralight pl-[10px] ${colors.primary}`}>
          Projects
        </span>
      </Link>
      <Link
        href={"/contact"}
        onClick={onClick}
        className={`text-[42px] sm:text-[50px] xl:text-[60px] pl-[30px] xl:pl-[50px] flex justify-start items-center w-full h-full border-t-[1px] ${
          theme === "dark" ? "border-white" : "border-black"
        }`}
      >
        <span className={`font-semibold ${colors.primary}`}>04</span>
        <span className={`${colors.red}`}>.</span>
        <span className={`font-extralight pl-[10px] ${colors.primary}`}>
          Contact
        </span>
      </Link>
    </div>
  );
};

export default MenuComponent;

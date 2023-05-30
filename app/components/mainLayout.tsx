"use client";

import React, { ReactNode, useState } from "react";
import ThemeSwitch from "./themeSwitch";
import { useThemeContext } from "../context/themeContext";
import Image from "next/image";
import LogoLight from "../../public/Logo_light.svg";
import LogoDark from "../../public/Logo_dark.svg";
import GithubLight from "../../public/Github_light.svg";
import GithubDark from "../../public/Github_dark.svg";
import LinkedinLight from "../../public/Linkedin_light.svg";
import LinkedinDark from "../../public/Linkedin_dark.svg";
import TwitterLight from "../../public/Twitter_light.svg";
import TwitterDark from "../../public/Twitter_dark.svg";
import MenuComponent from "./menu";
import MenuButton from "./menuButton";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { colors, theme } = useThemeContext();

  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <main
      className={`${colors.background} grid grid-rows-[75px_1fr_75px] grid-cols-[75px_1fr_75px] xl:grid-rows-[100px_1fr_100px] xl:grid-cols-[150px_1fr_150px] h-[100vh] w-full row place-content-center`}
    >
      <div
        className={`${
          theme === "dark" ? "border-white" : "border-black"
        } border-b-[1px] border-r-[1px] flex justify-center items-center`}
      >
        <div className="relative w-[24px] h-[36px] right-[3px]">
          <Image
            src={theme === "dark" ? LogoDark : LogoLight}
            alt="Fabio Di Nota"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        className={` hidden xl:block ${
          theme === "dark" ? "border-white" : "border-black"
        } border-b-[1px]`}
      ></div>
      <div
        className={`${
          theme === "dark" ? "border-white" : "border-black"
        } cursor-pointer border-b-[1px] xl:border-l-[1px] flex-row  flex justify-end xl:justify-center pr-[30px] xl:pr-0 items-center gap-[10px] col-span-2 xl:col-span-1`}
      >
        <MenuButton
          theme={theme}
          colors={colors}
          onClick={() => handleMenuClick()}
          menuOpen={menuOpen}
        />
      </div>
      <div
        className={`flex justify-center items-center ${
          theme === "dark" ? "border-white" : "border-black"
        } border-r-[1px]`}
      >
        <div className="flex justify-center items-center gap-[30px] flex-col">
          <div className="relative w-[28px] h-[28px] cursor-pointer">
            <Image
              src={theme === "dark" ? GithubDark : GithubLight}
              alt="Fabio Di Nota"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[28px] h-[28px] cursor-pointer">
            <Image
              src={theme === "dark" ? LinkedinDark : LinkedinLight}
              alt="Fabio Di Nota"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[28px] h-[28px] cursor-pointer">
            <Image
              src={theme === "dark" ? TwitterDark : TwitterLight}
              alt="Fabio Di Nota"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className={`relative col-span-2 xl:col-span-1 ${
          menuOpen ? "overflow-y-hidden " : "overflow-y-scroll"
        } flex justify-start items-start`}
      >
        {menuOpen && (
          <MenuComponent
            theme={theme}
            colors={colors}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        {!menuOpen && children}
      </div>
      <div
        className={`hidden xl:block ${
          theme === "dark" ? "border-white" : "border-black"
        } border-l-[1px]`}
      ></div>
      <div
        className={`${
          theme === "dark" ? "border-white" : "border-black"
        } xl:border-r-[1px] border-t-[1px] col-span-2 xl:col-span-1  flex pl-10 xl:pl-0 xl:justify-center items-center`}
      >
        <p className={`${colors.primary} font-extralight`}>
          © Fabio Di Nota <span className="inline xl:hidden">2023</span>
        </p>
      </div>
      <div
        className={`hidden xl:block  ${
          theme === "dark" ? "border-white" : "border-black"
        } border-t-[1px]`}
      ></div>
      <div
        className={`${
          theme === "dark" ? "border-white" : "border-black"
        } border-l-[1px] border-t-[1px] flex justify-center items-center`}
      >
        <ThemeSwitch />
      </div>
    </main>
  );
};

export default MainLayout;

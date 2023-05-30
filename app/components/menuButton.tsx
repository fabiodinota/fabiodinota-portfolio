'use client';

import React from "react";
import { motion } from "framer-motion";

interface MenuProps {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    border: string;
    red: string;
  };
  menuOpen: boolean;
  theme: string;
  onClick: () => void;
}

const MenuButton = ({
  menuOpen,
  theme,
  colors,
  onClick,
}: MenuProps) => {
    const Menu = "Menu";
    const Close = "Close";
  
    const variant = {
      initial: { y: -22, display: "block" },
      animate: { y: 0 },
      exit: { y: 20, display: "block" },
    };
  
    const menuIconVariant = {
      open: { scale: 0.9 },
      closed: { scale: 1.1, transition: { duration: 0} },
    };
  return (
    <div className="flex flex-row items-center gap-[10px]" onClick={onClick}>
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen && (
            <motion.g
              key={"Close"}
              variants={menuIconVariant}
              animate={menuOpen ? "open" : "closed"}
            >
              <path
                d="M22.5 3.5L3.5 22.5"
                stroke={theme === "dark" ? "white" : "black"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 3.5L22.5 22.5"
                stroke={theme === "dark" ? "white" : "black"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          )}
          {!menuOpen && (
            <motion.g
            key={"Menu"}
              variants={menuIconVariant}
              animate={menuOpen ? "open" : "closed"}
            >
              <path
                d="M1 5.41675H27"
                stroke={theme === "dark" ? "white" : "black"}
                strokeLinecap="round"
              />
              <path
                d="M1 13H19.4167"
                stroke={theme === "dark" ? "white" : "black"}
                strokeLinecap="round"
              />
              <path
                d="M1 20.5835H11.8333"
                stroke={theme === "dark" ? "white" : "black"}
                strokeLinecap="round"
              />
            </motion.g>
          )}
        </svg>
      <div
        className={`text-[18px] select-none font-extralight relative  w-[50px] h-[28px] ${colors.primary}`}
      >
        <div className="absolute top-0 left-0 overflow-hidden h-[26px] flex flex-row">
          {Menu.split("").map((char, index) => {
            return (
              <motion.div
                variants={variant}
                initial="animate"
                animate={menuOpen ? "initial" : "animate"}
                exit="exit"
                transition={{
                  ease: [0, 0.5, 0.42, 0.99],
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="w-max"
                key={index}
              >
                {char}
              </motion.div>
            );
          })}
        </div>
        <div className="absolute top-0 left-0 overflow-hidden flex flex-row">
          {Close.split("").map((char, index) => {
            return (
              <motion.div
                variants={variant}
                initial="exit"
                animate={menuOpen ? "animate" : "exit"}
                exit="exit"
                transition={{
                  ease: [0, 0.5, 0.42, 0.99],
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="w-max"
                key={index}
              >
                {char}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuButton;

"use client";

import React, { useState } from "react";
import { useThemeContext } from "../context/themeContext";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeContext();

  const [rect, setRect] = useState<number>(0);

  const SwitchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setRect((rect) => rect + 1);
  };
  const switchDarkVariant = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    };
    const switchDarkChildVariant = {
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        exit: { pathLength: 0 },
    };

    const switchLightVariant = {
        initial: { translateY: 0 },
        animate: { translateY: 0 },
        exit: { translateY: 0 },
    }
    const switchLightChildVariant = {
        initial: { pathLength: 0, scale: 0, pathOffset: 0 },
        animate: { pathLength: 1, scale: 1, pathOffset: 0 },
        exit: { pathLength: 0, scale: 0, pathOffset: 0 },
    }
    const switchLightCircleVariant = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
    }

  const SwitchDark = () => {
    return (
      <motion.g
        key={"23423"}
        variants={switchDarkVariant}
        transition={{ duration: 0.2, ease: "easeOut" }}
        >
        <motion.path
          variants={switchDarkChildVariant}
          d="M22.1637 24.5102L22.5996 24.2654L22.1637 24.5102ZM21.5781 25.9582L21.4349 25.4791L21.5781 25.9582ZM21.4389 12.249L21.7865 12.6084L21.4389 12.249ZM22.1637 11.4898L22.5996 11.7346L22.1637 11.4898ZM21.5781 10.0418L21.4349 10.5209L21.5781 10.0418ZM19.5 18C19.5 15.8836 20.376 13.9726 21.7865 12.6084L21.0913 11.8896C19.494 13.4344 18.5 15.6016 18.5 18H19.5ZM21.7865 23.3916C20.376 22.0274 19.5 20.1164 19.5 18H18.5C18.5 20.3984 19.494 22.5656 21.0913 24.1104L21.7865 23.3916ZM21 25.5C16.8579 25.5 13.5 22.1421 13.5 18H12.5C12.5 22.6944 16.3056 26.5 21 26.5V25.5ZM13.5 18C13.5 13.8579 16.8579 10.5 21 10.5V9.5C16.3056 9.5 12.5 13.3056 12.5 18H13.5ZM21.0913 24.1104C21.3115 24.3234 21.4681 24.4749 21.5792 24.5893C21.7006 24.7141 21.7282 24.7558 21.7278 24.7551L22.5996 24.2654C22.5277 24.1372 22.4106 24.0099 22.2963 23.8923C22.1718 23.7642 22.0017 23.5998 21.7865 23.3916L21.0913 24.1104ZM21 26.5C21.264 26.5 21.4952 26.5048 21.7212 26.4373L21.4349 25.4791C21.3808 25.4952 21.32 25.5 21 25.5V26.5ZM21.7278 24.7551C21.8846 25.0344 21.7418 25.3874 21.4349 25.4791L21.7212 26.4373C22.6422 26.1621 23.0704 25.1034 22.5996 24.2654L21.7278 24.7551ZM21.7865 12.6084C22.0017 12.4002 22.1718 12.2358 22.2963 12.1077C22.4106 11.9901 22.5277 11.8628 22.5996 11.7346L21.7278 11.2449C21.7282 11.2442 21.7006 11.2859 21.5792 11.4107C21.4681 11.5251 21.3115 11.6766 21.0913 11.8896L21.7865 12.6084ZM21 10.5C21.32 10.5 21.3808 10.5048 21.4349 10.5209L21.7212 9.56275C21.4952 9.49525 21.264 9.5 21 9.5V10.5ZM22.5996 11.7346C23.0704 10.8966 22.6422 9.83785 21.7212 9.56275L21.4349 10.5209C21.7418 10.6126 21.8846 10.9656 21.7278 11.2449L22.5996 11.7346Z"
          fill={theme === "dark" ? "white" : "black"}
        />
      </motion.g>
    );
  };

  const SwitchLight = () => {
    return (
      <motion.g
        key={"1"}
        variants={switchLightVariant}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.circle
          variants={switchLightCircleVariant}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          cx="18"
          cy="18"
          r="4"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M18 11V9"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M22.9491 13.05L24.3633 11.6357"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M25 18L27 18"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M22.9491 22.95L24.3633 24.3643"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M18 27V25"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M11.6366 24.3644L13.0508 22.9502"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M9 18L11 18"
          stroke-linecap="round"
        />
        <motion.path
          className="origin-bottom"
          variants={switchLightChildVariant}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          stroke={"black"}
          d="M11.6366 11.6356L13.0508 13.0498"
          stroke-linecap="round"
        />
      </motion.g>
    );
  };

  return (
    <div
      className="relative w-[36px] h-[36px] cursor-pointer select-none"
      onClick={() => SwitchTheme()}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="overflow-visible focus:outline-none"
        fill="none"
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.1,
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: rect * 90 }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          stroke={theme === "dark" ? "white" : "black"}
          x="1"
          y="1"
          width="34"
          height="34"
          rx="6"
        />
        <AnimatePresence mode="wait">
          {theme === "dark" && <SwitchDark />}
          {theme === "light" && <SwitchLight />}
        </AnimatePresence>
      </motion.svg>
    </div>
  );
};

export default ThemeSwitch;

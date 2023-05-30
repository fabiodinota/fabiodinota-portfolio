"use client";

import React from "react";
import { useThemeContext } from "../context/themeContext";

function Contact() {
  const { colors } = useThemeContext();
  return <div className={`${colors.primary} h-full w-full flex justify-center items-center text-2xl`}>Contact</div>;
}
export default Contact;

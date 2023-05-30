"use client";

import React from "react";
import { useThemeContext } from "../context/themeContext";

function Contact() {
  const { colors } = useThemeContext();
  return <div className={`${colors.primary}`}>Contact</div>;
}
export default Contact;

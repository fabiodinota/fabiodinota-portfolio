"use client";

import React from "react";
import { useThemeContext } from "../context/themeContext";

function About() {
  const { colors } = useThemeContext();
  return <div className={`${colors.primary}`}>About</div>;
}

export default About;

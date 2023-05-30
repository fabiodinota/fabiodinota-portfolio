"use client";

import React from "react";
import { useThemeContext } from "../context/themeContext";

function Projects() {
  const { colors } = useThemeContext();
  return <div className={`${colors.primary} h-full w-full flex justify-center items-center text-2xl`}>Projects</div>;
}

export default Projects;

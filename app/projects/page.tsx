"use client";

import React from "react";
import { useThemeContext } from "../context/themeContext";

function Projects() {
  const { colors } = useThemeContext();
  return <div className={`${colors.primary}`}>Projects</div>;
}

export default Projects;

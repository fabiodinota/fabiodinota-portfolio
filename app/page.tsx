"use client";

import Image from "next/image";
import { useThemeContext } from "./context/themeContext";

export default function Home() {
  const { theme, colors } = useThemeContext();

  return (
    <div className={`h-[2000px] w-full`}>
      <h1 className={`${colors.primary}`}>Home</h1>
    </div>
  );
}

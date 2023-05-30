"use client";

import Image from "next/image";
import { useThemeContext } from "./context/themeContext";

export default function Home() {
  const { theme, colors } = useThemeContext();

  return (
    <div className={`h-full w-full flex justify-center items-center `}>
      <h1 className={`${colors.primary} text-2xl`}>Home</h1>
    </div>
  );
}

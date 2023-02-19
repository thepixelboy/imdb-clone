"use client";

import { useEffect, useState } from "react";

import { BsFillMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-300"
          onClick={() => setTheme("ligh")}
          title="Change site theme to Light"
        />
      ) : (
        <BsFillMoonFill
          className="text-xl cursor-pointer hover:text-amber-300"
          onClick={() => setTheme("dark")}
          title="Change site theme to Dark"
        />
      )}
    </>
  );
}

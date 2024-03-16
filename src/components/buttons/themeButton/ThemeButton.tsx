"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all  dark:hidden block" />
        <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeButton;

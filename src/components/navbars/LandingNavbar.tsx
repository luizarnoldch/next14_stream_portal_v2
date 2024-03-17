import React from "react";
import ThemeButton from "../buttons/themeButton/ThemeButton";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const LandingNavbar = (props: Props) => {
  return (
    <div className="w-full">
      {/* Inner Navbar */}
      <div className="max-w-[1440px] h-16 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>Logo</div>
        {/* Nav Page */}
        <div>Nav</div>
        {/* Extra Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Theme Button */}
          <ThemeButton />
          {/* Login Button */}
          <Link href={'/sign-in'}>
            <Button className={`active:bg-white/70`}>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;

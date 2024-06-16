import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { PiAvocadoFill } from "react-icons/pi";

// Components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 text-white/80 top-0 z-10 bg-primary sticky">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link href="/">
          <h1 className="flex flex-wrap justify-center items-center text-4xl font-semibold text-accent">
            11<span className="text-white/90">Meses</span>
            <PiAvocadoFill />
          </h1>
        </Link>

        {/* Desktop navbar and hire me button */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
        </div>

        {/* Mobile navbar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

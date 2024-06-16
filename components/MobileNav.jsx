"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { PiAvocadoFill } from "react-icons/pi";

const links = [
  {
    name: "inicio",
    path: "/",
  },
  {
    name: "para ti",
    path: "/love",
  },
  {
    name: "música",
    path: "/music",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <TiThMenu className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        {/* logo */}
        <div className="mb-24 text-center text-2xl">
          <Link href="/">
            <h1 className="flex justify-center items-center text-4xl font-semibold">
              11 <span className="text-white">Meses</span>
              <PiAvocadoFill />
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8 text-white/80">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-primary border-b-2 border-primary"
                } text-xl capitalize font-bold hover:text-accent-hover transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

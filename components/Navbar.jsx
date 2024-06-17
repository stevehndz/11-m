"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "inicio",
    path: "/",
  },
  {
    name: "para ti",
    path: "/hearts",
  },
  {
    name: "cartita",
    path: "/letter",
  },
  {
    name: "música",
    path: "/music",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent-hover border-b-2 border-accent"
            } capitalize font-bold hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;

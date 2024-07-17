'use client';
import Link from "next/link";
import { links } from "@/lib/menu";
import { link } from "fs";
import { useEffect, useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#Banner" className="flex items-center text-blue-gray-100 hover:text-amber-300 transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#About" className="flex items-center text-blue-gray-100 hover:text-amber-300 transition-colors">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center text-blue-gray-100 hover:text-amber-300 transition-colors">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center text-blue-gray-100 hover:text-amber-300 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar className="fixed mx-auto max-w-screen-xl px-6 py-3 bg-transparent border-0">
        <div className="flex items-center justify-between text-amber-300">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Material Tailwind
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>

      {/* <nav className="w-full absolute flex items-center justify-between flex-wrap bg-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          pics
        </div>

        <div
          id="navbar-hamburger"
          className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div className="text-sm lg:flex-grow">
            {links.map((link) => (
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                href={link.hash}
                key={link.hash}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-block text-sm px-4 py-2 mr-3 loading-none justify-self-end border rounded text-white hover:border-transparent hover:tedxt-teal-500 hover:text-white lg:mt-0">
            Download
          </div>
          <div className="block lg:hidden">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="flex items-center px-3 p-2.5 border rounded text-teal-200"
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav> */}
      {/* <div className="z-[999] relative justify-between">
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <Link
              className="flex w-full items-center justify-center p-3 py-3 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
              href={link.hash}
              key={link.hash}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
          <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="flex fixed top-[0.15rem] right-1/4 h-12 -translate-x-1/4 sm:top-[1.7rem] sm:h-[initial] sm:py-0 rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`my-2 text-l font-semibold`}>
            Email Me
          </h2>
        </a>
    </div> */}
    </>
  );
}

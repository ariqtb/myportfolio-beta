"use client";
import { useEffect, useState } from "react";


import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { AnimatedMenu } from "@/components/animateComps/dropdownMenu2";
import { ButtonRotate } from "@/components/animateComps/buttonrotate";

function NavList() {
  return (
    <ul className="text-sm my-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li color="gray" className="p-1 font-medium">
        <a
          href="#top"
          className="flex items-center text-amber-100 hover:text-amber-300 transition-colors"
        >
          Home
        </a>
      </li>
      <li color="gray" className="p-1 font-medium">
        <a
          href="#about"
          className="flex items-center text-amber-100 hover:text-amber-300 transition-colors"
        >
          About
        </a>
      </li>
      <li color="gray" className="p-1 font-medium">
        <a
          href="#project"
          className="flex items-center text-amber-100 hover:text-amber-300 transition-colors"
        >
          Project
        </a>
      </li>
      <li color="gray" className="p-1 font-medium">
        <a
          href="#contact"
          className="flex items-center text-amber-100 hover:text-amber-300 transition-colors"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

// const animate = () => {
//   <motion.div
//     animate={{
//       scale: [1, 2, 3, 4],
//       rotate: [0, 0, 270, 270, 0],
//       borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//     }}
//   />;
// };

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// };

export default function Header() {
  // const [openNav, setOpenNav] = useState(false);

  // const handleWindowResize = () =>
  //   window.innerWidth >= 960 && setOpenNav(false);

  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  interface ScrollState {
    scrollY: number;
    text: string;
  }

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState({scrollY:0, customClass:""});

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.scrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY({scrollY:window.scrollY, customClass: lastScrollY.customClass});
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`${
          show ? "-translate-y-0" : "-translate-y-full"
        } fixed w-full md:w-3/4 mx-auto px-6 py-3 bg-transparent backdrop-blur-md shadow-none border-0 transform z-[999] transition-transform duration-300`}
      >
        <div className="flex items-center md:justify-between text-amber-300">
          <div className="mr-4 -place-items-center md:hidden">
          <AnimatedMenu/>
            {/* <button
              className="ml-auto h-6 w-6 text-inherit align-middle hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </button> */}
          </div>
          <span className="mr-4 cursor-pointer self-start transition-all">
            <div className="flex flex-col">
              <span className="w-fit">Personal Profile</span>
              <span className="w-fit font-light text-xs">
                Powered by Next.Js & TailwindCSS
              </span>
            </div>
          </span>
          <div className="hidden md:inline-block">
            <NavList />
          </div>
          {/* <div className="bg-white rounded w-10 h-10 z-[999]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
          </div> */}
        </div>
          
      </nav>
    </>
  );
}
{
  /* <div className={`${
     show ? "-translate-y-0" : "-translate-y-full"
 }fixed navbar bg-transparent `}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 z-[999]">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */
}

{
  /* <motion.nav
          className="lg:hidden"
          >
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav> */
}

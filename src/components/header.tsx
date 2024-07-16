import Link from "next/link";
import { links } from "@/lib/menu";
import { link } from "fs";

export default function Header() {
  return (
    <>
      <nav className="w-full absolute flex items-center justify-between flex-wrap bg-transparent p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          pics
        </div>
        <div className="block lg:hidden">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="flex items-center px-3 p-2 border rounded text-teal-200"
          >
            button
          </button>
        </div>
        <div id="navbar-hamburger" className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto">
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
        <div className="inline-block text-sm px-4 py-2 loading-none border rounded text-white hover:border-transparent hover:tedxt-teal-500 hover:text-white mt-4 lg:mt-0">
          Download
        </div>
      </nav>
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

import Link from "next/link";
import { links } from "@/lib/menu";


export default function Header() {
  return (
    <>
    <div className="z-[999] relative justify-between">
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
    </div>
    </>
  );
}

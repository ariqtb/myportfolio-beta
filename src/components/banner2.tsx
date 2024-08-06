"use client";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
export default function Banner2() {
  // const descText = "I'm a software engineer"
  return (
    <>
      <div className="min-h-screen w-full rounded-md bg-gray-900 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-4xl mx-auto p-5 relative z-10">
          <TextGenerateEffect className="w-fit text-xl pb-5 text-amber-300 relative z-10 opacity-0" words={"Hi, my name is"}/>
          <TextGenerateEffect className="w-fit text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 relative z-10 opacity-0"
            words={"Tubagus Ariq Naufal."}
          />
          <TextGenerateEffect className="w-fit mt-0 sm:mt-2 text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold relative z-10 opacity-0"
            words={"I build things for the web and mobile."}
          />
          <div className="w-full">
            <h2 className="max-w-screen-sm mt-6 text-l relative z-10 opacity-100 transition-all">
              I&apos;m a{" "}
              <a
                href="#"
                className="font-semibold text-amber-300 hover:text-amber-600 transition-colors"
              >
                software engineer
              </a>{" "}
              specializing in building (ocassionally designing) digital
              experiences. Currently, I&apos;m available and focusing on react
              (flutter for mobile) and node.
            </h2>
          </div>
          <a
          href="#about"
          className="flex w-fit border rounded-lg font-mono p-2 sm:p-4 px-2 sm:px-5 mt-10 border-amber-300 text-amber-300 hover:text-white hover:border-white hover:-translate-y-2 transition-all ease-out relative z-10"
        >
          <h2 className="text-sm sm:text-lg font-normal">
            to know more!
          </h2>
        </a>
        </div>
        <BackgroundBeams />
      </div>
      {/* <section
        id="#top"
        className="flex flex-col justify-center min-h-screen sm:mx-4 md:mx-16 "
      >
        <h2 className="text-xl pb-5 text-amber-300">Hi, my name is</h2>
        <h1 className="w-fit text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50">
          Tubagus Ariq Naufal.
        </h1>
        <h1 className="w-fit mt-0 sm:mt-2 text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold">
          I build things for the web and mobile.
        </h1>
        <div className="w-full">
          <h2 className="max-w-screen-sm mt-6 text-l">
            I&apos;m a{" "}
            <a
              href="#"
              className="font-semibold text-amber-300 hover:text-amber-600 transition-colors"
            >
              software engineer
            </a>{" "}
            specializing in building (ocassionally designing) digital
            experiences. Currently, I&apos;m available and focusing on react
            (flutter for mobile) and node.
          </h2>
        </div>
        <a
          href="#"
          className="flex w-fit border rounded-lg font-mono p-2 sm:p-4 px-2 sm:px-5 mt-10 border-amber-300 text-amber-300 hover:text-white hover:border-white transition-colors"
        >
          <h2 className="text-sm sm:text-lg font-normal">
            Check out my course!
          </h2>
        </a>
      </section> */}
    </>
  );
}

"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const ScrollReveal = dynamic(
  () => {
    return import("../styles/scrollreveal/scrollReveal");
  },
  { ssr: false }
);

export default function About() {
  return (
    <>
      <section
        id="About"
        className="flex flex-col sm:flex-row min-h-screen max-w-screen-lg sm:mx-auto xl:mx-40 py-20"
      >
        <ScrollReveal style={{}}>
          <h2 className="w-full flex font-bold text-3xl text-amber-300 mb-10 mt-3">
            About Me
          </h2>
          <div className="flex flex-col sm:flex-row gap-12">
            <div className="w-full text-gray-300">
              <div>
                <p className="mb-4">
                  Hello, My name is Ariq and i like to create website on the
                  internet. My interest in web development started back in 2022
                  when i created a cooperative website from RRI -one of familiar
                  radio station, and it became more challenging .
                </p>
                <p className="mb-4">
                  Fast-forward to today, and I’ve had the privilege of working
                  at an advertising agency, a start-up, a huge corporation, and
                  a student-led design studio. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at Upstatement for a variety of clients.
                </p>
                <p className="mb-4">
                  I also recently launched a course that covers everything you
                  need to build a web app with the Spotify API using Node &
                  React.
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc max-w-md mt-4 pl-6">
                <li className="">React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PHP</li>
              </ul>
              <h1>Second section!</h1>
            </div>
            <div className="w-full flex flex-col self-center sm:self-start place-items-center left-0 right-0 top-0 bottom-0 max-w-fit">
              <figure className="relative h-auto w-full hover:-translate-y-1.5 bg-[#ffd54f]/90 grayscale-[60%] mix-blend-lighten hover:grayscale-[10%] transition-all duration-300">
                <Image
                  className="flex border-4 rounded-lg border-double align-middle hover:scale-100"
                  src={"/img/profile.jpg"}
                  alt="closeup_photo"
                  width={300}
                  height={300}
                />
                <figcaption className="absolute justify-center bottom-16 left-2/4 flex w-[calc(100%-4rem)] translate-y-10 -translate-x-2/4 rounded-xl bg-white/10 py-3 px-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                  <Typography
                    variant="h6"
                    color="white"
                    className="flex items-center font-normal"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Tubagus Ariq Naufal
                  </Typography>
                </figcaption>
              </figure>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import { ButtonRotate } from "@/components/animateComps/buttonrotate";

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
        id="about"
        className="flex flex-col items-center sm:flex-row min-h-screen max-w-screen-lg mx-auto px-5 py-10"
      >
        <ScrollReveal style={{}}>
          <h2 className="w-full flex font-bold text-3xl text-amber-300 mb-10 mt-3">
            About Me
          </h2>
          <div className="flex flex-col sm:flex-row gap-12">
                {/* <ButtonRotate/> */}
            <div className="w-full text-gray-300">
              <div>
                <p className="mb-4">
                  Hello, My name is Ariq and i'm from Bogor, Indonesia. Started my journey in tech with curiosity
                  for how apps work behind the scenes. What began as my hobby in computer parts and my degree
                  in Informatics Management led me learned and quickly grew and engaged into a passion for creating
                  user-friendly and and functional digital products. Over the years, I've explored
                  various tech and frameworks both web and mobile, learning to turn ideas into interactive
                  and useful experiences.
                </p>
                <p className="mb-4">
                  Fast-forward to today, I focus on building responsive websites and mobile apps using 
                  current and modern technologies. I enjoy solving real-world problems through clean code, 
                  intuitive design, and seamless user experiences. Whether working solo or in a team, 
                  I'm always engaged to learn, improve, and create some meaningful impact through technology.
                </p>
                <p className="mb-4">
                  
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc max-w-md mt-4 pl-6">
                <li className="">SwiftUI</li>
                <li className="">React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="w-full flex flex-col self-center sm:self-start place-items-center left-0 right-0 top-0 bottom-0 max-w-fit">
              <BackgroundGradient className="relative h-auto w-full hover:-translate-y-3 hover:-translate-x-2  grayscale-[50%] hover:grayscale-[10%] transition-all duration-50">
                <Image
                  className="flex rounded-[22px] align-middle hover:scale-100 object-contain"
                  src={"/img/profile.jpg"}
                  alt="closeup_photo"
                  width={300}
                  height={300}
                />
                <figcaption className="absolute justify-center bottom-16 left-2/4 flex w-[calc(100%-4rem)] translate-y-10 -translate-x-2/4 rounded-xl bg-white/10 py-3 px-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm hover:backdrop-blur-md transition-color duration-100">
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
              </BackgroundGradient>
              {/* <figure className="relative h-auto w-full hover:-translate-y-1.5 bg-[#ffd54f]/90 grayscale-[60%] mix-blend-lighten hover:grayscale-[10%] transition-all duration-300">
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
              </figure> */}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

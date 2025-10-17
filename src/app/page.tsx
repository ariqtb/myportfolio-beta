import Image from "next/image";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Banner2 from "@/components/banner2";
import About from "@/components/aboutme";
import Workedat from "@/components/workedat";
import  Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  return (
    // previous padding on main-> px-10 sm:px-10 md:px-8 lg:px-36
    <main className="flex flex-col overflow-x-hidden min-h-screen items-center bg-gray-900">
      <Header />
      <Banner2 />
      <About />
      <Workedat />
      <Project/>
      <Contact/>
      {/* <Banner /> */}
    </main>
  );
}

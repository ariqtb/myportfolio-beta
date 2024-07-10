import Image from "next/image";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Banner2 from "@/components/banner2";
import About from "@/components/aboutme";
import Workedat from "@/components/workedat";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen items-center px-10 sm:px-10 md:px-8 lg:px-36">
      <Header />
      <Banner2 />
      <About />
      <Workedat />
      {/* <Banner /> */}
    </main>
  );
}

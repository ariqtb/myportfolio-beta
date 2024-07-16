"use client";
import dynamic from "next/dynamic";
import { propTypesClassName } from "@material-tailwind/react/types/components/avatar";
// import ScrollReveal from "../styles/scrollreveal/scrollReveal";
import {
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  TabPanelStylesType,
} from "../app/MTailwind";
import { useState } from "react";

const ScrollReveal = dynamic(
  () => {
    return import("../styles/scrollreveal/scrollReveal");
  },
  {ssr: false}
)

export default function Workedat() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  //   const customChangeColor = () => {
  const [activeTab, setActiveTab] = useState("html");

  const handleTabChange = (index: string) => {
    setActiveTab(index);
  };
  //   };

  return (
    <>
      <section id="#Worked" className="flex flex-col justify-center sm:flex-row min-h-screen max-w-screen-lg xl:mx-40 py-20">
        <ScrollReveal style={{}}>
          <h2 className="w-full flex font-bold text-3xl text-amber-300 mb-10 mt-3">
            Where I&apos;ve Worked
          </h2>
          {/* <div className="flex flex-row gap-10">
            <div>
              <Button className="font-bold" variant="gradient">
                At Jakarta
              </Button>

              <h3 className="font-bold">At Bogor</h3>
            </div>
            <div>
              <h3 className="font-bold">Software Engineer</h3>
            </div>
          </div> */}
          <Tabs value="html" orientation="vertical">
            <TabsHeader
              className="w-32 rounded-none bg-transparent p-0 transition ease-in"
              indicatorProps={{
                className:
                  "bg-gray-900 border-l-2 border-amber-600 shadow-none rounded-none",
              }}
              
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`${
                    activeTab === value ? `text-amber-200 border-transparent` : `text-gray-100 border-l-2 border-gray-900`
                  }  hover:bg-gray-900 transition-colors delay-75 ease-in-out py-2`}
                  onClick={() => handleTabChange(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { x: 50 },
                mount: { y: 0 },
                unmount: { x: 50 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className="py-0 text-gray-200"
                >
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </ScrollReveal>
      </section>
    </>
  );
}

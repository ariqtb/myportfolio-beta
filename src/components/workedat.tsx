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
  { ssr: false }
);

export default function Workedat() {
  const data = [
    {
      label: "Ambivers.id",
      value: "ambivers",
      desc: `I've really had a lot of experiences about how to make a good design ambivers.id. In 2022, I learned
            how to consistent about designing such as poster, social media design and video editing
            in almost 50+ design. I also learned how to work in a team and communicate well with my team members. 
            Also responsible to manage task and assist design theme and SOP for the design interns.`,
    },
    {
      label: "GCM Group",
      value: "gcm",
      desc: `I worked as a Software Engineer at GCM Group in 2023, a technology company specializing in software solutions. 
            During my work, I contributed to developing and maintaining web applications, collaborating with 
            cross-functional teams to deliver high-quality software products. I gained hands-on experience in 
            coding, debugging, and testing, while also enhancing my problem-solving skills and 
            understanding of software development life cycles.`,
    },
    {
      label: "Apple Developer Academy",
      value: "apple",
      desc: `As a participant in the Apple Developer Academy 2025 until now, I had the opportunity to immerse myself in the world of
            iOS app development. Throughout the program, I learned various aspects of app design, coding, and 
            user experience principles. I collaborated with fellow students on projects, gaining valuable teamwork 
            experience. The academy provided me with a solid foundation in Swift programming and an understanding 
            of Apple's ecosystem, preparing me for future technology in mobile app development.`,
    },
  ];

  //   const customChangeColor = () => {
  const [activeTab, setActiveTab] = useState("ambivers");

  const handleTabChange = (index: string) => {
    setActiveTab(index);
  };
  //   };

  return (
    <>
      <section
        id="#Worked"
        className="flex flex-col justify-center sm:flex-row min-h-screen md:min-h-96 max-w-screen-lg mx-auto px-5 py-0"
      >
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
          <Tabs value="ambivers" orientation="vertical">
            <TabsHeader
              className="w-32 rounded-none bg-transparent p-0 transition ease-in"
              indicatorProps={{
                className:
                "bg-gray-900 border-l-2 border-amber-300 shadow-none rounded-none",
              }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`${
                    activeTab === value
                      ? `text-amber-300 border-transparent`
                      : `text-gray-100 border-l-2 border-transparent`
                  }  hover:bg-gray-900 transition-colors delay-75 ease-in-out py-2`}
                  onClick={() => handleTabChange(value)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
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
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
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

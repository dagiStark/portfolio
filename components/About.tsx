import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import me from "/public/cop.jpg";
import Image from "next/image";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Dagim-gelaneh-CV.pdf";
    link.download = "Dagim-CV.pdf";
    link.click();
  };
  const words = ["better", "responsive", "beautiful", "modern"];
  return (
    <div id="about" className="flex flex-col ">
      <div className="pb-20 pt-36">
        <Spotlight
          className="-top-40 left-0 md:left-10 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-40 left-1/2 transform -translate-x-1/2 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          className="-top-40 left-full transform -translate-x-full md:left-auto md:right-10 md:-top-20 h-screen"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative flex-col">
        <div className="max-w-[90vw] text-center">
          <h2 className="text-start mb-8 text-xl text-white">Hi, my name is</h2>
          <h1 className="text-start text-4xl md:text-6xl font-bold text-white mb-1">
            Dagim Gelaneh
          </h1>
        </div>

        <div className=" mt-2">
          <TextGenerateEffect
            className="text-2xl "
            words="I am a Full-Stack Engineer"
          />
          <div className="text-4xl mt-16">
            Build
            <FlipWords words={words} /> <br />
            websites & mobile apps with me
          </div>
        </div>
      </div>

      <div className="flex flex-col relative mt-20 mb-4">
        <h2 className="text-2xl mb-10">_About Me.</h2>
        <div className="flex justify-between w-full">
          <div className="w-[60%] p-2 ">
            <p className="text-xl font-extralight">
              <div className="text-left gap-8 flex flex-col">
                <p>
                  Hi, I&apos;m Dagim Gelaneh, a dedicated full-stack web and
                  mobile app developer who enjoys creating innovative solutions.
                  I have experience in API development and testing, along with
                  responsive frontend development. I love taking on challenging
                  projects and working with great teams, focusing on delivering
                  quality and scalable results.
                </p>
                <p>
                  I have experience working on algorithms and developing backend
                  applications, where I&apos;ve honed my skills in optimizing
                  performance and ensuring efficient data processing. My work
                  has involved building robust server-side solutions that
                  support various functionalities and enhance the overall user
                  experience.
                </p>
              </div>
            </p>
            <div className=" pr-16 mt-16">
              <button
                onClick={downloadResume}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Download Resume
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src={me}
              alt=""
              className="border-purple-400 border-8  rounded-tr-[30%] rounded-bl-[30%] rounded-tl-[50%] rounded-br-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

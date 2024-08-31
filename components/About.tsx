import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import me from "/public/cop.jpg";
import Image from "next/image";

const About = () => {
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
            words="I am a full-stack engineer"
          />
          <div className="text-4xl mt-16">
            Build
            <FlipWords words={words} /> <br />
            websites with me
          </div>
        </div>
      </div>

      <div className="flex flex-col relative mt-20 mb-4">
        <h2 className="text-2xl mb-10">_About Me.</h2>
        <div className="flex justify-between w-full">
          <div className="w-1/2 p-2 ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              ducimus. Omnis quisquam, quas atque, laudantium, <br /> qui
              nostrum dolor rerum temporibus veritatis ullam repellendus
              asperiores non itaque consequuntur maxime tempora in! <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              ducimus. Omnis quisquam, quas atque, laudantium, <br /> qui
              nostrum dolor rerum temporibus veritatis ullam repellendus
              asperiores non itaque consequuntur maxime tempora in!
            </p>
          </div>
          <div className="">
            <Image src={me} alt="" className="border-purple-400 border-8  rounded-tr-[30%] rounded-bl-[30%] rounded-tl-[50%] rounded-br-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
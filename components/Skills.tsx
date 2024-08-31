import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import Image from "next/image";
import { skills } from "@/constants";
import { motion } from 'framer-motion';

const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Skills = () => {
  return (
    <div className="mt-32 flex flex-col gap-10 ml- mr-14">
      <div className="flex items-center">
        <h1 className="text-4xl mx-4">My Skills__</h1>
        <hr className="border-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 flex-grow" />
      </div>
      <div className="flex justify-between pl-20 pr-16 pt-10">
        <div className="gap-5 flex flex-col">
          {skills.slice(0, 5).map(({ id, img, title }) => (
            <div key={id} className="flex gap-3 items-center">
              <div>
                <Image src={img} alt="icons" width={"40"} height={"50"} />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {skills.slice(5, 10).map(({ id, img, title }) => (
            <div key={id} className="flex items-center gap-3">
              <div>
                <Image src={img} alt="icons" width={"40"} height={"50"} />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

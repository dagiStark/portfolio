"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/constants";
import { WobbleCard } from "./ui/WobbleCard";

const Projects = () => {
  return (
    <div className="mt-32">
      <div className="flex items-center">
        <h1 className="text-4xl mx-4">My Projects__</h1>
        <hr className="border-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 flex-grow" />
      </div>
      <div className="pl-20 pr-16 pt-10 mt-16">
        {projects.map(({ id, des, img, link }) => (
          <div
            key={id}
            className="relative gap-28 mb-24 rounded-xl transition-transform duration-500 ease-in-out
                       hover:scale-105 "
          >
            <div
              className={`flex flex-col relative md:flex-row gap-10 md:gap-14 transition-transform duration-500 ease-in-out
              ${id % 2 !== 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="w-full md:w-3/4 flex justify-center items-center">
                <WobbleCard>
                  <Image
                    src={img}
                    alt="project image"
                    height="500"
                    width="500"
                    className="w-full max-w-xs md:max-w-sm h-auto object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  />
                </WobbleCard>
              </div>

              <div
                className={`w-full absolute ${
                  id % 2 === 0 ? "left-0 text-left" : "right-0  text-right"
                } top-4  md:w-1/2 flex flex-col justify-center text-white p-8 rounded-lg `}
              >
                <h3 className="text-green-300 text-sm uppercase tracking-wide mb-2">
                  Featured Project
                </h3>
                <h2 className="text-6xl font-semibold mb-4">{"Title"}</h2>
                <p className="text-lg md:text-xl leading-relaxed p-8 rounded-2xl  bg-blue-900">
                  {des}
                </p>
                <p className="bg-[#334a8f] p-3 mt-3 rounded-xl">Technologies</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

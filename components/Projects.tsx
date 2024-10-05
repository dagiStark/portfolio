"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/constants";
import { WobbleCard } from "./ui/WobbleCard";

const Projects = () => {
  const handleClick = (link: string) => {
    window.location.href = `${link}`; // for external navigation
  };
  return (
    <div className="mt-32" id="projects">
      <div className="flex items-center">
        <h1 className="text-4xl mx-4">My Projects__</h1>
        <hr className="border-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 flex-grow" />
      </div>
      <div className="pl-20 pr-16 pt-10 mt-28">
        {projects.map(({ id, des, img, link, title, technologies }) => (
          <div
            key={id}
            className="relative mb-40 rounded-xl transition-transform duration-500 ease-in-out
                       hover:scale-105 hover:cursor-pointer "
            onClick={() => handleClick(link)}
          >
            <div
              className={`flex flex-col relative md:flex-row gap-14 md:gap-14 transition-transform duration-500 ease-in-out
              ${id % 2 !== 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="w-full md:w-3/4 flex justify-center items-center">
                <WobbleCard className="py-0 h-[400px] bg-black-100">
                  <Image
                    src={img}
                    alt="project image"
                    height="500"
                    width="500"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  />
                </WobbleCard>
              </div>

              <div
                className={`w-full absolute ${
                  id % 2 === 0 ? "left-0 text-left" : "right-0  text-right"
                } top-4  md:w-1/2 flex flex-col justify-center text-white p-8 rounded-lg group`}
              >
                <h3 className="text-green-300 text-sm uppercase tracking-wide mb-2">
                  Featured Project
                </h3>
                <h2 className="text-5xl  font-semibold mb-4">{title}</h2>

                {/* Box with Shiny Shadow on Hover */}
                <p className="text-xs font-extralight from-neutral-700 md:text-xl leading-relaxed p-5 rounded-2xl bg-blue-900 transition-shadow duration-500 ease-in-out group-hover:shadow-[0_15px_25px_0px_rgba(0,255,255,0.5)]">
                  {des}
                </p>

                {/* Technologies section revealed on hover */}
                <p
                  className={` p-3 mt-3 ${
                    id % 2 === 0 ? "justify-start" : "justify-end"
                  } rounded-xl  flex flex-wrap gap-2 items-start`}
                >
                  {technologies?.map((item, index) => (
                    <span
                      key={index}
                      className="text-white text-sm bg-black-100 rounded-lg p-2"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

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
      <div className="pl-20 pr-16 pt-10">
        {projects.map(({ id, des, img, link }) => (
          <div
            key={id}
            className="relative gap-28 mb-24 rounded-xl transition-transform duration-500 ease-in-out
                       hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]"
          >
            <div
              className={`flex gap-14 transition-transform duration-500 ease-in-out
                         ${id % 2 !== 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className="w-1/2 p-2 flex items-center justify-center">
                <WobbleCard>
                  <Image
                    src={img}
                    alt="project image"
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  />
                </WobbleCard>
              </div>
              <div className="w-1/2 p-2">
                <p className="mb-4">Description...</p>
                <p>{des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

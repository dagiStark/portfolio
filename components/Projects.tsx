import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import Link from "next/link";
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
          <div key={id} className="gap-28">
            {id % 2 !== 0 ? (
              <div className="flex mb-24 gap-14">
                <WobbleCard>
                  <Image
                    src={img}
                    alt="project image"
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </WobbleCard>
                <div className="w-1/2 p-2">
                  <p className="mb-4">Description...</p>
                  <p className=" ">{des}</p>
                </div>
              </div>
            ) : (
              <div className="flex mb-24 gap-14">
                <p className="w-1/2 p-2 ">{des}</p>
                <WobbleCard>
                  <Image
                    src={img}
                    alt="project image"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </WobbleCard>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

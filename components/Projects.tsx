import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div>
      <div className="text-4xl text-white absolute">
        <h1 >Projects</h1>
      </div>

      <div>
        {projects.map(({ id, des, img, link }) => (
          <CardContainer key={id} className="inter-var">
            <CardBody className="flex bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-black-100"
                >
                  Make things float in air
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="text-start text-black-100">Description </h1>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black-100 text-sm max-w-sm mt-2"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;

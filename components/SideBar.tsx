import React from "react";

import Image from "next/image";
import { socialMedia } from "@/constants";

const SideBar = () => {
  return (
    <div>
      <div className=" text-2xl flex flex-col gap-4 ">
        {socialMedia.map(({id, img, link}) => (

        <ul key={id} className="flex flex-col items-center gap-14">
          <li>
            <a href={link}>
                <Image src={img} alt="icons" width={"50"} height={"50"}/>
            </a>
          </li>
        </ul>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

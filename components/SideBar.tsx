import React from "react";
import github from '../public/icons8-github.svg'
import telegram from '../public/icons8-telegram.svg'
import Image from "next/image";

const SideBar = () => {
  return (
    <div>
      <div className=" text-2xl ">
        <ul className="flex flex-col items-center gap-4">
          <li>
            <a href="#">
                <Image src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
                <Image src={telegram} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
                <Image src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
                <Image src={telegram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

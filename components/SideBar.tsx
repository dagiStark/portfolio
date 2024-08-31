import React, { useState } from 'react';

import Image from "next/image";
import { socialMedia } from "@/constants";

const SideBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  return (
    <div>
      <div className="text-2xl flex flex-col gap-4">
        {socialMedia.map(({ id, img, link }, index) => (
          <ul
            key={id}
            className="flex flex-col items-center gap-14"
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
          >
            <li>
              <a
                href={link}
                className={`block transition-all duration-500 ease-in-out
                  ${
                    focusedIndex === index
                      ? 'hover:shadow-[0_0_20px_8px_rgba(0,0,0,0.5)] hover:scale-125'
                      : 'hover:scale-90 opacity-50'
                  } 
                  shadow-[0_0_10px_rgba(0,0,0,0.3)]
                  hover:bg-gradient-to-r from-blue-500 to-purple-600
                  rounded-full p-1`}
                style={{
                  transform: focusedIndex === index ? 'scale(1.25)' : 'scale(1)',
                  opacity: focusedIndex !== null && focusedIndex !== index ? 0.5 : 1,
                }}
              >
                <Image src={img} alt="icons" width={40} height={50} />
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

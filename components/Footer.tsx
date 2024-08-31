import React from "react";

const Footer = () => {
  return (
    <div className="text-4xl relative">
      <div className="flex items-center">
        {/* <hr className="border-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 flex-grow" /> */}
        <h1 className="text-4xl mx-4">Contact Me__</h1>
        <hr className="border-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 flex-grow" />
      </div>

      <div className="pl-20 pr-16 pt-10">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Let&apos;s get in touch
          </span>
        </button>
      </div>

      
    </div>
  );
};

export default Footer;

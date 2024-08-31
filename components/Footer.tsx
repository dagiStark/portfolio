import React from "react";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:dagigelaneh26@gmail.com";
  };
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-4xl mx-4">Contact Me__</h1>
        <hr className="border-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-5 flex-grow" />
      </div>
      <div className=" relative mb-10 flex flex-col items-center justify-center">
        <div className="mb-20">
          <div className="flex flex-col items-center justify-center mt-20 gap-8">
            <p className="text-purple-400">What&apos;s next?</p>
            <h1 className="text-6xl font-bold">Get in touch</h1>
              <p className="flex max-w-xl items-center justify-center text-center">
                I&apos;m looking for great new opportunities so my inbox is
                always open. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            <div className="pl-20 pr-16 pt-10">
              <button
                onClick={handleEmailClick}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Let&apos;s get in touch
                </span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-base">
          Copyright © 2024 all right reserved, Developed by{" "}
          <span className="text-purple-400">Dagim G.</span>
        </p>
      </div>
    </>
  );
};

export default Footer;

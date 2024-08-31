"use client"
import About from "@/components/About";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import SideBar from "@/components/SideBar";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  const handleEmailClick = () => {
    window.location.href = "mailto:dagigelaneh26@gmail.com";
  };

  return (
    <main className="">
      <FloatingNav navItems={navItems} />
      <div className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="fixed z-10 -bottom-5 left-10 mr-5 mb-5 flex flex-col h-[100vh] items-center justify-end">
          <SideBar />
          <div className="border-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 opacity-25 h-[25vh] mt-5"></div>
        </div>

        <div className="flex flex-col ml-60 mr-60">
          <About />
          <Skills />
          <Approach />
          <Projects />
          <Footer />
        </div>

        <div className="fixed -bottom-5 -right-10 mr-5 mb-5 flex flex-col h-[100vh] items-center justify-end">
          <p
            onClick={handleEmailClick}
            className="text-base text-white p-2 transform rotate-90 mb-4 cursor-pointer
                 transition-all duration-300 ease-in-out
                 hover:text-transparent hover:bg-clip-text 
                 hover:bg-gradient-to-r from-blue-500 to-purple-600
                 hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.5)] shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          >
            <span>dagigelaneh26@gmail.com</span>
          </p>
          <div className="border-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 opacity-25 h-[25vh] mt-24"></div>
        </div>
      </div>
    </main>
  );
}

import About from "@/components/About";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import SideBar from "@/components/SideBar";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "/",
    },
  ];

  return (
    <main className="">
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="fixed top-[40%] left-4 ml-8 mr-5 ">
          <SideBar />
        </div>

        <div className="flex w-screen">
          <TracingBeam className="">
            <FloatingNav navItems={navItems} />
            <About />
            <Skills />
            <Approach />
            <Projects />

            {/* <Testimonials />
            <Footer /> */}
          </TracingBeam>
        </div>

        <p className="writing-vertical-rl rotate-90 text-base fixed text-white p-2 right-10 top-96">
          dagigelaneh26@gmail.com
        </p>
      </div>
    </main>
  );
}

{
  /* <div className="fixed top-[40%] left-4 ml-8 mr-5 ">
        <SideBar />
      </div>
      <div className="">
        <TracingBeam className="">
          <FloatingNav navItems={navItems} />
          <About />
        </TracingBeam>
      </div>

      <div className="fixed top-[40%] right-4">
        <p className="writing-vertical-rl rotate-90 text-base text-white p-2">dagigelaneh26@gmail.com</p>
      </div> */
}

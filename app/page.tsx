import About from "@/components/About";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Image from "next/image";

export default function Home() {

  const navItems = [
    {
      name: "About",
      link: "/"
    }
  ]

  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems}/>
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

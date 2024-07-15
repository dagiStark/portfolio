import About from "@/components/About";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5">
      <About />
      <Footer />
    </main>
  );
}

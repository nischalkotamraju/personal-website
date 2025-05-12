import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex w-full max-w-[60rem] flex-col md:flex-row gap-8 p-6 rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-8 md:w-2/3">
        <h1 className="text-2xl text-white">
          Hey there! I&apos;m <span className="font-bold text-green-200">Nischal Kotamraju</span>.
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-gray-300">
            I&apos;m a{" "}
            <span className="font-semibold text-green-200">sophomore at</span> @{" "}
            <Link
              className="relative underline decoration-dotted hover:text-green-200"
              href={"https://westwood.roundrockisd.org/"}
              target="_blank"
            >
              Westwood High School
            </Link>
            , and <span className="font-semibold text-green-200">a passionate web developer</span>. I&apos;m the{" "}
            <span className="font-semibold text-green-200">President and Founder</span> of{" "}
            <Link
              href={"#"}
              className="relative underline decoration-dotted hover:text-green-200"
              target="_blank"
            >
              GenLink
            </Link>
            , a nonprofit bridging generations through technology and community programs.
          </p>

          <p className="text-gray-300">
            I&apos;m deeply passionate about <span className="font-semibold text-green-200">STEM</span> and aspire to
            work in the <span className="font-semibold text-green-200">fintech</span> field, combining my knowledge of{" "}
            <span className="font-semibold text-green-200">computer science</span> and{" "}
            <span className="font-semibold text-green-200">finance</span> to innovate in investment banking. My journey
            has been filled with exciting accomplishments, including being a{" "}
            <span className="font-semibold text-green-200">state finalist</span>,{" "}
            <span className="font-semibold text-green-200">state winner</span>, and{" "}
            <span className="font-semibold text-green-200">hackathon champion</span>.
          </p>

          <p className="text-gray-300">
            I&apos;ve also been exploring the idea of creating a startup focused on{" "}
            <span className="font-semibold text-green-200">app development and engineering</span>. My goal is to develop{" "}
            <span className="font-semibold text-green-200">innovative solutions</span> for making home deliveries safer
            through <span className="font-semibold text-green-200">affordable, durable products</span> that stand out from
            the bulky and expensive options available today. This vision combines my passion for technology and problem-solving
            to address real-world challenges.
          </p>

          <p className="text-gray-300">
            My journey has been filled with exciting achievements, including being a{" "}
            <span className="font-semibold text-green-200">2x Hackathon Winner</span>,{" "}
            <span className="font-semibold text-green-200">successful Speech and Debate competitor</span>, and{" "}
            <span className="font-semibold text-green-200">DECA State Qualifier in Business Finance</span>.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href={"/#contact"}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-200 border border-green-200 rounded-md transition-colors hover:bg-green-200 hover:text-black"
          >
            Contact Me <ArrowUpRight size={14} />
          </Link>

          <Link
            href={"/files/resume.pdf"}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white border border-white rounded-md transition-colors hover:bg-white hover:text-black"
          >
            View Resume <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="relative md:w-1/3 flex items-center justify-center">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/nischal.png"
            alt="Nischal Kotamraju"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

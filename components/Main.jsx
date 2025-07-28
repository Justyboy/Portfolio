import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const transitionWords = ["Developer", "Creator", "Problem Solver"];

const Main = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % transitionWords.length);
        setFade(true); // Fade in new word
      }, 900); // Fade out duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="w-full sm:h-screen text-center">
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-start sm:items-center sm:h-full">
        <div className="py-10 mt-20">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className={"text-[#004bb0]"}> Justin </span> a
            <div className="block"> </div>
            <span
              className={`text-[#004bb0] transition-opacity duration-400 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {transitionWords[currentWord]}
            </span>
          </h1>
          {/* <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1> */}
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/justin-lovett-36919216b/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Justyboy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>

            <a href="/myResume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

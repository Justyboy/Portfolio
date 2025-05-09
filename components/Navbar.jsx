import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../public/assets/nav-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-28 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-28 z-[100]"
      }
    >
      <div className="flex border-2 shadow-1 justify-between items-center w-full h-full px-8 pt-1 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="400"
              height="300"
              className="cursor-pointer"
              objectFit="contain"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase relative group">
              <Link href="/">
                <a className="tracking-widest">Home</a>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="ml-10 text-sm uppercase relative group">
              <Link href="/#about">
                <a className="tracking-widest">About</a>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="ml-10 text-sm uppercase relative group">
              <Link href="/#skills">
                <a className="tracking-widest">Skills</a>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="ml-10 text-sm uppercase relative group">
              <Link href="/#projects">
                <a className="tracking-widest">Projects</a>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="ml-10 text-sm uppercase relative group">
              <Link href="/#contact">
                <a className="tracking-widest">Contact</a>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image
                    src={NavLogo}
                    width="320"
                    height="128"
                    alt="/"
                    objectFit="contain"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm relative group w-fit"
                >
                  <span className="tracking-widest">Home</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm relative group w-fit"
                >
                  <span className="tracking-widest">About</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm relative group w-fit"
                >
                  <span className="tracking-widest">Skills</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm relative group w-fit"
                >
                  <span className="tracking-widest">Projects</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link href="/myResume.pdf">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm relative group w-fit"
                >
                  <span className="tracking-widest">Resume</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm relative group w-fit"
                >
                  <span className="tracking-widest">Contact</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#004bb0] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase font-bold tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/justin-lovett-36919216b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Justyboy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <a href="/myResume.pdf" target="_blank">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

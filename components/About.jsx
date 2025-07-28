import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full sm:py-8 sm:mb-10 py-0 px-8 sm:px-10 flex items-start sm:items-center"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-12">
        <div className="col-span-2">
          <p className="font-bold uppercase text-xl tracking-widest text-[#004bb0]">
            About
          </p>
          <h2 className="py-4 font-bold">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I'm Justin. A front-end web developer who loves clean code,
            creative UI, and great coffee. I specialize in building
            mobile-responsive user interfaces using HTML, CSS, JavaScript, and
            React. With a Bachelor's degree in Computer Science focused on web
            development, I bring both technical knowledge and hands-on
            experience to every project I take on. I'm passionate about learning
            new technologies and believe there's always more than one way to
            solve a problem — it's all about choosing the right tool for the
            job.
          </p>
          <p className="py-2 text-gray-600">
            When I’m not coding, you’ll probably find me behind a camera lens or
            sipping an espresso. Let’s build something great together.
          </p>
        </div>

        <div className="rounded-xl p-4 hover:scale-105 ease-in duration-300 mt-8 items-center self-center mb-16 sm:mb-0">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="picture of me"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default About;

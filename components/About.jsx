import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full py-10 sm:py-2 px-8 sm:px-10 flex items-center "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-12">
        <div className="col-span-2">
          <p className="font-bold uppercase text-xl tracking-widest text-[#004bb0]">
            About
          </p>
          <h2 className="py-4 font-bold">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI
            applications. I&#39;m passionate about learning new technologies and
            understand there is more than one way to accomplish a task. Though I
            am most proficient in building front-end applications using HTML,
            CSS, Javascript, and React, I have my Bachelor&#39;s degree in
            computer science with a focus on web development.
          </p>
          <p className="py-2 text-gray-600">
            I am a quick learner and can pick up new tech stacks as needed. I
            believe that being a great developer is not using one specific
            language, but choosing the best tool for the job. I also love
            photography and coffee!
          </p>
          <a href="/myResume.pdf" target="_blank">
            <div className="flex justify-center m-auto px-10 p-4 text-gray-100 mt-4">
              Resume
            </div>
          </a>
        </div>

        <div className="w-full md:w-[80%] h-[300px] md:h-[400px] relative m-auto shadow-2xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300 mt-8 md:mt-0">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="picture of me"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default About;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import starpilImg from "../public/assets/projects/starpil.png";

import mrImg from "../public/assets/projects/mr.png";

import wwImg from "../public/assets/projects/ww.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-10 py-16">
        <p className="text-xl font-bold tracking-widest uppercase text-[#004bb0]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 py-4 ">
          <ProjectItem
            title="Shopify Ecommerce"
            backgroundImg={starpilImg}
            projectUrl="/starpil"
            tech="Shopify"
          />
          <ProjectItem
            title="Mama Rosa's"
            backgroundImg={mrImg}
            projectUrl="/mr"
            tech="React JS"
          />

          <ProjectItem
            title="WanderWords"
            backgroundImg={wwImg}
            projectUrl="/ww"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

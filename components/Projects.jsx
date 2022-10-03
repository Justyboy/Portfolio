import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import starpilImg from '../public/assets/projects/starpil.png';
import althyImg from '../public/assets/projects/Althy.png'
import amazonImg from '../public/assets/projects/amazon.png'
import telsaImg from '../public/assets/projects/telsa.png'
import airbnbImg from '../public/assets/projects/airbnb.png'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-8 sm:px-10 py-16'>
        <p className='text-xl font-bold tracking-widest uppercase text-[#767676]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8 py-4 '>
          <ProjectItem
            title='Shopify Ecommerce'
            backgroundImg={starpilImg}
            projectUrl='/starpil'
            tech='Shopify'
          />
          <ProjectItem
            title='Wordpress Ecommerce'
            backgroundImg={althyImg}
            projectUrl='/althy'
            tech='Wordpress'

          />
          <ProjectItem
            title='Amazon Clone'
            backgroundImg={amazonImg}
            projectUrl='/amazon'
            tech='React JS'

          />
          <ProjectItem
            title='Telsa Clone'
            backgroundImg={telsaImg}
            projectUrl='/telsa'
            tech='Next JS'

          />
            <ProjectItem
            title='Airbnb Clone'
            backgroundImg={airbnbImg}
            projectUrl='/airbnb'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { React, useLayoutEffect} from 'react';
import gsap from 'gsap';
import { MdNavigateNext } from "react-icons/md";
import Image from 'next/image';



export default function Project({ id, title, subtitle, role, description, imgs, tools, liveLink }) {


 
  return (
    <div id={id} className="project my-8 text-white flex flex-col lg:flex-row gap-7  max-w-[2000px] m-auto ">
      {/* Text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <div className="sticky-container relative lg:w-[30%]">
        <div className="sticky flex gap-5 items-center top-0 left-0 lg:h-lvh">
          <div className="project-text pt-9">

            <p >{role}</p>
            <h1 className='text-6xl mb-4'>{title}</h1>
            <p className='text-3xl'>{subtitle}</p>
            <p className=' py-3 font-thin' >{description}</p>
            <p>
              <span className="font-bold pr-2">Made With:</span>
              {tools.map((tool, index) => (
                <span className='font-thin' key={index}>
                  {tool}{index < tools.length - 1 && ', '}
                </span>
              ))}
            </p>
            {/* Desktop Button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            {liveLink &&
              <a target="_blank" href={liveLink} className='rounded-full items-center justify-between text-center border border-white py-3 px-12 mt-6 hidden lg:inline-flex hover:bg-white hover:text-black transition ease-in-out duration-300'>See it Live
                <MdNavigateNext size="25" className='inline' /></a>
            }
          </div>
        </div>
      </div>

      {/* Pictures ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="project-images lg:w-[70%] lg:py-[100vh] lg:px-16">
        {imgs?.map((image, index) => (
    <Image key={index} className='py-7' src={`/img/${image.src}`} alt={image.alt}  width={900} height={600}
/>
  ))}

      </div>
      {/* Mobile Button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {liveLink &&
      <a target="_blank" href={liveLink} className='rounded-full lg:hidden  items-center justify-between text-center border border-white py-3 px-12 mb-6 hover:bg-white hover:text-black transition ease-in-out duration-300'>See it Live
        <MdNavigateNext size="25" className='inline' /></a>
}
    </div>
  )
}

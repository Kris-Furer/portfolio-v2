import { React, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Project({
  id,
  title,
  subtitle,
  role,
  description,
  imgs,
  tools,
  liveLink,
}) {
  // Fade in the project text
  useLayoutEffect(() => {
    gsap.fromTo(
      `#${id} .project-text`,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: `#${id} .project-text`,
          start: "top bottom",
          end: "bottom center+=200px",
        },
      }
    );
  }, [id]);

  return (
    <div
      id={id}
      className="project my-8 py-14 text-white flex flex-col lg:flex-row gap-7  max-w-[2000px] m-auto "
    >
      {/* Text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="sticky-container relative lg:w-[30%]">
        <div className="sticky flex gap-5 items-center top-0 left-0 lg:h-lvh">
          <div className="project-text pt-9">
            <p className="pl-1">{role}</p>
            <h1 className="text-6xl mb-4 mt-2">{title}</h1>
            <p className="text-3xl">{subtitle}</p>
            <p className=" py-3 font-thin">{description}</p>
            <p>
              <span className="font-bold pr-2">Made With:</span>
              {tools.map((tool, index) => (
                <span className="font-thin" key={index}>
                  {tool}
                  {index < tools.length - 1 && ", "}
                </span>
              ))}
            </p>
            {/* Desktop Button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            {liveLink && (
              <a
                target="_blank"
                href={liveLink}
                className="rounded-full items-center justify-between text-center border border-white py-3 px-12 mt-6 hidden lg:inline-flex hover:bg-white hover:text-black transition ease-in-out duration-300"
              >
                See it Live <MdNavigateNext size="25" className="inline" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Pictures ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="project-images lg:w-[70%] lg:py-[100vh] lg:px-16">
        {imgs?.map((image, index) => (
          <Image
            key={index}
            className="my-7 bg-gray-700 bg-opacity-60 "
            src={`/img/${image.src}`}
            alt={image.alt}
            width={1000}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (min-width: 1024px) 70vw" 
          />
        ))}
      </div>

      {/* Mobile Button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {liveLink && (
        <a
          target="_blank"
          href={liveLink}
          className="rounded-full lg:hidden items-center justify-between text-center border border-white py-3 px-12 mb-6 hover:bg-white hover:text-black transition ease-in-out duration-300"
        >
          See it Live <MdNavigateNext size="25" className="inline" />
        </a>
      )}
    </div>
  );
}

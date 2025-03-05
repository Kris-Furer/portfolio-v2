import { React, useLayoutEffect } from "react";
import gsap from "gsap";

export default function () {
  useLayoutEffect(() => {
    gsap.fromTo(
      "canvas",
      {
        scale: 0.6,
        clipPath: "circle(0% at 50% 50%)",
      },
      {
        scale: 1,
        clipPath: "circle(110% at 50% 50%)",
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "center top",
          scrub: true,
        },
      }
    );

   
    gsap.fromTo(
      ".landing-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="min-h-lvh relative landing-section ">
      <div className="landing-text sticky">
        <h1 className="text-4xl  text-white">Creative</h1>
        <h1 className="text-4xl  text-white">Code &</h1>
        <h1 className="text-4xl  text-white">Design</h1>
      </div>
    </div>
  );
}

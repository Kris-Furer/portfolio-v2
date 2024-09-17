import {React, useLayoutEffect} from 'react'
import gsap from 'gsap';

export default function () {

  useLayoutEffect(() => {
    gsap.to('.landing-text', {
      backgroundPosition: '100% 0',
      duration: 2,
      repeat: -1,
      ease: 'linear',
    });


    gsap.fromTo('canvas', 
      {
        scale: .6, // Starting scale
      },
      {
        scale: 1, // Default scale
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top", // When .landing-section hits the top of the viewport
          end: "bottom top", // When the bottom of .landing-section hits the top
          scrub: true, // Smooth scroll-based animation
        }
      });
  }, []);

  return (
    <div className='min-h-lvh flex landing-section items-center'>
        <div>
        <h1 className='text-4xl landing-text lg:text-9xl text-white'>Design | Development</h1>
        </div>
    </div>
  )
}

import { React, useLayoutEffect } from 'react'
import gsap from 'gsap';

export default function () {

  useLayoutEffect(() => {
    // Scale animation for canvas
    gsap.fromTo('canvas',
      { scale: .6 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    // Timeline for initial text opacity and position
    gsap.timeline()
      .fromTo('.landing-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power3.out",
          stagger: 0.2,
        });

    // Looping color animation for subtle shade changes
    gsap.to('.landing-text', {
      color: 'rgb(240, 240, 240)', // Subtle lighter shade
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation back and forth
      duration: 2, // Smooth transition over 2 seconds
      ease: "none", // Linear, smooth animation
    });

  }, []);

  return (
    <div className='min-h-lvh flex landing-section items-center'>
      <div>
        <h1 className='landing-text text-white'>Design &</h1>
        <h1 className='text-4xl landing-text text-white'>Development</h1>
      </div>
    </div>
  );
}

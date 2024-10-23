import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useLayoutEffect(() => {
    gsap.fromTo('.about-text', 
      {
        opacity: 0,    // Starting opacity (invisible initially)
        y: 20,          // Starting position (slightly down)
        scale: 0.90     // Starting scale (slightly smaller)
      }, 
      {
        opacity: 1,     // Ending opacity (fully visible)
        y: 0,           // Ending position (original position)
        scale: 1,       // Ending scale (original size)
        duration: 1,    // Duration of the animation
        ease: "power2.out", // Easing function for smoothness
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top center', // Customize as needed
          end: 'center center',  // Customize as needed
          scrub: 1,        // Smooth scroll-linked animation
        }
      }
    );
  }, []);
  

  return (
    <div className='min-h-lvh flex items-center about-section'>
      <div className='about-text'>
        <h1 className='text-5xl py-4 lg:text-9xl'>Hey there!</h1>
        <h2 className='text-3xl py-3 lg:text-6xl'>I'm Kris, I design and develop websites</h2>
        <p className='font-thin py-3'>
          I do other things too.. I like making music, brewing beer, baking bread and learning new things. But you're probably here for my work, just scroll down.
        </p>
      </div>
    </div>
  );
}

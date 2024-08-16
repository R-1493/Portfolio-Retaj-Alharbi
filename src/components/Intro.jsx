import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introRef = useRef(null);

  useEffect(() => {

    gsap.to("#intro", {
      opacity: 0,
      y: 50,
    });

    gsap.to("#intro2", {
      opacity: 0,
      y: 50,
    });

    ScrollTrigger.create({
      trigger: "#intro",
      start: "top top",
      end: "bottom bottom",      
      scrub: true,
      onEnter: () => {
        gsap.to("#intro", {
          opacity: 1,
          delay: 1.5,
          color: "white",
          y: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to("#intro", {
          opacity: 0,
          y: 50,
        });
      },
    });

    ScrollTrigger.create({
      trigger: "#intro2",
      start: "top 400px",
      scrub: true,
      onEnter: () => {
        gsap.to("#intro2", {
          opacity: 1,
          delay: 1.5,
          color: "white",
          y: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to("#intro2", {
          opacity: 0,
          y: 50,
        });
      },
    });

  }, []);

  return (
    <section ref={introRef} className="w-full text-center nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 id="intro" className="intro-title">
          CREATIVE MIND
        </h1>
      </div>
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 id="intro2" className="intro-title">
          Developer and Designer
        </h1>
      </div>
    </section>
  );
};

export default Intro;
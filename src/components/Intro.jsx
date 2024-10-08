import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  useEffect(() => {
    const intro1 = new SplitType("#intro1", { types: "chars" });
    intro1.split();

    setTimeout(() => {
      gsap.from(intro1.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        duration: 1,
      });
    }, 500);

    gsap.to(intro1.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: "#intro1",
        start: "top 20%",
        end: "top 5%",
        scrub: 1,
        toggleActions: "restart none reverse none",
      },
    });
  }, []);

  useEffect(() => {
    const intro2 = new SplitType("#intro2");
    gsap.from(intro2.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: "#intro2",
        start: "top 100%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "restart none reverse none",
      },
    });
  }, []);

  return (
    <div className="mt-20 w-full h-screen*2 relative">
      <div className="intro-scene">
        <Scene />
      </div>
      <section className="w-full text-center nav-height relative intro-section">
        <div className="h-2/6 w-full flex-center flex-col">
          <h1 id="intro1" className="intro-title">
            CREATIVE MIND
          </h1>
        </div>
      </section>
      <section className="w-full text-center nav-height relative intro-section">
        <div className="h-5/6 w-full flex-center flex-col">
          <h1 id="intro2" className="intro-title">
            Developer and Designer
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Intro;

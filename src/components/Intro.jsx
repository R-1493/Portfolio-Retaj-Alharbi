import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import SplitType from 'split-type'

import CythographicSphere from './BallTest'
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  useEffect(() => {
    const intro1Split = new SplitType('#intro1', { types: 'chars' })
    const intro2Split = new SplitType('#intro2', { types: 'chars' })

    // 🎯 intro1: تظهر عند الدخول، وتختفي عند الخروج للأعلى
    ScrollTrigger.create({
      trigger: '#intro1',
      start: 'top center',
      end: 'bottom top',
      onEnter: () => {
        gsap.fromTo(
          intro1Split.chars,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1.2,
            ease: 'power4.out',
          }
        )
      },
      onLeave: () => {
        gsap.to(intro1Split.chars, {
          y: -100,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power2.inOut',
        })
      },
      onEnterBack: () => {
        gsap.fromTo(
          intro1Split.chars,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1.2,
            ease: 'power4.out',
          }
        )
      },
      onLeaveBack: () => {
        gsap.to(intro1Split.chars, {
          y: 100,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power2.inOut',
        })
      },
    })

    // 🎯 intro2: تظهر لما تدخل، وتختفي لما تطلع، مثل intro1
    ScrollTrigger.create({
      trigger: '#intro2',
      start: 'top center',
      end: 'bottom top',
      onEnter: () => {
        gsap.fromTo(
          intro2Split.chars,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1.2,
            ease: 'power4.out',
          }
        )
      },
      onLeaveBack: () => {
        gsap.to(intro2Split.chars, {
          y: 100,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power2.inOut',
        })
      },
    })
  }, [])

  return (
    <div className="w-full relative">
      <div className="absolute inset-0 z-0">
        <CythographicSphere />
      </div>

      <section className="mt-20 text-center nav-height relative intro-section z-10">
        <div className="h-2/6 flex-center flex-col">
          <h1 id="intro1" className="intro-title">
            CREATIVE MIND
          </h1>
        </div>
      </section>

      <section className="text-center relative intro-section z-10">
        <div className="h-5/6 flex-center flex-col">
          <h1 id="intro2" className="intro-title">
            Developer and <p>Designer</p>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Intro

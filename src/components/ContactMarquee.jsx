import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const contacts = [
  { label: 'Email', url: 'mailto:retajalharbi@gmail.com' },
  { label: 'Behance', url: 'https://behance.net/retajalharbi' },
  { label: 'Phone', url: 'tel:+966500000000' },
  { label: 'GitHub', url: 'https://github.com/retajalharbi' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/retajalharbi' },
]

const ContactMarquee = () => {
  const containerRef = useRef(null)
  const marqueeRef = useRef(null)
  const contentRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const setupAnimation = () => {
      // Clear existing animation if any
      if (animationRef.current) {
        animationRef.current.kill()
      }

      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = contentRef.current.offsetWidth

      // Calculate duration based on content width for consistent speed
      const duration = contentWidth * 0.02

      // Clone the content for seamless looping
      contentRef.current.innerHTML += contentRef.current.innerHTML

      animationRef.current = gsap.to(contentRef.current, {
        x: -contentWidth,
        duration: duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
        },
      })

      // Pause on hover
      const marquee = marqueeRef.current
      marquee.addEventListener('mouseenter', () => {
        animationRef.current.pause()
      })
      marquee.addEventListener('mouseleave', () => {
        animationRef.current.play()
      })
    }

    setupAnimation()

    // Handle window resize
    const handleResize = () => {
      setupAnimation()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden py-10 ">
      <div ref={marqueeRef} className="marquee-container relative">
        <div
          ref={contentRef}
          className="inline-flex items-center space-x-16 md:space-x-24 lg:space-x-32 px-4"
        >
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F576A9] font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap hover:underline hover:text-[#e04d87] transition-colors duration-300"
            >
              {contact.label}
            </a>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smoother edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  )
}

export default ContactMarquee

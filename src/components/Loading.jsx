import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Loading = () => {
  const circleRef = useRef(null)

  useEffect(() => {
    const pulse = gsap.to(circleRef.current, {
      scale: 1.2,
      opacity: 0.6,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })

    // انيميشن دوران خارجي
    const rotate = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 1.5,
      repeat: -1,
      ease: 'linear',
    })

    return () => {
      pulse.kill()
      rotate.kill()
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div
        ref={circleRef}
        className="w-16 h-16 border-4 border-[#F576A9] border-t-transparent rounded-full"
        style={{ transformOrigin: '50% 50%' }}
      />
    </div>
  )
}

export default Loading

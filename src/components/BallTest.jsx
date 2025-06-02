import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NUM_CUBES = 400
const RADIUS = 2.2

function Spike({ index }) {
  const mesh = useRef()

  const direction = React.useMemo(() => {
    const offset = 2 / NUM_CUBES
    const increment = Math.PI * (3 - Math.sqrt(5))

    const y = index * offset - 1 + offset / 2
    const r = Math.sqrt(1 - y * y)
    const phi = index * increment

    return [Math.cos(phi) * r, y, Math.sin(phi) * r]
  }, [index])
  const baseColor = new THREE.Color('#3B0038') // موف غامق من الداخل
  const outerColor = new THREE.Color('#F576A9') // وردي من الخارج

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const pulse =
      RADIUS * 0.4 + (Math.sin(t * 0.4 + index) * 0.5 + 0.5) * RADIUS * 1
    mesh.current.scale.set(0.18, 0.18, pulse)
    mesh.current.position.set(
      direction[0] * RADIUS,
      direction[1] * RADIUS,
      direction[2] * RADIUS
    )
    mesh.current.lookAt(0, 0, 0)
    const distance = mesh.current.position.length()
    const gradient = THREE.MathUtils.clamp(
      (distance - 0.5) / (RADIUS - 0.5),
      0,
      1
    )
    const mixed = baseColor.clone().lerp(outerColor, gradient)
    mesh.current.material.color.copy(mixed)
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.1}
        emissive="#3B0038"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}
function ScrollZoom() {
  const { camera } = useThree()
  const cameraRef = useRef(camera)
  const controlsRef = useRef()

  useEffect(() => {
    cameraRef.current.position.z = 7
    cameraRef.current.position.y = 2
    gsap.to(cameraRef.current.position, {
      z: 5,
      y: -3,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#scroll-container',
        start: 'top top',
        end: '+=500',
        scrub: 1,
        pin: true,
        // markers: true,
      },
    })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useFrame(() => {
    camera.position.copy(cameraRef.current.position)
    if (controlsRef.current) {
      controlsRef.current.update()
    }
  })

  return null
}

export default function CythographicSphere() {
  return (
    <div id="scroll-container" style={{ height: '100vh' }}>
      <Canvas
        style={{
          background: 'black',
          width: '100vw', // زيادة العرض
          height: '100vh',
          margin: '30bottm ',
        }}
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF9E9E" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={1.5}
          color="#9E9EFF"
        />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#FFFFFF"
        />

        {[...Array(NUM_CUBES)].map((_, i) => (
          <Spike key={i} index={i} />
        ))}

        <ScrollZoom />
      </Canvas>
    </div>
  )
}

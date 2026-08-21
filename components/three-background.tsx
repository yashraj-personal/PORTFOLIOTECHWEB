"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line, Sparkles } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function OrbitingCore() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12
  })

  const points = [
    [-1.3, 0.7, 0],
    [0, 1.35, 0.2],
    [1.2, 0.55, -0.1],
    [0.95, -0.8, 0.25],
    [-0.55, -1.2, 0],
    [-1.35, -0.35, -0.2],
  ] as [number, number, number][]

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshBasicMaterial color="hsl(165 100% 42%)" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh scale={0.48}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshBasicMaterial color="hsl(165 100% 42%)" transparent opacity={0.08} />
      </mesh>
      <Line points={points} color="hsl(165 100% 42%)" transparent opacity={0.3} lineWidth={0.7} closed />
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.055, 10, 10]} />
          <meshBasicMaterial color="hsl(325 90% 65%)" />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.35}>
        <OrbitingCore />
      </Float>
      <Sparkles count={70} scale={[12, 7, 5]} size={1.3} speed={0.25} color="hsl(165 100% 42%)" noise={0.7} />
    </>
  )
}

export function ThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-60" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}

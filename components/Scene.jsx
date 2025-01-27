'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

export default function NeuralScene() {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full z-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      
      {[...Array(50)].map((_, i) => (
        <mesh key={i} position={[
          Math.random() * 50 - 25,
          Math.random() * 50 - 25,
          Math.random() * 50 - 25
        ]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
      ))}
      
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Octahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingObjects = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Primary floating sphere */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8]} position={[-4, 2, -2]}>
          <meshStandardMaterial
            color="#3b82f6"
            roughness={0.1}
            metalness={0.8}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      {/* Geometric boxes */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <Box args={[1, 1, 1]} position={[4, -1, -3]}>
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0.2}
            metalness={0.6}
            emissive="#0891b2"
            emissiveIntensity={0.1}
          />
        </Box>
      </Float>

      {/* Crystal-like octahedron */}
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.5}>
        <Octahedron args={[0.6]} position={[2, 3, -4]}>
          <meshStandardMaterial
            color="#8b5cf6"
            roughness={0.1}
            metalness={0.9}
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </Octahedron>
      </Float>

      {/* Torus ring */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.8}>
        <Torus args={[1.2, 0.3, 16, 100]} position={[-2, -2, -1]}>
          <meshStandardMaterial
            color="#f59e0b"
            roughness={0.3}
            metalness={0.7}
            emissive="#d97706"
            emissiveIntensity={0.2}
          />
        </Torus>
      </Float>

      {/* Small accent spheres */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float key={i} speed={2 + i * 0.1} rotationIntensity={1} floatIntensity={1}>
          <Sphere
            args={[0.15]}
            position={[
              Math.sin(i * 0.8) * 6,
              Math.cos(i * 0.6) * 3,
              Math.sin(i * 0.4) * -5
            ]}
          >
            <meshStandardMaterial
              color={`hsl(${i * 45}, 70%, 60%)`}
              roughness={0.2}
              metalness={0.8}
              emissive={`hsl(${i * 45}, 70%, 40%)`}
              emissiveIntensity={0.15}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};
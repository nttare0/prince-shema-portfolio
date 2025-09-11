import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const AnimatedHero3D = () => {
  const textRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      {/* Main title with 3D effect */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8}>
        <Text
          ref={textRef}
          fontSize={0.8}
          maxWidth={8}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          position={[0, 1, 0]}
        >
          NTARE SHEMA PRINCE
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.8}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </Text>
      </Float>

      {/* Subtitle */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Text
          fontSize={0.3}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0.2, 0]}
        >
          Software Engineer & Student
          <meshStandardMaterial
            color="#94a3b8"
            roughness={0.3}
            metalness={0.5}
          />
        </Text>
      </Float>

      {/* Animated rings around the text */}
      <group ref={ringRef}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={1} floatIntensity={1}>
            <RoundedBox
              args={[4 + i * 0.5, 0.05, 0.05]}
              radius={0.02}
              position={[0, 0, -2 - i * 0.3]}
              rotation={[0, 0, i * (Math.PI / 3)]}
            >
              <meshStandardMaterial
                color={`hsl(${200 + i * 30}, 70%, 60%)`}
                roughness={0.1}
                metalness={0.9}
                emissive={`hsl(${200 + i * 30}, 70%, 40%)`}
                emissiveIntensity={0.2}
              />
            </RoundedBox>
          </Float>
        ))}
      </group>

      {/* Interactive spheres */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Float key={i} speed={2 + i * 0.1} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere
            args={[0.08]}
            position={[
              Math.sin(i * Math.PI * 2 / 6) * 3,
              Math.cos(i * Math.PI * 2 / 6) * 2,
              -1
            ]}
          >
            <meshStandardMaterial
              color={`hsl(${i * 60}, 80%, 70%)`}
              roughness={0.1}
              metalness={0.8}
              emissive={`hsl(${i * 60}, 80%, 50%)`}
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};
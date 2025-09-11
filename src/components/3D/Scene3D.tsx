import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingObjects } from './FloatingObjects';

interface Scene3DProps {
  className?: string;
  enableControls?: boolean;
}

export const Scene3D = ({ className = '', enableControls = false }: Scene3DProps) => {
  return (
    <div className={`${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
          
          {/* Environment for reflections */}
          <Environment preset="city" />
          
          {/* 3D Objects */}
          <FloatingObjects />
          
          {/* Optional controls */}
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};
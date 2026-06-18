import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import type { Mesh } from 'three';

function Blob() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.6, 12]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#3b1d8f"
          emissiveIntensity={0.4}
          roughness={0.25}
          metalness={0.3}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function BlobScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <pointLight position={[-4, -2, -2]} intensity={2} color="#8b5cf6" />
      <Blob />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

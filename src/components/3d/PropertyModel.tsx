import React, { useRef, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mesh } from 'three';
import FallbackBox from './FallbackBox';

gsap.registerPlugin(ScrollTrigger);

interface PropertyModelProps {
  modelUrl: string;
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

function Model({ 
  modelUrl, 
  position, 
  scale = 1,
  rotation = [0, 0, 0]
}: PropertyModelProps) {
  const modelRef = useRef<Mesh>(null);
  const { scene } = useGLTF('/models/house.glb', true);

  useEffect(() => {
    if (modelRef.current) {
      gsap.from(modelRef.current.rotation, {
        y: rotation[1] - Math.PI * 2,
        duration: 2,
        scrollTrigger: {
          trigger: modelRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      gsap.from(modelRef.current.position, {
        y: position[1] - 2,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: modelRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });
    }
  }, [position, rotation]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={[scale, scale, scale]}
      rotation={rotation}
    />
  );
}

export default function PropertyModel(props: PropertyModelProps) {
  return (
    <Suspense fallback={<FallbackBox />}>
      <Model {...props} />
    </Suspense>
  );
}
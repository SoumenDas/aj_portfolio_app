import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  
  void main() {
    vec4 color = texture2D(uTexture, vUv);
    
    // Chroma Key (Remove Green Screen)
    float maxRB = max(color.r, color.b);
    if (color.g > maxRB + 0.1) {
      // Calculate how "green" it is to soften the edges (anti-aliasing)
      float greenness = color.g - maxRB;
      float alpha = 1.0 - smoothstep(0.05, 0.3, greenness);
      color.a = alpha;
      
      // Desaturate edge bleed
      if (alpha > 0.0) {
         color.rgb = mix(color.rgb, vec3(maxRB), 0.5);
      }
      
      if (color.a < 0.01) discard;
    }
    
    gl_FragColor = color;
  }
`;

const ChromaKeyAvatar = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Load the green screen image
  const texture = useLoader(THREE.TextureLoader, '/assets/images/clean_avatar_green.png');

  const uniforms = useMemo(() => ({
    uTexture: { value: texture }
  }), [texture]);

  useFrame((state) => {
    if (meshRef.current) {
      // Aggressive Parallax movement based on mouse
      const targetPosX = state.pointer.x * 1.5;
      const targetPosY = state.pointer.y * 1.5;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosX, 0.08);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPosY, 0.08);
      
      // Look at cursor (Dynamic 3D Rotation)
      const targetRotY = state.pointer.x * 0.6;
      const targetRotX = -state.pointer.y * 0.6;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.08);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.08);
      
      // Subtle organic floating
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.2, 0]} scale={[-3.2, 3.2, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div style={{ position: 'absolute', top: '5%', right: '5%', width: '45%', height: '90%', zIndex: 0, pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={1} />
        <React.Suspense fallback={null}>
          <ChromaKeyAvatar />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

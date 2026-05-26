import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Liquid Distortion Effect
    float wave1 = sin(pos.y * 10.0 + uTime * 2.0) * 0.02;
    float wave2 = cos(pos.x * 8.0 + uTime * 1.5) * 0.02;
    
    // Apply wave to Z to make it look 3D liquid
    pos.z += wave1 + wave2;
    
    // Apply slight wave to X and Y for a breathing ripple
    pos.x += wave1 * 0.5;
    pos.y += wave2 * 0.5;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
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
      float greenness = color.g - maxRB;
      float alpha = 1.0 - smoothstep(0.05, 0.25, greenness);
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

const FreeAvatar = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Load the newly generated, unified laptop avatar
  const texture = useLoader(THREE.TextureLoader, '/assets/images/clean_avatar_green.png');

  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uTime: { value: 0 }
  }), [texture]);

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      // Update time for the liquid shader
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      
      const targetRotY = state.pointer.x * 0.4;
      const targetRotX = -state.pointer.y * 0.4;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.08);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.08);
      
      const targetPosX = state.pointer.x * 0.5;
      const targetPosY = state.pointer.y * 0.5;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPosX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -0.2 + targetPosY + Math.sin(state.clock.elapsedTime * 2) * 0.08, 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.2, 0]} scale={[3.8, 3.8, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
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

const AvatarImpact = () => {
  return (
    // Absolutely positioned so it overlaps and 'flows' freely outside of any grid box constraints
    <div style={{ position: 'absolute', left: '-5%', top: '5%', width: '45%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={1.5} />
        <React.Suspense fallback={null}>
          <FreeAvatar />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default AvatarImpact;

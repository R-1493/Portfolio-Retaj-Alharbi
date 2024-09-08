import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

useGLTF.preload("/models/ball.glb");

const BallModel = () => {
  const group = useRef(null);

  const { nodes, materials, animations, scene } = useGLTF("/models/ball.glb");

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default BallModel;

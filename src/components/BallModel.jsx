import React, { useEffect, useRef, useScroll } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/models/ball.glb");

const BallModel = () => {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF("/models/ball.glb");
  const { actions, clips } = useAnimations(animations, scene);

  useEffect(() => {
    console.log(actions);

    actions["Plane.002Action"].play().blendMode = true;
    actions["Plane.003Action"].play().blendMode = true;
  }, []);
  // useFrame(
  //   () => {}
  //   //@ts-ignore
  //   // (actions["Experiment"].time =
  //   //   //@ts-ignore
  //   //   (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  // );

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default BallModel;

import { Canvas, useThree } from "@react-three/fiber";
import BallModel from "./BallModel";
import React, { Suspense } from "react";

const Scene = () => {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <BallModel />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

import { Canvas, useThree } from "@react-three/fiber";
import BallModel from "./BallModel";
import React, { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}%loaded</Html>;
}

const Scene = () => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.2} pages={1}>
          <BallModel />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default Scene;

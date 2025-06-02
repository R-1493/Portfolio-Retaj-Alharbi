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
    <div className="absolute inset-0 z-20 ">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="block">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          <ScrollControls damping={0.2} pages={2}>
            <BallModel className="h-full w-full" />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;

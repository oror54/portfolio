import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "@/public/animation.json";

export default function IntroAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ position: "absolute", bottom: "50%", zIndex: "-1" }}
    />
  );
}

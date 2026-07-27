"use client";
import LottiePlayer from "lottie-react";
import { useEffect, useState } from "react";

interface LottieProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function Lottie({ src, className = "", loop = true, autoplay = true }: LottieProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setAnimationData);
  }, [src]);

  if (!animationData) return null;

  return (
    <LottiePlayer
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}

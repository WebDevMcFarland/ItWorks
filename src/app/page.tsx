import React from "react";
import { WavyBackground } from "../../components/ui/wavy-background";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center align-center">
    <WavyBackground className="absolute inset-0 z-0" />
    <div className="relative z-10">
      <p className="text-6xl md:text-7xl lg:text-8xl text-white font-bold text-center cursor-default">
        Comming Soon
      </p>
      <p className="text-xl md:text-2xl lg:text-4xl mt-4 text-white font-normal text-center cursor-default">
        Portfolio Visualization
      </p>
      <p className="text-sm md:text-base lg:text-xl mt-6 text-white font-normal text-center cursor-default px-4 mb-64">
        Jacob McFarlands Software Engineering Portfolio
      </p>
    </div>
  </div>
  );
}

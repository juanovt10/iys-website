import React from "react";
import Image from "next/image";

const Hero = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl mt-4">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;

"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
// import { RxAvatar } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {/* <Image
              src="/avatar.png"
              alt="avatar"
              width={90}
              height={90}
              className="rounded-2xl"
            /> */}
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hello, I'm Vrutik Patwa & I'm a  Full Stack Developer"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I have a strong desire to learn new things. My goal is to build
            innovative tech solutions and lead impactful projects. I may not
            know everything, but I know where to find the answers!
          </p>
          <div className="flex flex-row gap-4">
            <Link href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <MagicButton
              handleClick={() =>
                window.open("/Vrutik_Patwa_s_Resume_.pdf", "_blank")
              }
              title="View My Resume"
              position=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

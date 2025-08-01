import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div id="experience" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> DSA</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-natural-200 dark:border-slate-800"
          >
            <Link
              className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={300}
                height={300}
                priority // Loads the image immediately
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

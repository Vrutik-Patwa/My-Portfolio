"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    path: string;
    skill: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        directionValue
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "10s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, [getDirection, getSpeed]);

  return (
    <div ref={containerRef} className={cn("scroller relative z-20", className)}>
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.concat(items).map((item, index) => (
          <li
            key={`${item.skill}-${index}`}
            className="w-[150px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-4 py-3"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] bg-slate-100 dark:bg-slate-800 rounded-xl"
              ></div>
              <div className="relative z-20 flex flex-row items-center">
                <div className="w-full flex justify-between items-center">
                  <div className="text-sm leading-[1.6] rounded-full text-green-400 font-normal">
                    <Image
                      src={item.path ? item.path : "/Js.svg"}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="text-sm text-center leading-[1.6] text-gray-400 font-normal">
                    {item.skill}
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

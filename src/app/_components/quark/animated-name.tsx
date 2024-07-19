"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const AnimatedName = () => {
  const [name, setName] = useState("SOUMYADIP MONI");
  const [intervalId] = useState<number | null>(null);
  const ref = useRef<HTMLHeadingElement | null>(null);

  const handleMouseOver = useCallback(() => {
    let i = 0;
    if (intervalId !== null) {
      clearTimeout(intervalId);
    }

    const animate = () => {
      setName((prevText) =>
        prevText
          .split("")
          .map((_, index) => {
            if (index < i) {
              return name[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(""),
      );
      if (i < name.length) {
        i += 1 / 3;
        setTimeout(animate, 30);
      }
    };
    animate();
  }, [intervalId, name]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, [handleMouseOver, ref]);

  return (
    <h1 className="text-3xl font-medium sm:text-4xl md:text-6xl">{name}</h1>
  );
};

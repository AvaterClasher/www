"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>/?";

export const AnimatedName = () => {
  const [name, setName] = useState("SOUMYADIP MONI");
  const intervalRef = useRef<number | null>(null);
  const ref = useRef<HTMLHeadingElement | null>(null);
  const text = "SOUMYADIP MONI";

  const handleMouseOver = useCallback(() => {
    let i = 0;
    if (intervalRef.current !== null) {
      clearTimeout(intervalRef.current);
    }

    const animate = () => {
      setName((prevText) =>
        prevText
          .split("")
          .map((_, index) => {
            if (index < i) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      if (i < name.length) {
        i += 1 / 3;
        intervalRef.current = window.setTimeout(animate, 30);
      }
    };
    animate();
  }, [name]);

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
  }, [handleMouseOver]);

  return (
    <h1
      ref={ref}
      className="text-3xl font-medium sm:text-4xl md:text-6xl"
      style={{ width: `${name.length}ch` }}
    >
      {name}
    </h1>
  );
};

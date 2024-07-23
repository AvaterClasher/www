"use client";

import { useState, useEffect, useMemo } from "react";

const AgeComponent = () => {
  const birthDate = new Date(2004, 4, 7);

  const [age, setAge] = useState(0);
  const [mounted, setMounted] = useState(false);

  const initialAge = useMemo(() => {
    const now = new Date();
    const diff = now.getTime() - birthDate.getTime();
    return diff / (1000 * 60 * 60 * 24 * 365.25);
  }, [birthDate]);

  useEffect(() => {
    if (mounted) {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        setAge(initialAge + elapsedTime / (60 * 60 * 24 * 365));
      }, 10);

      return () => clearInterval(interval);
    } else {
      setMounted(true);
      setAge(initialAge);
    }
  }, [initialAge, mounted]);

  if (!mounted) {
    return null;
  }

  return <div>{age.toFixed(9)}</div>;
};

export default AgeComponent;

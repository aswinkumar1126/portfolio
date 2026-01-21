"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";

interface AnimatedOnScrollProps {
  children: ReactNode;
  animationClass?: string; // optional CSS class for animation
  threshold?: number; // % of visibility to trigger animation
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  animationClass = "fade-in-up",
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${visible ? animationClass : "opacity-0"} transition-all duration-700`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;

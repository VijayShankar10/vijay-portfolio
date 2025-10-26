"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorBlob() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Blob */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50" />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="h-10 w-10 rounded-full border-2 border-purple-500/30" />
      </motion.div>
    </>
  );
}

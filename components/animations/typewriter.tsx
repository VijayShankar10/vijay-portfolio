"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  className?: string;
}

export function Typewriter({ texts, className }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          // Typing
          setCurrentText(fullText.substring(0, currentText.length + 1));

          if (currentText === fullText) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          setCurrentText(fullText.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) =>
              prev === texts.length - 1 ? 0 : prev + 1
            );
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, texts, currentTextIndex]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </span>
  );
}

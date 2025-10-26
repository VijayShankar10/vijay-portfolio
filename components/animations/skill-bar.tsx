"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

export function SkillBar({ skill, level, color = "blue" }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const colorClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

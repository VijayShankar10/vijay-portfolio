"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiGit,
  SiDocker,
  SiFigma
} from "react-icons/si";

export function FloatingTechIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const icons = [
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { Icon: SiPython, color: "#3776AB", name: "Python" },
    { Icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
    { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiAmazon, color: "#FF9900", name: "AWS" },
    { Icon: SiGit, color: "#F05032", name: "Git" },
    { Icon: SiDocker, color: "#2496ED", name: "Docker" },
    { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
  ];

  return (
    <div ref={containerRef} className="relative py-20">
      <motion.div
        style={{ opacity, y }}
        className="relative"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Modern Tech</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Building scalable applications with cutting-edge technologies
          </p>
        </div>

        {/* Horizontal Tech Icons Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {icons.map(({ Icon, color, name }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center gap-3 group"
            >
              <div 
                className="p-4 md:p-6 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg"
                style={{ 
                  backgroundColor: `${color}15`,
                  border: `2px solid ${color}30`,
                  boxShadow: `0 0 20px ${color}10`
                }}
              >
                <Icon 
                  size={40} 
                  style={{ color }} 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span 
                className="text-xs md:text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ color }}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Decorative gradient line */}
        <motion.div 
          className="mt-12 h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent max-w-2xl rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}

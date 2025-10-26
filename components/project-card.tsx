"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  category,
  github,
  demo,
  featured,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="12px"
        scale={1.02}
        transitionSpeed={1000}
      >
        <Card className="overflow-hidden h-full bg-gradient-to-br from-card/50 to-card border-2 border-border hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm">
          {/* Image Section */}
          <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-30">
                {category === "AI/ML" && "🤖"}
                {category === "Full Stack" && "💻"}
                {category === "Data Science" && "📊"}
              </div>
            </div>
            {featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                  ⭐ Featured
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Category Badge */}
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>

            {/* Title */}
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, i) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{technologies.length - 4}
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              {github && (
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {demo && (
                <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Card>
      </Tilt>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data/personal-info";

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience That Brings <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Ideas to Life</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through real-world development experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-background" />
                </div>

                {/* Content */}
                <div className="w-full md:w-5/12 ml-16 md:ml-0">
                  <Card className="p-6 bg-gradient-to-br from-card/50 to-card border-2 border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-green-500/20">
                        <Briefcase className="h-6 w-6 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </p>
                        <p className="text-sm mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

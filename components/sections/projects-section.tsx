"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects, personalInfo } from "@/lib/data/personal-info";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI/ML", "Full Stack", "Data Science"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A showcase of my work in AI/ML, Full Stack Development, and Data Science
          </p>

          {/* Category Filter Tabs */}
          <Tabs defaultValue="All" className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs md:text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

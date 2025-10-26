"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillBar } from "@/components/animations/skill-bar";
import { personalInfo, experience } from "@/lib/data/personal-info";
import { FloatingTechIcons } from "@/components/floating-tech-icons";
import Image from "next/image";
import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award,
  BookOpen,
  Trophy,
  MapPin,
  Calendar
} from "lucide-react";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Profile Picture */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a Computer Science student with a strong foundation in Software Development, Cloud Computing, Full Stack Development, Machine Learning, and Data Science. I'm dedicated to leveraging Artificial Intelligence to drive innovative solutions for the problems across these domains.
            </p>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Profile Image with Golden Border */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      {/* Placeholder - Replace with your image */}
                      <Image
                        src="/profile.jpg"
                        alt="Vijay Shankar"
                        width={300}
                        height={300}
                        className="rounded-full object-cover border-4 border-yellow-500 shadow-2xl"
                      />
                      {/* Uncomment when you add public/images/profile.jpg */}
                      {/* <Image 
                        src="/images/profile.jpg" 
                        alt="Vijay Shankar M" 
                        fill
                        className="object-cover"
                        priority
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Tech Stack Icons */}
        <FloatingTechIcons />

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)] mt-20"
        >
          {/* Education Card - Spans 2 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="p-6 h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-lg font-semibold mb-1">{personalInfo.education.degree}</p>
                  <p className="text-muted-foreground mb-2">{personalInfo.education.institution}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {personalInfo.education.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {personalInfo.education.duration}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Badge variant="secondary" className="text-lg">
                      CGPA: {personalInfo.education.cgpa}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Published Author Achievement */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card className="p-6 h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-lg bg-purple-500/20 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Published Author</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  "The 2-Hour Procrastination Fix" on Amazon KDP
                </p>
                <a
                  href={personalInfo.social.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm text-purple-500 hover:text-purple-400 transition-colors"
                >
                  View on Amazon →
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Table Tennis Achievement */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card className="p-6 h-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-lg bg-pink-500/20 w-fit mb-4">
                  <Trophy className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">State Level Athlete</h3>
                <p className="text-sm text-muted-foreground">
                  Table Tennis Player competing at state championships
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Technical Skills - Spans 2 columns, 2 rows */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <Card className="p-6 h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <Code2 className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Languages</h4>
                  <div className="space-y-3">
                    <SkillBar skill="Java" level={90} color="blue" />
                    <SkillBar skill="Python" level={85} color="purple" />
                    <SkillBar skill="JavaScript" level={80} color="pink" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Frameworks & Tools</h4>
                  <div className="space-y-3">
                    <SkillBar skill="React & Next.js" level={85} color="blue" />
                    <SkillBar skill="Spring Boot" level={80} color="green" />
                    <SkillBar skill="TensorFlow" level={75} color="orange" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Cloud & Database</h4>
                  <div className="space-y-3">
                    <SkillBar skill="AWS & GCP" level={75} color="purple" />
                    <SkillBar skill="PostgreSQL & MongoDB" level={85} color="pink" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="p-6 h-full bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-500/20">
                  <Briefcase className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Experience</h3>
                  {experience.map((exp, index) => (
                    <div key={index}>
                      <p className="font-semibold mb-1">{exp.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                      <p className="text-sm mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* AWS Certification */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card className="p-6 h-full bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-lg bg-orange-500/20 w-fit mb-4">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">AWS Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Cloud Solutions Architect
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Tech Stack Tags - Spans full width */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <Card className="p-6 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border-border">
              <h3 className="text-lg font-bold mb-4">Technology Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  ...personalInfo.skills.languages.map((tech) => ({ tech, category: 'lang' })), 
                  ...personalInfo.skills.frameworks.map((tech) => ({ tech, category: 'fw' })),
                  ...personalInfo.skills.databases.map((tech) => ({ tech, category: 'db' })),
                  ...personalInfo.skills.tools.map((tech) => ({ tech, category: 'tool' })),
                  ...personalInfo.skills.aiml.map((tech) => ({ tech, category: 'ai' }))
                ].map((item, index) => (
                  <Badge 
                    key={`${item.category}-${index}-${item.tech}`} 
                    variant="outline" 
                    className="hover:bg-primary/10 transition-colors"
                  >
                    {item.tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

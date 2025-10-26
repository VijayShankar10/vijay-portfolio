"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/animations/typewriter";
import { personalInfo } from "@/lib/data/personal-info";

export function HeroSection() {
  const titles = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Published Author",
    "Problem Solver",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* New Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                New
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                WorkLens Project is live!
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          </motion.div>

          {/* Greeting Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-2xl">👋</span> Hello, I'm
            </p>
          </motion.div>

          {/* Name with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typewriter Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-foreground min-h-[40px]"
          >
            <Typewriter texts={titles} />
          </motion.div>

          {/* Three Identity Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center items-center text-lg"
          >
            <motion.span 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              💻 Developer
            </motion.span>
            <motion.span 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-400 border border-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              📚 Author
            </motion.span>
            <motion.span 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-500/5 text-pink-400 border border-pink-500/20 hover:border-pink-500/40 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              🏓 Athlete
            </motion.span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/25" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-accent" asChild>
              <a href={personalInfo.resume} download>
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-4 justify-center pt-4"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-blue-500/10 hover:text-blue-500 transition-colors" 
              asChild
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-blue-500/10 hover:text-blue-500 transition-colors" 
              asChild
            >
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-purple-500/10 hover:text-purple-500 transition-colors" 
              asChild
            >
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-purple-500/10 hover:text-purple-500 transition-colors" 
              asChild
            >
              <a
                href={personalInfo.social.amazon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Book"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

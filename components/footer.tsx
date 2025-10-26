"use client";

import { personalInfo } from "@/lib/data/personal-info";
import { Github, Linkedin, Mail, BookOpen, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Vijay Shankar M</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Full Stack Developer, AI/ML Enthusiast, Published Author, and State-level Table Tennis Player from Chennai, India.
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.social.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="My Book"
              >
                <BookOpen className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href={personalInfo.resume} download className="text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Work */}
          <div>
            <h3 className="text-lg font-bold mb-4">Featured Work</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={personalInfo.social.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  📚 The 2-Hour Procrastination Fix
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  🤖 Real-Time Emotion Monitoring
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  💻 WorkLens Analytics Dashboard
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  📊 SpendGenius Forecasting Tool
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Vijay Shankar M. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

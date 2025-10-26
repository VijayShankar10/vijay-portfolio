"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data/personal-info";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  BookOpen,
  Download,
  Send,
  Copy,
  Check
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "blue",
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "green",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      color: "red",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.social.github,
      color: "hover:bg-gray-500/10 hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.social.linkedin,
      color: "hover:bg-blue-500/10 hover:text-blue-400",
    },
    {
      icon: BookOpen,
      label: "My Book",
      href: personalInfo.social.amazon,
      color: "hover:bg-purple-500/10 hover:text-purple-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect! Whether you want to discuss projects, collaborations, or just say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.label}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className={`p-3 rounded-lg bg-${method.color}-500/20`}>
                        <Icon className={`h-5 w-5 text-${method.color}-500`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                      {method.copyable && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={copyEmail}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        asChild
                        className={`transition-all duration-300 ${social.color}`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-border h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Let's Collaborate</h3>
              
              <div className="space-y-6 flex-1">
                <p className="text-muted-foreground">
                  I'm always interested in hearing about new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <motion.div 
                    className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold mb-2 text-blue-400">💻 Development Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-stack web apps, AI/ML solutions, and cloud deployments
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold mb-2 text-purple-400">📚 Writing & Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Technical writing, blog posts, and productivity content
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold mb-2 text-green-400">🤝 Internships & Jobs</h4>
                    <p className="text-sm text-muted-foreground">
                      Looking for SDE, Full-stack, or AI/ML opportunities
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" 
                  asChild
                >
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href={personalInfo.resume} download className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Large CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                FROM CONCEPT TO <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">CREATION</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                LET'S MAKE IT <span className="text-primary font-bold">HAPPEN!</span>
              </p>
              <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm available for full-time roles & freelance projects. Let's build something amazing together.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/25"
                asChild
              >
                <a href={`mailto:${personalInfo.email}`}>
                  Get In Touch
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { WaveDivider } from "@/components/wave-divider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <HeroSection />
      
      <WaveDivider color="hsl(var(--muted))" />
      
      <AboutSection />
      
      <WaveDivider flip color="hsl(var(--background))" />
      
      <ExperienceTimeline />
      
      <WaveDivider color="hsl(var(--muted))" />
      
      <ProjectsSection />
      
      <WaveDivider flip color="hsl(var(--background))" />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}

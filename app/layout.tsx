import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vijay Shankar M | Full Stack Developer & AI Enthusiast",
  description: "Computer Science student, Full Stack Developer, AI/ML enthusiast, Published Author, and State-level Table Tennis Player from Chennai, India.",
  keywords: ["Vijay Shankar", "Full Stack Developer", "AI ML", "Published Author", "Table Tennis", "Chennai"],
  authors: [{ name: "Vijay Shankar M" }],
  openGraph: {
    title: "Vijay Shankar M | Developer • Author • Athlete",
    description: "Portfolio of Vijay Shankar - Full Stack Developer, AI/ML Enthusiast, and Published Author",
    url: "https://vijayshankar.com",
    siteName: "Vijay Shankar Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const personalInfo = {
  name: "Vijay Shankar M",
  title: "Full Stack Developer • AI/ML Enthusiast • Published Author",
  tagline: "Developer • Author • Athlete",
  location: "Chennai, Tamil Nadu, India",
  email: "mvijayshankar47@gmail.com",
  phone: "+91 9385564070",
  bio: "Computer Science student with extensive knowledge in Software Development, Cloud Computing, Full Stack Development, Machine Learning, and Data Science. Published author of 'The 2-Hour Procrastination Fix' and state-level table tennis player.",
  avatar: "/images/profile.jpg",
  resume: "/Vijay_Shankar___212222040178_resume.pdf",
  
  social: {
    github: "https://github.com/VijayShankar10",
    linkedin: "https://www.linkedin.com/in/vijayshankar10/",
    portfolio: "https://vijay-shankar-portfolio.vercel.app/",
    amazon: "https://www.amazon.in/2-HOUR-PROCRASTINATION-FIX-Vijay-Shankar-ebook/dp/B0FKB92T3Q",
  },

  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "Saveetha Engineering College (Autonomous)",
    location: "Chennai, Tamil Nadu",
    duration: "2022 - 2026",
    cgpa: "8.01/ 10(Till 6th sem)",
  },

  skills: {
    languages: ["Java", "Python", "C", "HTML", "CSS", "JavaScript", "SQL"],
    frameworks: ["React", "Spring Boot", "TensorFlow", "Node.js", "Next.js"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    cloud: ["Amazon AWS", "Google Cloud Platform", "Vercel", "Netlify"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Google Colab"],
    aiml: ["CNN", "LSTM", "Transfer Learning", "Predictive Analytics", "TensorFlow"],
  },

  achievements: [
    {
      title: "Published Author",
      description: "Self-published 'The 2-Hour Procrastination Fix' on Amazon KDP",
      icon: "book",
      link: "https://www.amazon.in/2-HOUR-PROCRASTINATION-FIX-Vijay-Shankar-ebook/dp/B0FKB92T3Q",
    },
    {
      title: "State Level Table Tennis Player",
      description: "Competed at state-level table tennis championships",
      icon: "trophy",
    },
    {
      title: "AWS Certified",
      description: "Cloud Solutions Architect certification",
      icon: "award",
    },
  ],
};

export const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Internship",
    duration: "June 2024 - July 2024",
    description: "Developed web applications using HTML, CSS, JavaScript, and React",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const projects = [
  {
    id: "worklens",
    title: "WorkLens: Employee Productivity Dashboard",
    description: "An analytics dashboard for corporate transparency and employee productivity monitoring with real-time tracking and insights",
    longDescription: "Full-stack productivity analytics platform with real-time monitoring, analytics visualization, comprehensive reporting features, and AI-powered insights for team performance optimization.",
    technologies: ["React", "Vite", "TypeScript", "Shadcn UI", "Tailwind CSS", "Recharts"],
    category: "Full Stack",
    featured: true,
    image: "/projects/worklens.jpg",
    github: "https://github.com/VijayShankar10/worklens-insight",
    demo: "https://worklens-productivity-analytics.vercel.app/",
  },
  {
    id: "task-management",
    title: "Task Management Application",
    description: "A comprehensive task management system with user authentication, CRUD operations, and real-time updates",
    longDescription: "Full-stack task management platform built with React, Spring Boot, and PostgreSQL. Features include user authentication, task creation, editing, deletion, priority management, and responsive design.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "MongoDB", "REST API", "JWT"],
    category: "Full Stack",
    featured: true,
    image: "/projects/task-management.jpg",
    github: "https://github.com/VijayShankar10",
    demo: "https://my-todo-app-gamma-black.vercel.app/",
  },
  {
    id: "emotion-monitoring",
    title: "Real-Time Emotion Monitoring System",
    description: "Built a system using CNNs and LSTM to detect and analyze real-time body language and emotions for mental health support",
    longDescription: "Developed for IBM Z Datathon, this project uses deep learning to monitor emotions in real-time, providing wellness insights based on body language and facial expressions.",
    technologies: ["Python", "TensorFlow", "CNN", "LSTM", "OpenCV"],
    category: "AI/ML",
    featured: true,
    image: "/projects/emotion-monitoring.jpg",
    github: "https://github.com/VijayShankar10",
    // demo: "https://emotion-monitoring-demo.vercel.app",
  },
  {
    id: "spendgenius",
    title: "SpendGenius: Expense Analysis & Forecasting",
    description: "Expense analysis and forecasting tool using predictive analytics to help users manage their finances better",
    longDescription: "A data science project that analyzes spending patterns and forecasts future expenses using machine learning algorithms.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Excel"],
    category: "Data Science",
    featured: false,
    image: "/projects/spendgenius.jpg",
    github: "https://github.com/VijayShankar10",
  },
];

export const certifications = [
  {
    title: "AWS Cloud Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "/certificates/aws.jpg",
    credentialId: "AWS-CERT-123",
  },
  {
    title: "Database Management Essentials",
    issuer: "Online Platform",
    date: "2023",
    image: "/certificates/database.jpg",
  },
];

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    photoUrl: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    interests: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
  skills: {
    technical: string[];
    general: string[];
    languages: {
      name: string;
      level: number;
    }[];
  };
  certifications: {
    title: string;
    issuer: string;
    date: string;
    link?: string;
  }[];
  awards: {
    title: string;
    date: string;
    description?: string;
    organization?: string;
  }[];
  experience: {
    company: string;
    role: string;
    from: string;
    to: string;
    bullets: string[];
    location?: string;
  }[];
  projects: {
    name: string;
    description: string;
    tech: string[];
    repoUrl: string;
    liveUrl?: string;
    featured?: boolean;
  }[];
  links: {
    type: 'github' | 'linkedin' | 'blog' | 'resume' | 'email' | 'twitter';
    url: string;
    label: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Chen",
    title: "Full-Stack Developer",
    photoUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Passionate developer specializing in modern web technologies and cloud architecture. I build scalable applications that solve real-world problems.",
    location: "San Francisco, CA",
    email: "alex.chen@email.com",
    phone: "+1 (555) 123-4567",
    interests: ["Machine Learning", "Cloud Architecture", "Open Source", "Game Development", "Blockchain"],
    stats: [
      { label: "Race", value: "Software Engineer" },
      { label: "Class", value: "Full-Stack Developer" },
      { label: "Level", value: "Senior" },
      { label: "Experience", value: "5+ Years" },
      { label: "Specialization", value: "React & Node.js" },
      { label: "Status", value: "Available for Hire" }
    ]
  },
  skills: {
    technical: [
      "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", 
      "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Git", "CI/CD",
      "Kubernetes", "Terraform", "Redis", "Elasticsearch"
    ],
    general: [
      "Problem Solving", "Team Leadership", "Agile/Scrum", "Code Review",
      "Mentoring", "Technical Writing", "System Design", "Project Management"
    ],
    languages: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 88 },
      { name: "Java", level: 75 },
      { name: "Go", level: 70 },
      { name: "Rust", level: 60 },
      { name: "SQL", level: 85 }
    ]
  },
  certifications: [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022"
    }
  ],
  awards: [
    {
      title: "Best Innovation Award",
      date: "2023",
      description: "Recognized for developing an AI-powered code review system",
      organization: "TechCorp Annual Awards"
    },
    {
      title: "Hackathon Winner",
      date: "2022",
      description: "1st place in Global AI Hackathon with real-time translation app",
      organization: "AI Global Hackathon"
    },
    {
      title: "Open Source Contributor of the Year",
      date: "2021",
      description: "Contributed over 500 commits to major open source projects",
      organization: "Open Source Foundation"
    }
  ],
  experience: [
    {
      company: "TechCorp",
      role: "Senior Full-Stack Developer",
      from: "2022",
      to: "Present",
      location: "San Francisco, CA",
      bullets: [
        "Led development of microservices architecture serving 10M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
        "Mentored 5 junior developers and conducted technical interviews",
        "Built real-time analytics dashboard using React and WebSocket"
      ]
    },
    {
      company: "StartupXYZ",
      role: "Full-Stack Developer",
      from: "2020",
      to: "2022",
      location: "Remote",
      bullets: [
        "Developed MVP from scratch using React, Node.js, and PostgreSQL",
        "Implemented authentication and authorization system",
        "Optimized database queries improving performance by 60%",
        "Integrated third-party APIs and payment processing"
      ]
    },
    {
      company: "WebAgency",
      role: "Frontend Developer",
      from: "2019",
      to: "2020",
      location: "New York, NY",
      bullets: [
        "Built responsive websites for 20+ clients using React and Vue.js",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Improved website loading speeds by 40% through optimization",
        "Maintained and updated existing client websites"
      ]
    }
  ],
  projects: [
    {
      name: "AI Code Assistant",
      description: "An intelligent code completion and review tool powered by machine learning that helps developers write better code faster.",
      tech: ["React", "TypeScript", "Python", "TensorFlow", "AWS", "Docker"],
      repoUrl: "https://github.com/alexchen/ai-code-assistant",
      liveUrl: "https://ai-code-assistant.demo.com",
      featured: true
    },
    {
      name: "Real-time Chat Platform",
      description: "Scalable chat application with end-to-end encryption, file sharing, and video calling capabilities.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
      repoUrl: "https://github.com/alexchen/chat-platform",
      liveUrl: "https://chat-platform.demo.com",
      featured: true
    },
    {
      name: "E-commerce Analytics Dashboard",
      description: "Comprehensive analytics platform for e-commerce businesses with real-time sales tracking and predictive insights.",
      tech: ["Vue.js", "Node.js", "MongoDB", "Chart.js", "AWS"],
      repoUrl: "https://github.com/alexchen/ecommerce-analytics",
      featured: true
    },
    {
      name: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum blockchain ensuring election integrity.",
      tech: ["React", "Solidity", "Web3.js", "Ethereum", "IPFS"],
      repoUrl: "https://github.com/alexchen/blockchain-voting"
    },
    {
      name: "Task Management API",
      description: "RESTful API for project management with role-based access control and real-time notifications.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      repoUrl: "https://github.com/alexchen/task-api"
    }
  ],
  links: [
    {
      type: "github",
      url: "https://github.com/alexchen",
      label: "GitHub"
    },
    {
      type: "linkedin",
      url: "https://linkedin.com/in/alexchen-dev",
      label: "LinkedIn"
    },
    {
      type: "blog",
      url: "https://alexchen.dev/blog",
      label: "Tech Blog"
    },
    {
      type: "resume",
      url: "/resume.pdf",
      label: "Download Resume"
    },
    {
      type: "email",
      url: "mailto:alex.chen@email.com",
      label: "Email"
    },
    {
      type: "twitter",
      url: "https://twitter.com/alexchen_dev",
      label: "Twitter"
    }
  ]
};
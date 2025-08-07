import myselfImg from "../assets/Myself.jpg";
import resumepdf from "../assets/Resume.pdf";

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    photoUrl: string;
    bio: string;
    location: string;
    email: string;
    interests: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
  skills: {
    technical: string[];
    general: string[];
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
    name: "Adithya Monish Kumar K",
    title: "Full-Stack & AI Enthusiast",
    photoUrl: myselfImg,
    bio: "A full-stack developer and AI enthusiast skilled in JavaScript (React, Node.js), TypeScript, and modern CSS. I build scalable web and mobile applications and integrate machine learning models—using TensorFlow, PyTorch, and Hugging Face—for features like semantic search and real-time analytics.",
    location: "Coimbatore, Tamil Nadu, India",
    email: "ooaadithya@gmail.com",
    interests: ["Full Stack Development", "Mobile Application Development", "Machine Learning", "Deep Learning", "Artificial Intelligence"],
    stats: [
      { label: "Course", value: "Bachelor of Technology" },
      { label: "Specialization", value: "Computer Science and Engineering" },
      { label: "Year", value: "3rd Year" },
      { label: "CGPA", value: "7.65" },
      { label: "Year of Graduation", value: "2027" },
      { label: "Status", value: "Available for Internships" }
    ]
  },
  skills: {
    technical: [
      "React", "TypeScript", "Node.js", "MySQL", "Docker", 
      "PostgreSQL", "MongoDB", "Flutter", "Dart", "Git", "UI/UX Design",
      "Machine Learning (ML)", "HTML", "CSS", "JavaScript", "Python", "Java", "C/C++", "Dart", "Tailwind CSS",
      "Design and Analysis of Algorithms (DAA)", "Data Structures and Algorithms (DSA)", "Database Management System (DBMS)", "Object-Oriented Programming (OOP)", "Computer Organization and Architecture (COA)"
    ],
    general: [
        "Critical Thinking", "Problem Solving", "Project Management", "Team Leadership", "Effective Communication", "Time Management", "Adaptability",
        "Collaboration", "Decision Making", "Attention to Detail", "Creative Thinking", "Analytical Reasoning", "Interpersonal Skills"
    ]
  },
  certifications: [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/83e8edbac26738e9859ce6eb799fff6a"
    },
    {
      title: "Google AI Essentials Certificate",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/60a765b1a191df563fbd3ad55ded874e"
    }
  ],
  awards: [
    {
      title: "Adobe India Hackathon Shortlisted Candidate",
      date: "2025",
      description: "Passed the Round 1 of the Adobe India Hackathon 2025. Being shortlisted as one of the top 10000 from 2,62,000+ participants.",
      organization: "Adobe"
    }
  ],
  experience: [
    {
      company: "Sony SSUP AgroESP",
      role: "Mobile Application Team Lead",
      from: "2025",
      to: "Present",
      location: "Coimbatore, Tamil Nadu, India",
      bullets: [
        "Led the Creation and Development of the Sony SSUP AgroESP mobile application using Flutter and Dart, enabling farmers to access real-time weather data, market prices, and agricultural tips.",
        "Refactored UI to ensure all updated backend data displays correctly and consistently across all screens",
        "Redesigned Polyhouse chart to be fully responsive and render the most recent data on page load",
        "Added customizable DataView controls allowing users to select 1-hour, 3-hour, or 5-hour windows of Server-Sent Events readings",
        "Integrated Polyhouse graph with SSE endpoint for real-time sensor data updates",
        "Connected dashboard widgets to the same SSE stream so all dashboard data refreshes live",
        "Implemented live image refresh logic to display any new backend-pushed images instantly",
        "Built a gallery on the Polyhouse page showing the ten most recent images received from the server",
        "Engineered gallery management to automatically add new images and remove the oldest, keeping exactly ten entries",
        "Enhanced Profile page to display user's username, role, and organization affiliation",
        "Consumed and rendered real-time environmental data (temperature, humidity) and images streamed from the Madampatti end node",
        "Added interactive zoom-in/out and click-to-view functionality for images in the Recent Images gallery",
        "Created the query page and implemented all it's features."
      ]
    }
  ],
  projects: [
    {
      name: "LifeLeveler",
      description: "A gamified life management app that transforms your daily tasks into an RPG adventure.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Router", "Zustand", "Framer Motion", "Lucide React", "React Toastify", "PostCSS", "Autoprefixer", "ESLint", "Node.js", "PostgreSQL", "Netlify"],
      repoUrl: "https://github.com/Adithya-Monish-Kumar-K/LifeLeveler",
      liveUrl: "https://lifeleveler.netlify.app",
      featured: true
    },
    {
      name: "PDF Document Structure Extraction Engine",
      description: "Developed a hybrid pipeline to extract and classify structural elements (Title, H1-H4) from PDFs using LightGBM and Transformer-based models.  Engineered typographic and positional features, and implemented block-merging heuristics for robust outline generation.",
      tech: ["Python", "LightGBM", "Transformers", "PyMuPDF"],
      repoUrl: "https://github.com/Adithya-Monish-Kumar-K/PDF-Document-Structure-Extraction-Engine",
      featured: true
    },
    {
      name: "Persona Driven Document Intelligence Engine",
      description: "Built a semantic matching engine that ranks PDF sections for specific user personas using fine-tuned SentenceTransformer and cosine similarity scoring. Designed a multi-stage relevance scoring framework combining title similarity, content embeddings, and subsection summarization.",
      tech: ["Python", "SentenceTransformers","LightGBM"],
      repoUrl: "https://github.com/Adithya-Monish-Kumar-K/Persona-Driven-Document-Intelligence-Engine",
      featured: true
    }
  ],
  links: [
    {
      type: "github",
      url: "https://github.com/Adithya-Monish-Kumar-K",
      label: "GitHub"
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/adithya-monish-kumar-k",
      label: "LinkedIn"
    },
    {
      type: "resume",
      url: resumepdf,
      label: "Download Resume"
    },
    {
      type: "email",
      url: "mailto:ooaadithya@gmail.com",
      label: "Email"
    },
  ]
};
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AI & GENERATIVE AI",
    skills: [
      "Python",
      "Generative AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "NLP",
      "Machine Learning",
      "Deep Learning",
      "AI Agents",
      "Multi-Agent Systems",
    ],
  },
  {
    category: "BACKEND",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    category: "FRONTEND",
    skills: [
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "DATABASE",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    category: "TOOLS",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Monaco Editor",
    ],
  },
];

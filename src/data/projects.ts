export interface ProjectItem {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  isFeatured?: boolean;
  links: {
    viewProject: string;
    viewCode: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "agentra",
    num: "01",
    name: "AGENTRA",
    subtitle: "Multi-Agent AI Development Platform",
    description:
      "An AI-powered development environment where specialized AI agents collaborate to plan, architect, build, test, debug, and integrate software projects.",
    technologies: ["Python", "FastAPI", "LangGraph", "React", "Monaco Editor", "Docker"],
    features: [
      "Multi-agent orchestration",
      "Project planning & architecture generation",
      "Backend and frontend agents",
      "AI-powered code generation",
      "File and folder creation & code editing",
      "Integrated Monaco terminal",
      "Testing and debugging pipelines",
      "Human approval workflow",
      "Real-time project generation",
    ],
    isFeatured: true,
    links: {
      viewProject: "#", // Configurable placeholder
      viewCode: "#",    // Configurable placeholder
    },
  },
  {
    id: "ai-website-builder",
    num: "02",
    name: "AI WEBSITE BUILDER",
    subtitle: "Natural Language Web App Generation",
    description:
      "An AI-powered platform that converts natural-language requirements into functional web applications.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AI"],
    features: [
      "AI website generation",
      "Code generation & live preview",
      "Monaco code editor integration",
      "Authentication system",
      "Project management workspace",
      "Downloadable project output",
    ],
    links: {
      viewProject: "#",
      viewCode: "#",
    },
  },
  {
    id: "audio-rag-assistant",
    num: "03",
    name: "YOUTUBE / AUDIO RAG ASSISTANT",
    subtitle: "Speech-to-Text & Contextual Q&A",
    description:
      "An AI assistant that processes YouTube or audio content, generates transcripts, and enables contextual question answering using Retrieval-Augmented Generation.",
    technologies: ["Python", "LangChain", "RAG", "faster-whisper", "Vector Database", "Streamlit"],
    features: [
      "Audio extraction & processing",
      "Speech-to-text transcription via faster-whisper",
      "Document processing & vector search",
      "RAG-based question answering",
      "Contextual summarization",
    ],
    links: {
      viewProject: "#",
      viewCode: "#",
    },
  },
];

// export const PROJECTS = [
//   {
//     id: 1,
//     title: "DocuChat",
//     category: "Chatbot / Assistant",
//     tag: "GPT-4o",
//     description:
//       "Upload any PDF or document and chat with it instantly. Uses OpenAI embeddings + vector search to retrieve context, then GPT-4o to answer questions with citations.",
//     tech: ["OpenAI API", "LangChain", "Pinecone", "React", "FastAPI"],
//     status: "Live",
//     accent: "#00FFB2",
//     icon: "📄",
//     stats: { model: "GPT-4o", docs: "50MB", accuracy: "91%" },
//     links: { github: "#", demo: "#" },
//   },
//   {
//     id: 2,
//     title: "CodeReviewBot",
//     category: "Developer Tool",
//     tag: "GPT-4",
//     description:
//       "GitHub bot that auto-reviews pull requests using GPT-4. Detects bugs, security issues, and style violations. Leaves inline comments like a senior engineer.",
//     tech: ["OpenAI API", "GitHub API", "Node.js", "Webhooks"],
//     status: "Live",
//     accent: "#38BDF8",
//     icon: "🤖",
//     stats: { PRs: "1.2k", issues: "3.4k", time: "< 30s" },
//     links: { github: "#", demo: "#" },
//   },
//   {
//     id: 3,
//     title: "ResumeForge AI",
//     category: "Productivity Tool",
//     tag: "GPT-4o",
//     description:
//       "Paste a job description and your resume — get a tailored, ATS-optimized version in seconds. Uses GPT-4o to rewrite bullet points and match keywords.",
//     tech: ["OpenAI API", "Next.js", "Tailwind CSS", "Vercel"],
//     status: "Live",
//     accent: "#A855F7",
//     icon: "📝",
//     stats: { resumes: "8k+", match: "+40%", users: "3.2k" },
//     links: { github: "#", demo: "#" },
//   },
//   {
//     id: 4,
//     title: "SupportGPT",
//     category: "Customer Support",
//     tag: "GPT-3.5",
//     description:
//       "AI customer support agent trained on your product docs. Handles FAQs, ticket triage, and escalation. Drops into any website via a script tag.",
//     tech: ["OpenAI API", "Embeddings", "React", "Supabase"],
//     status: "Beta",
//     accent: "#F59E0B",
//     icon: "💬",
//     stats: { tickets: "60%↓", response: "< 2s", sources: "Custom" },
//     links: { github: "#", demo: "#" },
//   },
//   {
//     id: 5,
//     title: "MeetingMind",
//     category: "Productivity Tool",
//     tag: "Whisper + GPT",
//     description:
//       "Record any meeting and get AI-generated summaries, action items, and follow-up emails. Combines Whisper for transcription and GPT-4 for structured output.",
//     tech: ["OpenAI Whisper", "GPT-4", "Python", "Streamlit"],
//     status: "Live",
//     accent: "#EC4899",
//     icon: "🎙️",
//     stats: { meetings: "500+", time: "10x faster", format: "JSON" },
//     links: { github: "#", demo: "#" },
//   },
//   {
//     id: 6,
//     title: "ContentPilot",
//     category: "Content Generation",
//     tag: "GPT-4o",
//     description:
//       "Multi-platform content generator for Twitter, LinkedIn, and blogs. Feed it a topic or URL and get platform-native posts with proper tone, length, and hashtags.",
//     tech: ["OpenAI API", "Next.js", "Clerk Auth", "PostgreSQL"],
//     status: "Beta",
//     accent: "#FF6B35",
//     icon: "✍️",
//     stats: { posts: "20k+", platforms: "3", tone: "Custom" },
//     links: { github: "#", demo: "#" },
//   },
// ];


export const PROJECTS = [
  {
    id: 1,
    title: "Twitter Bio Generator",
    category: "Content Generation",
    tag: "GPT-4o",
    description:
      "Generate engaging Twitter bios in seconds. Just provide a bit of information about yourself and let the AI create a compelling bio that stands out.",
    tech: ["OpenRouter", "React", "Node.js", "Express", "Tailwind CSS"],
    status: "Live",
    accent: "#00FFB2",
    icon: "✍️",
    stats: { model: "GPT-4o", docs: "50MB", accuracy: "91%" },
    links: {
      github: "https://github.com/fms12/twitter-bio-generator",
      demo: "https://twitter-bio-generator-backend.vercel.app/",
    },
  },

  {
    id: 2,
    title: "Code Playground AI",
    category: "Developer Tool",
    tag: "GPT-4",
    description:
      "Generate code snippets and assist with programming tasks. Just provide a description of what you need and let the AI create a compelling solution that stands out.",
    tech: ["OpenAI API", "React", "Python", "FastAPI", "LangChain"],
    status: "Beta",
    accent: "#38BDF8",
    icon: "🤖",
    stats: { model: "GPT-4", docs: "50MB", accuracy: "91%" },
    links: {
      github: "#",
      demo: "#",
    },
  },
];
export const CATEGORIES = [
  "All",
  "Chatbot", // ← whatever makes sense for your work
  "Automation",
  "API Tool",
  // ...
];

export const STATUS_META = {
  Live:     { color: "#00FFB2", label: "Live"     },
  Beta:     { color: "#F59E0B", label: "Beta"     },
  Research: { color: "#A855F7", label: "Research" },
};

export const TECH_STACK = [
  "OpenAI API", "GPT-4o", "GPT-4", "GPT-3.5 Turbo", "LangChain","FastAPI",
  "React", "Node.js", "Python", "Vercel",
];

export const HERO_STATS = [
  { value: PROJECTS.length, label: "Projects Built" },
  { value: "Any", label: "AI API" }, // ← your own tagline
  { value: "2024", label: "Since" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/fms12" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-singh-b10ba018a/" },
  { label:"Email",     href:"mailto:mayank2001.iimt@gamil.com"}
];

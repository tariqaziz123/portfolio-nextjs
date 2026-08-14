import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "skillgraph-ai",

    title: "SkillGraph AI",

    featured: true,

    category: "Full Stack Web Application",

    domain: "Developer Recommendation Platform",

    github: "https://github.com/tariqaziz123/SkillGraph-AI",

    live: "https://skillgraph-ai-frontend.onrender.com/",

    backend: "https://skillgraph-ai-8bju.onrender.com/",

    status: "Completed",

    teamSize: "1 Developer",

    duration: "August 2026",

    client: "Personal Project",

    image: "/projects/skillgraph-ai/home.png",

    overview:
      "SkillGraph AI is a full-stack web application that helps users discover developers, explore their skills, projects, technologies, and companies, while providing graph-powered developer recommendations using a Neo4j-compatible graph database.",

    problem:
      "Traditional developer directories store data in relational formats, making it difficult to efficiently model and query relationships between developers, skills, technologies, companies, and projects for recommendation purposes.",

    role:
      "Designed and developed the complete application independently, including the Next.js frontend, Express.js REST API backend, graph database integration, deployment, and responsive user interface.",

    solution:
      "Built a graph-based developer recommendation platform using a Neo4j-compatible graph database to model relationships between developers, skills, projects, technologies, and companies. Implemented REST APIs with Express.js and a modern responsive frontend using Next.js and Tailwind CSS.",

    impact:
      "Demonstrates full-stack application development, graph database modeling, REST API design, TypeScript development, responsive UI implementation, and production deployment on Render.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Neo4j Compatible Graph Database",
      "Cypher",
      "REST API",
      "Render",
      "GitHub",
    ],

    features: [
      "Developer Directory",
      "Developer Profile Page",
      "Skill-based Search",
      "Graph-powered Developer Recommendations",
      "Projects Listing",
      "Skills Directory",
      "Technologies Directory",
      "Companies Directory",
      "Responsive Design",
      "Loading States & Error Handling",
    ],

    challenges: [
      "Designing graph relationships between developers, skills, projects, technologies, and companies",
      "Writing efficient Cypher queries for recommendations",
      "Integrating Next.js frontend with Express.js REST APIs",
      "Handling server-side data fetching and loading states",
      "Deploying frontend and backend on Render free tier",
    ],

    gallery: [
      "/projects/skillgraph-ai/home.png",
      "/projects/skillgraph-ai/companies.png",
      "/projects/skillgraph-ai/developer.png",
      "/projects/skillgraph-ai/skills.png",
      "/projects/skillgraph-ai/technologies.png",
    ],
  },

  {
    slug: "musafir",

    title: "Musafir",
    featured: false,

    category: "Travel Tech",
    domain: "Travel",

    duration: "Jan 2026 - Apr 2026",

    client: "Mindpool Technologies Pvt. Ltd.",

    icon: "✈️",

    gradient: "from-sky-500 via-cyan-600 to-blue-700",

    overview:
      "Developed enterprise travel booking and expense management modules using React.js, TypeScript, Redux Toolkit, Material UI, and REST APIs.",

    problem:
      "Implemented scalable booking workflows, authentication, and reusable UI components for enterprise travel management.",

    role:
      "Developed reusable React components, integrated REST APIs, implemented JWT & OAuth authentication, performed code reviews, deployment, and production support.",

    solution:
      "Created reusable frontend architecture, optimized booking flows, and improved maintainability across multiple travel modules.",

    impact:
      "Enhanced development efficiency through reusable components and delivered enterprise features with improved performance.",

    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "REST API",
      "JWT",
      "OAuth",
      "Git",
      "Jira",
    ],

    features: [
      "Flight Booking",
      "Hotel Booking",
      "Expense Management",
      "Authentication",
      "Role Based Access",
      "Responsive Dashboard",
    ],

    challenges: [
      "Complex booking workflow",
      "Reusable architecture",
      "Authentication integration",
      "Performance optimization",
    ],
  },

  {
    slug: "newcleus",

    title: "Newcleus",
    featured: false,

    category: "Financial Services",
    domain: "Finance",

    duration: "2023 - 2025",

    client: "Data Template Infotech Pvt. Ltd.",

    icon: "💰",

    gradient: "from-emerald-500 via-green-600 to-teal-700",

    overview:
      "Developed enterprise financial dashboards, loan management modules, reports, and user management applications.",

    problem:
      "Users needed secure and scalable financial dashboards with filtering, reports, pagination, and role-based access.",

    role:
      "Built dashboards, reusable components, React Hook Form integration, search, filtering, pagination, and REST API integration.",

    solution:
      "Developed reusable dashboard architecture supporting server-side pagination and enterprise workflows.",

    impact:
      "Improved user productivity by providing fast and scalable financial management dashboards.",

    technologies: [
      "React.js",
      "JavaScript",
      "Material UI",
      "Redux",
      "React Hook Form",
      "REST API",
    ],

    features: [
      "Loan Dashboard",
      "Reports",
      "RBAC",
      "User Management",
      "Filtering",
      "Pagination",
    ],

    challenges: [
      "Large datasets",
      "Complex business logic",
      "Role permissions",
      "Reusable forms",
    ],
  },

  {
    slug: "whiteboard-chat",

    title: "Whiteboard.chat",
    featured: false,
    domain: "Collaboration",

    category: "Real-Time Collaboration",

    duration: "2022 - 2023",

    client: "Data Template Infotech Pvt. Ltd.",

    icon: "🎨",

    gradient: "from-violet-500 via-purple-600 to-indigo-700",

    overview:
      "Developed collaborative whiteboard functionality with real-time drawing, WebRTC communication, and synchronized canvas.",

    problem:
      "Users required real-time collaboration with synchronized drawing and low latency communication.",

    role:
      "Implemented collaborative drawing, optimized HTML5 Canvas rendering, integrated WebRTC, WebSockets, and Paper.js.",

    solution:
      "Optimized rendering and synchronization to provide smooth collaborative experiences.",

    impact:
      "Delivered responsive real-time collaboration supporting multiple simultaneous users.",

    technologies: [
      "React.js",
      "Redux",
      "WebRTC",
      "WebSockets",
      "Paper.js",
      "HTML5 Canvas",
    ],

    features: [
      "Live Drawing",
      "Real-Time Collaboration",
      "Video Calling",
      "Screen Sharing",
      "Canvas Tools",
    ],

    challenges: [
      "Canvas optimization",
      "Latency",
      "Real-time synchronization",
      "Rendering performance",
    ],
  },

  {
    slug: "capability-radar",

    title: "Capability Radar",
    featured: false,
    domain: "Analytics",

    category: "Analytics",

    duration: "2021 - 2022",

    client: "Data Template Infotech Pvt. Ltd.",

    icon: "📊",

    gradient: "from-orange-500 via-amber-600 to-red-600",

    overview:
      "Built interactive analytics dashboards using React.js and D3.js for technology capability visualization.",

    problem:
      "Business stakeholders required interactive visualization of capability data from CSV datasets.",

    role:
      "Developed reusable D3 radar visualizations, CSV transformation utilities, filtering, and responsive dashboards.",

    solution:
      "Created reusable data visualization architecture using D3.js integrated with React.",

    impact:
      "Enabled stakeholders to explore technology capabilities using interactive analytics dashboards.",

    technologies: [
      "React.js",
      "D3.js",
      "JavaScript",
      "CSV",
      "REST API",
    ],

    features: [
      "Radar Charts",
      "Analytics Dashboard",
      "CSV Import",
      "Interactive Tooltips",
      "Filtering",
    ],

    challenges: [
      "Complex D3 rendering",
      "CSV transformation",
      "Performance optimization",
      "Responsive visualization",
    ],
  },
];
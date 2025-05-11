export interface Project {
  title: string;
  slug: string;
  description: string;
  media: string;
  url: string;
  repo?: string;
  techStack: string[];
}

export const projects = [
  {
    title: "Westwood Course Advisor",
    slug: "westwood-course-advisor",
    description:
      "Designed and developed a 4-year course planning tool for high school students, enabling them to create personalized course plans while meeting graduation requirements. Integrated OpenAI API and Google Sheets for seamless data handling.",
    media: "/images/westwood-course-advisor.png",
    url: "https://westwoodcourseplanner.netlify.app/",
    repo: "https://github.com/nischalkotamraju/westwood-course-advisor/",
    techStack: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "JavaScript",
      "Webscraping",
      "JSON",
      "Axios",
      "OpenAI API",
      "Google Sheets API",
    ],
  },
  {
    title: "36, The #1 ACT Prep Tool",
    slug: "act-prep-tool",
    description:
      "Built an AI-driven ACT prep platform that automates practice question generation and provides personalized study tools. Features include AI-powered essay generation and real-time analytics to enhance student learning.",
    media: "/images/thirty-six.png",
    url: "https://thirtysix.netlify.app/",
    repo: "https://github.com/nischalkotamraju/act-prep-tool/",
    techStack: [
      "React.js",
      "TailwindCSS",
      "Webscraping",
      "OpenAI API",
      "Firebase",
      "Firestore",
      "Chart.js",
    ],
  },
  {
    title: "GenLink Volunteer Portal",
    slug: "genlink-volunteer-portal",
    description:
      "Developed an online tool for nonprofits to manage volunteer sign-ups, track hours, and organize events. The portal provides real-time updates and networking opportunities through an intuitive interface.",
    media: "/images/genlink.png",
    url: "https://genlinkaustin.netlify.app/",
    repo: "https://github.com/nischalkotamraju/genlink-volunteer-portal/",
    techStack: [
      "React.js",
      "TailwindCSS",
      "Firebase",
      "Firestore",
    ],
  },
  {
    title: "AI-Powered Stock Market Analysis",
    slug: "stock-market-analysis-app",
    description:
      "Created a stock market analysis tool that integrates with Yahoo Finance to provide AI-driven insights and consolidate company information. Streamlined the research process by eliminating the need to navigate multiple sources.",
    media: "/images/stock-market-analysis.png",
    url: "https://devpost.com/software/stock-market-ai-advisor?ref_content=user-portfolio&ref_feature=in_progress",
    repo: "https://github.com/nischalkotamraju/stock-market-analysis-app/",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "BeautifulSoup",
      "Yahoo Finance API",
      "OpenAI API",
    ],
  },
] as Project[];

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

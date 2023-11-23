export interface ProjectData {
  id: number;
  title: string;
  description: string;
  gitHubLink: string;
  hostingLink: string;
  imgPath: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Online Store",
    description: "React, Redux, Typescript, CSS Modules",
    gitHubLink: "https://github.com/nick722/clothing-store",
    hostingLink: "https://niks-clothing-store.netlify.app",
    imgPath: "/images/clothing-store-screenshot.avif",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "Next.js, React, Typescript",
    gitHubLink: "https://github.com/nick722/portfolio",
    hostingLink: "https://nikolai-iakushchenko.netlify.app/",
    imgPath: "/images/portfolio-screenshot.avif",
  },
  {
    id: 3,
    title: "Quotes Generator",
    description: "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgPath: "",
  },
  {
    id: 4,
    title: "Password Generator",
    description: "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgPath: "",
  },
  {
    id: 5,
    title: "Twitter UI Clone",
    description: "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgPath: "",
  },
];

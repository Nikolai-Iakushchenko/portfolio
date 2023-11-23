export interface ProjectData {
  id: number;
  title: string;
  description: string;
  gitHubLink: string;
  hostingLink: string
  imgLink: string
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Online Store",
    description:
      "React, Redux, Typescript, CSS Modules",
    gitHubLink: "https://github.com/nick722/clothing-store",
    hostingLink: "https://niks-clothing-store.netlify.app",
    imgLink: "/images/clothing-store-screenshot.avif"
  },
  {
    id: 2,
    title: "Books Library App",
    description:
      "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgLink: ""
  },
  {
    id: 3,
    title: "Quotes Generator",
    description:
      "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgLink: ""
  },
  {
    id: 4,
    title: "Password Generator",
    description:
      "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgLink: ""
  },
  {
    id: 5,
    title: "Twitter UI Clone",
    description:
      "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgLink: ""
  },
];

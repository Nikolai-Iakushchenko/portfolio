export interface ProjectData {
  id: number;
  title: string;
  description: string;
  gitHubLink: string;
  imgLink: string
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Online Store",
    description:
      "React, Redux, Typescript, CSS Modules",
    gitHubLink: "https://github.com/nick722/clothing-store",
    imgLink: "@/public/images/clothing-store-screenshot.avif"
  },
  {
    id: 2,
    title: "Books Library App",
    description:
      "Coming soon",
    gitHubLink: "",
    imgLink: ""
  },
  {
    id: 3,
    title: "Quotes Generator",
    description:
      "Coming soon",
    gitHubLink: "",
    imgLink: ""
  },
  {
    id: 4,
    title: "Password Generator",
    description:
      "Coming soon",
    gitHubLink: "",
    imgLink: ""
  },
  {
    id: 5,
    title: "Twitter UI Clone",
    description:
      "Coming soon",
    gitHubLink: "",
    imgLink: ""
  },
];

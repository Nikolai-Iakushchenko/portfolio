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
    id: 7,
    title: "Rock, Paper, Scissors Game",
    description: "React, Typescript",
    gitHubLink: "https://github.com/Nikolai-Iakushchenko/rock_paper_scissors",
    hostingLink: "https://niks-rock-paper-scissors.netlify.app/",
    imgPath: "/images/rock_paper_scissors.png",
  },
  {
    id: 6,
    title: "Online Store",
    description: "React, Redux, Typescript, CSS Modules",
    gitHubLink: "https://github.com/Nikolai-Iakushchenko/clothing-store",
    hostingLink: "https://niks-clothing-store.netlify.app",
    imgPath: "/images/clothing-store-screenshot.avif",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "Next.js, React, Typescript",
    gitHubLink: "https://github.com/Nikolai-Iakushchenko/portfolio",
    hostingLink: "https://nikolai-iakushchenko.netlify.app/",
    imgPath: "/images/portfolio-screenshot.avif",
  },
  {
    id: 4,
    title: "Vue Online Store",
    description: "Vue.js, Pinia, Typescript, REST API",
    gitHubLink: "https://github.com/Nikolai-Iakushchenko/vue-store",
    hostingLink: "https://niks-vue-store.netlify.app/",
    imgPath: "/images/vue-online-store.avif",
  },
  {
    id: 3,
    title: "Employee List",
    description: "Vue.js, Typescript",
    gitHubLink: "https://github.com/Nikolai-Iakushchenko/employee-list",
    hostingLink: "https://niks-employee-list.netlify.app",
    imgPath: "/images/employee-list-screenshot.avif",
  },
  {
    id: 2,
    title: "Twitter UI Clone",
    description: "Coming soon",
    gitHubLink: "",
    hostingLink: "",
    imgPath: "",
  }
];

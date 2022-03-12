import { Project } from "../types/interface";

export const projects: Project[] = [
  {
    title: "Spasora",
    logo: "/img/spasora.svg",
    details: `Spasora is a versatile marketplace to discover and book physical
          spaces for video production, photography, shortlet apartments, social
          events & more`,
    url: [{ type: "web", link: "https://spasora.com/" }],
    projectType: "project",
  },
  {
    title: "Go Sprint",
    logo: "/img/gosprint.svg",
    details: `Gosprint provides reliable and affordable transportation 
    services that targets individual customer satisfaction through tailor made packages that improve.`,
    url: [
      { type: "web", link: "https://gosprint.ng/" },
      { type: "mobile", link: "https://gosprint.ng/" },
    ],
    projectType: "project",
  },
];

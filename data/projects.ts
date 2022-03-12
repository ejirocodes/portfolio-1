import { Project } from "../types/interface";

export const projects: Project[] = [
  {
    title: "Spasora",
    logo: "/img/spasora.svg",
    details: `Spasora is a versatile marketplace to discover and book physical
          spaces for video production, photography, shortlet apartments, social
          events & more`,
    url: [{ type: "web", link: "https://spasora.com/" }],
    type: "project",
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
    type: "project",
  },
  {
    title: "Archub Africa",
    logo: "/img/archub.svg",
    details: `Archub is an online platform to showcase & discover creative
     work done by creatives. Use Archub to browse work by creative talent wherever you are.`,
    url: [
      //   { type: "web", link: "https://gosprint.ng/" },
      { type: "mobile", link: "https://apps.apple.com/by/app/id1537383357" },
    ],
    type: "project",
  },
  {
    title: "Dripkart",
    logo: "/img/dripkart.svg",
    details: `Dripkart brings you to a new collection of next-generation
    BattleKnit technology engineered shoes. Capturing all the glory of the 1971 original, the Stan Smith returns for the win.`,
    url: [{ type: "web", link: "https://dripkart.netlify.app" }],
    type: "project",
  },
  {
    title: "Joshua Jumbo",
    logo: "/img/josh.svg",
    details: `Joshua Jumbo is a Product Designer from Nigeria with industry and applicable ui/ux experience building products across the educational sector, e-commerce.`,
    url: [{ type: "web", link: "https://joshuajumbo.com/" }],
    type: "project",
  },
  {
    title: "Game of Thrones",
    logo: "/img/gots.svg",
    details: `Game of Thrones is an American fantasy drama television series
     created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire.`,
    url: [{ type: "web", link: "https://gots.netlify.app/" }],
    type: "project",
  },
  {
    title: "Ejiro Code",
    logo: "/img/ejiro.svg",
    details: `Frontend focused engineer with a passion for developing 
    premium web experiences through the lens of design thinking, web performance, accessibility, interaction`,
    url: [{ type: "web", link: "https://ejiro.dev/" }],
    type: "project",
  },
  {
    title: "Vue 3 Otp Input",
    logo: "/img/npm.svg",
    details: `A 5.0 KB fully customizable OTP (one-time password) input component for OTPs, transaction pins, and passwords built with Vue 3.x and Vue Composition API.`,
    url: [
      { type: "web", link: "https://www.npmjs.com/package/vue3-otp-input" },
    ],
    type: "open",
  },
  {
    title: "Vue 3 Touch Ripple",
    logo: "/img/npm.svg",
    details: `Touch ripple component for @vuejs 3.x.`,
    url: [
      { type: "web", link: "https://www.npmjs.com/package/vue3-touch-ripple" },
    ],
    type: "open",
  },
];

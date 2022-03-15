import LineHoriz from "../shared/LineHoriz";

export default function TechStack() {
  return (
    <section className="container-space md:my-[150px] my-[100px]">
      <div className="md:mb-[40px] mb-[25px]  tech-container">
        <span className="invisible flex">0</span>
        <h1 className="stroke-heading  md:w-1/2">
          <span className="stroke-text stroke">02.</span>
          <span className="md:text-[60px] text-[40px]">Tech Stack</span>
        </h1>
      </div>
      <LineHoriz />

      <div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title">Languages</h2>
            <p
              className="md:text-[22px]  text-[14px] md:w-[50%] md:pr-[20px]"
              aria-label="Ejiro Asiuwhu Programming Languages"
            >
              JavaScript(ES6+), TypeScript, HTML 5, CSS 3, SASS, Node.js,
              GraphQL.{" "}
            </p>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title">Others Stacks</h2>
            <p
              className="md:text-[22px]  text-[14px] md:w-[50%] md:pr-[20px] "
              aria-label="Ejiro Asiuwhu Programming Languages"
            >
              Vue 2 & Vue 3, React, NuxtJS, Next.js, Vue Composition API,
              Svelte, Tailwind CSS, Vite, Vuetify, Chakra-UI, Vuex, Vue Router,
              Express.js, Redux, NPM, Webpack, Parcel, Rollup Ionic, Capacitor,
              Firebase, Strapi, Git & GitHub, Netlify, Vercel.
            </p>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title">Productivity</h2>
            <p
              className="md:text-[22px]  text-[14px] md:w-[50%] md:pr-[20px] "
              aria-label="Ejiro Asiuwhu Programming Languages"
            >
              Slack, Trello, ClickUp, Asana, Notion, Dropbox, Google Apps.
            </p>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title">Others Stacks</h2>
            <p
              className="md:text-[22px]  text-[14px] md:w-[50%] md:pr-[20px] "
              aria-label="Ejiro Asiuwhu Programming Languages"
            >
              PWAs, Performance Optimization, Accessibility auditing, Version
              Control Systems, Advanced Component Design Patterns, CI (GitHub
              Actions), Responsive Web Design, Communication, Team Integration,
              Collaboration, Critical Thinking, Professionalism, Adaptability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import LineHoriz from "../shared/LineHoriz";

export default function About() {
  return (
    <section className="container-space md:my-[150px] my-20 contain-main">
      <div className="md:mb-[40px] mb-[25px]">
        <h1 className="stroke-heading">
          <span className="stroke-text stroke">01.</span>
          <span className="md:text-[60px] text-[40px]">About me</span>
        </h1>
      </div>
      <LineHoriz />
      <section
        className="grid grid-rows-1 md:gap-y-10 gap-y-[30px] gap-x-0 md:gap-x-[60px] md:grid-cols-2 grid-cols-1 md:grid-rows-2
      md:text-xl
      text-sm
      md:leading-[40px]
      leading-[24px]
      md:mt-[40px]
      mt-[30px]
      "
      >
        <p>
          Software Engineer with a drive for building highly scalable and
          performant web applications. Heavily interested in module federation,
          micro frontends, state machines, TDD, and system designs.
        </p>
        <p>
          Big on web performance and optimization, advanced component design
          patterns, A11y, SSR, and state management. Expert at crafting highly
          reusable Typescript-heavy component libraries. An advocate of
          TypeScript and industry best practices
        </p>
        <p>
          <strong>Core</strong>: TypeScript, JavaScript (React, Vue & Node.js{" "}
          <br /> Technologies and Languages used professionally: JavaScript,
          Typescript, GraphQL, React, Vue, Node, Redux
        </p>
        <p>
          Zustand, Vuex / Pinia, GraphQL, Next.js, NuxtJS, Tailwind CSS,
          Express, Nestjs, MongoDB, Vitest, Jest, Ionic / Capacitor, Firebase,
          AWS, Heroku, Netlify
        </p>
      </section>
    </section>
  );
}

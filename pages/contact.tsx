export default function Contact() {
  return (
    <section className="container-space">
      <div className="text-center max-w-[612px] w-full mx-auto lg:pt-[180px] md:pt-[100px] pt-[80px]  ">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-extrabold md:mb-[18px] mb-[8px] ">
          Let&#39;s build together
        </h1>
        <p className="lg:text-[22px] text-sm lg:leading-[35px] md:leading-[25px] leading-[15px] ">
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </p>
      </div>
      <form className="flex justify-between">
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="fullname"
              name="fullname"
              id="fullname"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="message">Messages</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Hello Ejiro, I would love to have a brief meeting with you to develop an engineering infrastructure for our products at my company. Please let me know when you are available."
          ></textarea>
        </div>
      </form>
    </section>
  );
}

import Newsletter from "../components/article/Newsletter";

export default function Contact() {
  return (
    <section className="container-space">
      <div className="text-center max-w-[612px] w-full mx-auto lg:pt-[180px] md:pt-[100px] pt-[80px]  lg:pb-[158px] md:pb-[80px] pb-[50px]  ">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-extrabold md:mb-[18px] mb-[8px] ">
          Let&#39;s build together
        </h1>
        <p className="lg:text-[22px] text-sm lg:leading-[35px] md:leading-[25px] leading-[15px] ">
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </p>
      </div>
      <form className="flex justify-between" autoComplete="off">
        <input type="hidden" name="_subject" value="Message from ejiro.dev" />
        <div className="flex flex-col ">
          <div className="flex flex-col lg:mb-[62px] md:mb-[42px] mb-[25px]  ">
            <label htmlFor="fullname " className="mb-[30px]">
              Full Name
            </label>
            <input
              required
              autoComplete="false"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your full name"
              className="border-b border-gray-200 pb-5 focus-visible:border-b focus-visible:border-dark focus-visible:border-solid active:border-dark active:border-b transition-colors "
            />
          </div>
          <div className="flex flex-col lg:mb-24">
            <label htmlFor="email" className="mb-[30px]">
              Email address
            </label>
            <input
              required
              autoComplete="false"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border-b border-gray-200 pb-5 focus-visible:border-b focus-visible:border-dark focus-visible:border-solid active:border-dark active:border-b transition-colors "
            />
          </div>
          <button
            className="btn10 hover-main md:h-auto h-[63px] group border border-solid border-gray2 text-white bg-dark hover:text-dark 
          hover:bg-white inline-flex items-center justify-center MD:font-bold  font-semibold text-[14px] w-full md:text-[19px] py-[28px] md:w-[305px] mx-auto"
          >
            <span className="mr-[12px]">Send message</span>
            <span>
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-[#111] transition-all"
                  d="M9.26717 7.82993L7.51275 1.28236L0.965173 3.03678M7.51275 1.28236L1.48828 11.717L7.51275 1.28236Z"
                  stroke="#ffffff"
                  strokeWidth="1.44609"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="message" className="mb-[30px]">
            Messages
          </label>
          <textarea
            required
            className="leading-[35px] border-b border-gray-200 pb-5 focus-visible:border-b focus-visible:border-dark focus-visible:border-solid active:border-dark active:border-b transition-colors "
            name="message"
            id="message"
            cols={50}
            rows={5}
            placeholder="Hello Ejiro, I would love to have a brief meeting with you to join the engineering team in my company. Please let me know when you are available."
          ></textarea>
        </div>
      </form>
      <div className="lg:mt-[150px] mt-[100px] lg:mb-[100px] mb-[100px]   ">
        <Newsletter />
      </div>
    </section>
  );
}

const Newsletter = () => {
  return (
    <section className="bg-[#FBFBFB] text-center md:px-[180px] px-[58px] md:pt-[105px] pt-[43px] pb-[48px] md:pb-[121px]">
      <h1 className="md:mb-[19px] mb-[6px] text-dark md:text-[42px] text-[20px] leading-[48px] font-bold ">
        Ejiro Asiuhwu&apos;s Newsletter
      </h1>
      <p className="md:mb-[57px] mb-[30px] text-gray5 md:text-[22px] text-[10px] leading-[16px] md:leading-[35px]">
        A monthly newsletter where I share resources around Tech,
        <br />
        Career and Lifestyle. No spam, unsubscribe at any time.
      </p>
      <form className="flex items-center justify-center md:h-[87px] h-[40px] md:mb-[60px] mb-[40px]">
        <input
          required
          type="email"
          className="w-full placeholder:text-gray5 placeholder:text-[10px] md:placeholder:text-[20px] h-full border border-solid border-r-0 border-gray2 pl-[40px]"
          placeholder="Your email address..."
        />
        <button
          type="submit"
          className="bg-dark h-full w-[68px]  md:w-[102px] group flex items-center justify-center focus:bg-slate-800 active:bg-slate-900 "
        >
          <svg
            className="group-hover:translate-x-2 md:w-full w-[10px] transition-all duration-300 ease-[cubic-bezier(.32,2,.55,.27)]"
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5707 1.68932L25.5718 11.6904L15.5707 21.6914M0.427734 11.6904L25.5718 11.6904L0.427734 11.6904Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </form>
      <p className="text-gray5 md:text-[20px] text-[10px]">
        By subscribing, you agree with Revue’s Terms of Service and Privacy
        Policy.
      </p>
    </section>
  );
};

export default Newsletter;

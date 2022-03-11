const Newsletter = () => {
  return (
    <section className="bg-[#FBFBFB] text-center px-[180px] pt-[105px] pb-[121px]">
      <h1 className="mb-[19px] text-dark text-[42px] leading-[48px] font-bold ">
        Ejiro Asiuhwu&apos;s Newsletter
      </h1>
      <p className="md:mb-[57px] text-gray5 text-[22px] leading-[35px]">
        A monthly newsletter where I share resources around Tech,
        <br />
        Career and Lifestyle. No spam, unsubscribe at any time.
      </p>
      <div className="flex items-center justify-center h-[87px] md:mb-[60px]">
        <input
          type="text"
          className="w-full placeholder:text-gray5 h-full border border-solid border-r-0 border-gray2 pl-[40px]"
          placeholder="Your email address..."
        />
        <button className="bg-dark h-full w-[102px] flex items-center justify-center">
          <svg
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
      </div>
      <p className="text-gray5 font-[20px]">
        By subscribing, you agree with Revue’s Terms of Service and Privacy
        Policy.
      </p>
    </section>
  );
};

export default Newsletter;

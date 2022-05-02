import socials from "../../data/social.json";

export const Footer = () => {
  return (
    <footer className=" text-gray3 border-gray2 container-space md:pb-[100px] pb-[50px]">
      <ul className="flex items-center justify-center">
        {socials.map((social) => (
          <li key={social.title} className="md:mr-[60px] mr-[20px] last:mr-0">
            <a
              href={social.url}
              aria-label={social.arialLabel}
              target="_blank"
              rel="noopener noreferrer"
              className=" md:text-[18px] text-[10px] text-dark font-extrabold"
            >
              {social.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="pt-[10px] pb-[20px] text-center md:text-[20px] text-[10px] text-gray4">
        Connect with me{" "}
        <a href="mailto:ejiroasiuwhu10@gmail.com " className="underline">
          ejiroasiuwhu10@gmail.com
        </a>
      </p>
      <div className="border-t border-solid font-medium md:text-[16px] text-[8px] flex items-center justify-between md:pt-[50px]  pt-[10px]   ">
        <div>
          <p
            aria-label="Augustine Asiuwhu - Product Designer"
            className="flex items-center"
          >
            Design with
            <a
              className=" inline-flex md:w-[15px] w-[8px] mx-[6px] cursor-pointer"
              href="https://www.linkedin.com/in/augustine-asiuwhu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-[1.7] transition-all "
              >
                <path
                  className="hover:fill-red-500 hover:stroke-red-500 transition-all "
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.086 0.52832C11.8928 0.52832 10.7503 1.01085 9.91833 1.86617L9.26551 2.53925L8.60638 1.86617C7.77445 1.01087 6.63199 0.52832 5.43882 0.52832C4.24565 0.52832 3.10319 1.01087 2.27126 1.86617C0.524165 3.66867 0.524165 6.53279 2.27126 8.33528L9.26551 15.4708L16.2535 8.33528C18.0005 6.53279 18.0005 3.66867 16.2535 1.86617C15.4215 1.01089 14.2791 0.52832 13.086 0.52832Z"
                  fill="#999999"
                  stroke="#999999"
                  strokeWidth="0.830142"
                  strokeLinecap="square"
                />
              </svg>
            </a>
            <span>
              by{" "}
              <a
                href="https://www.linkedin.com/in/augustine-asiuwhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                aria-label="Augustine Asiuwhu on LinkedIn"
              >
                Augustine
              </a>
            </span>
          </p>
        </div>

        <small className="md:text-[16px] text-[8px]">
          &copy;{new Date().getFullYear()} - All rights reserved
        </small>
      </div>
    </footer>
  );
};

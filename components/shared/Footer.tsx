import { socials } from "../../data/social";

export const Footer = () => {
  return (
    <footer className=" text-gray3 md:px-[90px] border-gray2 ">
      <div className="border-t border-solid flex items-center justify-between pt-[50px]  pb-[84px] ">
        <small className=" text-[20px] font-medium">
          ©{new Date().getFullYear()} - All rights reserved
        </small>
        <ul className="flex items-center">
          {socials.map((social) => (
            <li key={social.title}>
              <a
                href={social.url}
                aria-label={social.arialLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-[60px] text-dark font-extrabold"
              >
                {social.title}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <p
            aria-label="Augustine Asiuwhu - Product Designer"
            className="flex items-center text-[20px] font-medium"
          >
            Design with
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-[10px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.086 0.52832C11.8928 0.52832 10.7503 1.01085 9.91833 1.86617L9.26551 2.53925L8.60638 1.86617C7.77445 1.01087 6.63199 0.52832 5.43882 0.52832C4.24565 0.52832 3.10319 1.01087 2.27126 1.86617C0.524165 3.66867 0.524165 6.53279 2.27126 8.33528L9.26551 15.4708L16.2535 8.33528C18.0005 6.53279 18.0005 3.66867 16.2535 1.86617C15.4215 1.01089 14.2791 0.52832 13.086 0.52832Z"
                fill="#999999"
                stroke="#999999"
                strokeWidth="0.830142"
                strokeLinecap="square"
              />
            </svg>
            <span>
              by{" "}
              <a
                href="https://www.linkedin.com/in/augustine-asiuwhu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Augustine Asiuwhu on LinkedIn"
              >
                Augustine
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

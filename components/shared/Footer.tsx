export const Footer = () => {
  const socials = [
    {
      title: "TW",
      url: "https://twitter.com/ejirocodes",
      arialLabel: "Ejiro on Twitter",
    },
    {
      title: "GH",
      url: "https://github.com/ejirocodes",
      arialLabel: "Ejiro on GitHub",
    },
    {
      title: "LN",
      url: "https://www.linkedin.com/in/ejiro-asiuhwu",
      arialLabel: "Ejiro on LinkedIn",
    },
    {
      title: "MD",
      url: "https://www.medium.com/ejirocodes",
      arialLabel: "Ejiro on Medium",
    },
    {
      title: "YT",
      url: "https://www.youtube.com/channel/UC-exh_bsmkGKuPdr8a_Q8Ng",
      arialLabel: "Ejiro on YouTube",
    },
  ];

  return (
    <footer className="flex items-center justify-between md:px-[90px]">
      <small>©{new Date().getFullYear()} - All rights reserved</small>
      <ul className="flex items-center">
        {socials.map((social) => (
          <li key={social.title}>
            <a
              href={social.url}
              aria-label={social.arialLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-[60px]"
            >
              {social.title}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <p aria-label="Augustine Asiuwhu - Product Designer">
          Design with
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
          by Augustine
        </p>
      </div>
    </footer>
  );
};

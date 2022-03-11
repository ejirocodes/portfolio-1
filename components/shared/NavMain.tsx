import Link from "next/link";

export const NavMain = () => {
  return (
    <nav className="flex items-center justify-between bg-[#F8F8F8] h-[100px]">
      <div className="flex items-center">
        <Link href="/">
          <a title="Ejiro Asiuwhu" className="mr-[7.17px]">
            <svg
              width="19"
              height="27"
              viewBox="0 0 19 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4159 11.5772L12.3361 0.0533447L0.170898 15.4229H7.85568L5.93549 26.9467L18.1021 11.5772H10.4159Z"
                fill="#666666"
              />
            </svg>
          </a>
        </Link>
        <p>EjiroCode</p>
      </div>
      <div>
        <ul className="flex items-center justify-center">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About me</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>Works</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

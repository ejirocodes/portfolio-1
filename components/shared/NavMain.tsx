import Link from "next/link";
import { useRouter } from "next/router";

export const NavMain = () => {
  const router = useRouter();

  const navigations = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About me",
      url: "/about",
    },
    {
      title: "Articles",
      url: "/articles",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Works",
      url: "/works",
    },
  ];

  return (
    <nav className="flex items-center justify-between bg-[#F8F8F8] h-[100px]">
      <div className="flex items-center">
        <Link href="/">
          <a title="Ejiro Asiuwhu" className=" flex items-center">
            <svg
              className="mr-[8px]"
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
            <p className="font-extrabold text-[28px]">EjiroCode</p>
          </a>
        </Link>
      </div>
      <div className="h-full">
        <ul className="flex items-center justify-center h-full">
          {navigations.map((navigation) => (
            <li key={navigation.title} className="h-full">
              <Link href={navigation.url}>
                <a
                  className={
                    router.asPath === navigation.url
                      ? "active-link"
                      : "text-dark h-full w-[177px] flex items-center justify-center font-['NeueMachina']"
                  }
                >
                  {navigation.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

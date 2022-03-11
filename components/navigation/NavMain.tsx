import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const NavMain = () => {
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
  const router = useRouter();

  const [navStyle, setNavStyle] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const windowScroll = window.pageYOffset;
      if (windowScroll > 100) {
        setNavStyle(true);
      } else {
        setNavStyle(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, [navStyle]);

  return (
    <nav
      className={`flex items-center w-full bg-[#ffffff] fixed transition-all ease-linear top-0 z-20 justify-between px-[50px] h-[100px] border-b border-b-gray3

      ${
        navStyle ? "active-nav" : "backdrop-saturate-[100%] backdrop-blur-[0px]"
      }
     `}
    >
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
            <p className="font-extrabold text-[28px] font-['NeueMachina']">
              EjiroCode
            </p>
          </a>
        </Link>
      </div>
      <div className="flex justify-center h-full">
        <div className="h-full">
          <ul className="flex items-center justify-center h-full">
            {navigations.map((navigation) => (
              <li key={navigation.title} className="h-full">
                <Link href={navigation.url}>
                  <a
                    className={`text-dark border-r border-r-gray3 h-full w-[177px] flex items-center justify-center font-['NeueMachina'] hover:bg-[#FBFBFB] hover:text-dark transition ease-in-out duration-300 
                    ${router.pathname === navigation.url && "active-link"}
                    `}
                  >
                    {/* router.asPath === navigation.url
                        ? "active-link "
                        : "" */}
                    {navigation.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="inline-flex items-end justify-center flex-col pl-[50px] ">
          <span className="bg-dark w-[57px] mb-[8px] h-[3px] inline-flex"></span>
          <span className="bg-dark w-[35px] h-[3px] inline-flex"></span>
        </button>
      </div>
    </nav>
  );
};

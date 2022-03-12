import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import NavOpen from "./NavOpen";
import { useNav, useNavUpdate, NavContext } from "../../context/navContext";

export const NavMain = () => {
  const navigations = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Work",
      url: "/work",
    },
    {
      title: "Articles",
      url: "/articles",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  const router = useRouter();

  const [navStyle, setNavStyle] = useState(false);
  // const [isNav, setIsNav] = useState(false);
  // const nav = useContext(NavContext);

  const isNav = useNav();
  const toggleNav = useNavUpdate();

  // const toggleNav = () => {
  //   setIsNav((prev) => !prev);
  // };

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
    <>
      {isNav && <NavOpen />}
      <nav
        className={`flex items-center w-full bg-[#ffffff] fixed transition-all ease-linear top-0 z-20 justify-between px-[50px] h-[100px] border-b border-b-gray3

      ${
        navStyle ? "active-nav" : "backdrop-saturate-[100%] backdrop-blur-[0px]"
      }
     `}
      >
        <div className="flex items-center">
          <Logo url="/" />
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

          <button
            className="inline-flex items-end justify-center flex-col pl-[50px] "
            onClick={() => {
              toggleNav(true);
            }}

            // onClick={toggleNav}
          >
            <span
              className={`bg-dark w-[57px] mb-[8px] h-[3px] inline-flex

              transition ease-in-out duration-300 -rotate-45
              !mb-0
              !w-[35px]
              absolute
              z-50
              `}
              // ${isNav ? "active-nav" : ""}
            ></span>
            <span
              className={`bg-dark w-[35px] h-[3px] inline-flex
             
              !w-[35px]
              z-50

                          transition ease-in-out duration-300 rotate-45

            
            `}
            ></span>
          </button>
        </div>
      </nav>
    </>
  );
};

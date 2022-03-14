import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import NavOpen from "./NavOpen";
import { useNav, useNavUpdate } from "../../context/navContext";

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
  const isNav = useNav();
  const toggleNav = useNavUpdate();

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
      {/* {isNav && <NavOpen />} */}
      <nav
        aria-label="Main menu"
        className={`flex  items-center  h-[100px] opacity-100 w-full bg-[#ffffff] fixed transition-all ease-linear top-0 z-20 justify-between pl-[50px] border-b border-b-gray3

      ${
        navStyle ? "active-nav" : "backdrop-saturate-[100%] backdrop-blur-[0px]"
      }
      ${isNav ? " !h-screen !w-screen " : ""}
      `}
      >
        <div
          className={`flex  items-center  justify-between w-full  h-[100px] 

        ${isNav ? "!items-start !h-full pl-[50px] pt-[36px]" : ""}
        
        `}
        >
          <div className="flex items-center">
            <Logo url="/" />
          </div>

          <div className="flex justify-center h-full">
            <div
              className={`h-full
              ${isNav ? "opacity-0 !h-0" : ""}
            
            `}
            >
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
              aria-controls="main-menu"
              aria-label="Open main menu"
              role="navigation"
              className="inline-flex cursor-pointer items-end justify-center flex-col px-[50px] min-w-[157px] "
              onClick={() => {
                toggleNav();
              }}
            >
              <span
                className={`bg-dark w-[57px] mb-[8px] h-[3px] inline-flex
              
              ${
                isNav
                  ? `transition ease-in-out duration-300 -rotate-45  z-50   !mb-0
              !w-[35px]
              absolute          `
                  : ""
              }
              `}
              ></span>
              <span
                className={`bg-dark w-[35px] h-[3px] inline-flex

                          ${
                            isNav
                              ? `   
                              !w-[35px]
                              z-50 transition ease-in-out duration-300 rotate-45`
                              : ""
                          }
            
            `}
              ></span>
            </button>
          </div>
        </div>
      </nav>
      {/* <NavOpen /> */}
    </>
  );
};

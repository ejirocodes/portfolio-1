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

  const navigation2 = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Work",
      url: "/work",
    },
    {
      title: "Résumé",
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
        id="main-menu"
        className={`flex  items-center  h-[100px] opacity-100 w-full bg-[#ffffff] fixed transition-all ease-linear top-0 z-20 justify-between pl-[50px] border-b border-b-gray3

      ${
        navStyle ? "active-nav" : "backdrop-saturate-[100%] backdrop-blur-[0px]"
      }
      ${isNav ? " !h-screen !w-screen !pl-[107px] !border-0" : ""}
      `}
      >
        <div
          className={`flex  items-center  justify-between w-full  h-[100px] 

        ${isNav ? "!items-start !h-full  pt-[36px]" : ""}
        
        `}
        >
          <div className="flex items-center">
            <Logo url="/" />
          </div>

          <section
            className={`${
              isNav
                ? "opacity-100 pt-[77px] "
                : "opacity-0 h-0 transition-all w-0"
            }`}
          >
            <ul className="flex items-center flex-col justify-center h-full">
              {navigation2.map((navigation) => (
                <li key={navigation.title} className="h-full">
                  <Link href={navigation.url}>
                    <a
                      onClick={() => {
                        toggleNav(false);
                      }}
                      className={`text-gray2 font-extrabold leading-none text-[130px] mb-[20px] flex items-center justify-center font-['NeueMachina'] transition ease-in-out duration-300 
                    ${router.pathname === navigation.url && "!text-dark"}
                    `}
                    >
                      {navigation.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div
            className={`flex justify-center h-full
          ${isNav ? "!h-auto items-center" : ""}
          `}
          >
            <div
              className={`h-full
              ${isNav ? "opacity-0 !h-0 hidden" : ""}
            
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
                        {navigation.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* {isNav && ( */}

            {/* )} */}

            <button
              className={`uppercase text-[24px] font-bold 
              ${
                !isNav
                  ? "!opacity-0 !h-0"
                  : "transition-all flex !justify-start pr-[12px]"
              }
              `}
              onClick={() => {
                toggleNav(false);
              }}
            >
              Close
            </button>

            <button
              aria-controls="main-menu"
              aria-label={isNav ? "Close menu" : "Open menu"}
              role="navigation"
              className={`inline-flex cursor-pointer items-end transition-all justify-center flex-col px-[50px] min-w-[157px] 
              ${isNav ? "   !justify-start !pl-0 min-w-[auto] !pr-[107px]" : ""}
              `}
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
              absolute       `
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

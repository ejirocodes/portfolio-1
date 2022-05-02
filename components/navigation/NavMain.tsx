import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import NavOpen from "./NavOpen";
import { useNav, useNavUpdate } from "../../context/navContext";
import socials from "../../data/social.json";

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
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isNav) {
        console.log("esc");
        // toggleNav(false);
      }
    });
    const onScroll = () => {
      const windowScroll = window.pageYOffset;
      if (windowScroll > 100) {
        setNavStyle(true);
      } else {
        setNavStyle(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, [navStyle, isNav]);

  return (
    <>
      {/* {isNav && <NavOpen />} */}
      <nav
        aria-label="Main menu"
        id="main-menu"
        className={`flex  items-center  md:h-[100px] h-[70px] opacity-100 w-full bg-[#ffffff] fixed transition-all ease-linear top-0 z-20 justify-between md:pl-[50px] pl-[35px] border-b border-b-gray3

      ${
        navStyle ? "active-nav" : "backdrop-saturate-[100%] backdrop-blur-[0px]"
      }
      ${isNav ? " !h-screen !w-screen !pl-[50px] !border-0" : ""}
      `}
      >
        <div
          className={`flex  items-center  justify-between w-full md:h-[100px] h-[70px]

        ${isNav ? "!items-start !h-full  pt-[36px] w-full" : ""}
        
        `}
        >
          <div className="flex items-center">
            <Logo url="/" />
          </div>

          <section
            className={`${
              isNav
                ? "opacity-100 pt-[77px] w-full"
                : "opacity-0  transition-all hidden"
            }`}
          >
            <ul className="flex items-center flex-col justify-center h-full">
              {navigation2.map((navigation) => (
                <li key={navigation.title} className="h-full">
                  <Link href={navigation.url}>
                    <a
                      onClick={() => {
                        // @ts-ignore

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
            <ul className="flex items-center justify-center border-t border-gray2 py-[66px]  ">
              {socials.map((social) => (
                <li key={social.title}>
                  <a
                    href={social.url}
                    aria-label={social.arialLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[60px] text-gray2 font-extrabold text-[27px]"
                  >
                    {social.title}
                  </a>
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
              <ul className="md:flex hidden items-center justify-center h-full">
                {navigations.map((navigation) => (
                  <li key={navigation.title} className="h-full">
                    <Link href={navigation.url}>
                      <a
                        title={navigation.title}
                        className={`text-dark border-r border-r-gray3 h-full xl:w-[177px] lg:w-[140px] md:w-[120px] flex items-center justify-center font-['NeueMachina'] hover:bg-[#FBFBFB] hover:text-dark transition ease-in-out duration-300 
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

            {/* <button
              className={`uppercase text-[24px] font-bold 
              ${
                !isNav
                  ? "!opacity-0 !h-0"
                  : "transition-all flex !justify-start pr-[12px]"
              }
              `}
              onClick={() => {
                // @ts-ignore

                toggleNav(false);
              }}
            >
              Close
            </button> */}

            <button
              aria-controls="main-menu"
              aria-label={isNav ? "Close menu" : "Open menu"}
              role="navigation"
              className={`inline-flex cursor-pointer items-end transition-all md:bg-transparent bg-dark justify-center flex-col md:px-[50px] px-[35px]  md:min-w-[157px] md:w-[157px] w-[94px] 
              ${
                isNav
                  ? " mt-[20px]   !justify-start !pl-0 min-w-[auto] !pr-[50px]"
                  : ""
              }
              `}
              onClick={() => {
                // @ts-ignore

                toggleNav();
              }}
            >
              {/* <div> */}
              <span
                className={`md:bg-dark bg-white md:w-[57px] w-[24px] mb-[8px] h-[3px] inline-flex
              
              ${
                isNav
                  ? `transition ease-in-out duration-300 -rotate-45  z-50 !mb-0
              !w-[35px]
              absolute       `
                  : ""
              }
              `}
              ></span>
              <span
                className={`md:bg-dark bg-white md:w-[35px] w-[14px] h-[3px] inline-flex

                          ${
                            isNav
                              ? `   
                              !w-[35px]
                              z-50 transition ease-in-out duration-300 rotate-45`
                              : ""
                          }
            
            `}
              ></span>
              {/* </div> */}
            </button>
          </div>
        </div>
      </nav>
      {/* <NavOpen /> */}
    </>
  );
};

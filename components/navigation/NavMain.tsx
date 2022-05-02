import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState, Fragment } from "react";
import Logo from "./Logo";
import NavOpen from "./NavOpen";
import { useNav, useNavUpdate } from "../../context/navContext";
import socials from "../../data/social.json";
import MobileNavOpen from "./MobileNavOpen";
import { Dialog, Transition } from "@headlessui/react";

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
  const [isOpen, setIsOpen] = useState(false);

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

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleNavigation() {
    if (window.innerWidth > 768) {
      // @ts-ignore
      return toggleNav();
    }
    openModal();
  }
  return (
    <>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-end  text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[85vw] flex flex-col justify-between transform overflow-hidden h-screen bg-white text-left align-middle shadow-xl transition-all">
                    {/* <div className="flex flex-col justify-end items-end"> */}

                    <section>
                      <div className="flex items-end justify-end p-7">
                        <button onClick={closeModal} title="Close navigation">
                          <img src="/img/close.svg" alt="Close" />
                        </button>
                      </div>
                      <div className="mt-[70px] pl-[48px]">
                        <ul className="flex flex-col justify-center h-full">
                          {navigations.map((navigation) => (
                            <li key={navigation.title} className="h-full">
                              <Link href={navigation.url}>
                                <a
                                  onClick={() => {
                                    // @ts-ignore

                                    toggleNav(false);
                                  }}
                                  className={`text-gray2 font-extrabold leading-none text-[50px] mb-[20px] flex font-['NeueMachina'] transition ease-in-out duration-300 
                    ${router.pathname === navigation.url && "!text-dark"}
                    `}
                                >
                                  {navigation.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>

                    <div className="">
                      <ul className="flex items-center py-10 pl-[48px] border-gray3 border-t-[0.3px] ">
                        {socials.map((social) => (
                          <li key={social.title}>
                            <a
                              href={social.url}
                              aria-label={social.arialLabel}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mr-[20px] text-gray2 font-extrabold text-[16px]"
                            >
                              {social.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      {/* <MobileNavOpen /> */}
      {/* {isNav && <NavOpen />} */}
      <nav
        aria-label="Main menu"
        id="main-menu"
        className={`flex items-center md:shadow-none drop-shadow-[0_10px_104px_rgba(0,0,0,0.25)] md:h-[100px] h-[70px] opacity-100 w-full bg-[#ffffff] fixed transition-all ease-linear top-0 z-20 justify-between md:pl-[50px] pl-[35px] md:border-b border-b-gray3

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
              onClick={handleNavigation}
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

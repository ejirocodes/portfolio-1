import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  NavUpdateContext,
  useNav,
  useNavUpdate,
} from "../../context/navContext";
import { socials } from "../../data/social";
import Logo from "./Logo";

const NavOpen = () => {
  const router = useRouter();
  const isNav = useNav();

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
      title: "Résumé",
      url: "/articles",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  const toggleNav = useContext(NavUpdateContext);

  return (
    <>
      {/* {isNav && ( */}
      <nav
        id="Main menu"
        className={`bg-white w-0 h-0 fixed top-0 z-30 opacity-0 transition-all ease-linear 
        
        ${isNav ? "!opacity-100 !h-screen !w-screen" : ""}
        `}
      >
        <section className="flex items-center justify-between px-[107px] pt-[78px]">
          <Logo url="/" />
          <div>
            <button
              className="uppercase text-[24px] font-bold "
              onClick={() => {
                toggleNav(false);
              }}
            >
              Close
            </button>
          </div>
        </section>
        <section>
          <ul className="flex items-center flex-col justify-center h-full">
            {navigations.map((navigation) => (
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
        <section className="mt-[100px]">
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
      </nav>
      {/* )} */}
    </>
  );
};

export default NavOpen;

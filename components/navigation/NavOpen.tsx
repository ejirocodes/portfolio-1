import Link from "next/link";
import { useRouter } from "next/router";
import { socials } from "../../data/social";
import Logo from "./Logo";

const NavOpen = () => {
  const router = useRouter();

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

  return (
    <nav className="bg-slate-100 w-screen h-screen">
      <section className="flex items-center justify-between px-[107px] pt-[100px]">
        <Logo url="" />
        <div>
          <button className="uppercase text-[24px] font-bold ">Close</button>
        </div>
      </section>
      <section>
        <ul className="flex items-center flex-col justify-center h-full">
          {navigations.map((navigation) => (
            <li key={navigation.title} className="h-full">
              <Link href={navigation.url}>
                <a
                  className={`text-gray2 font-extrabold leading-none text-[130px] mb-[20px] flex items-center justify-center font-['NeueMachina'] transition ease-in-out duration-300 
                    ${router.pathname === navigation.url && "!text-dark"}
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
      </section>
      <section className="mt-[]">
        <ul className="flex items-center justify-center">
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
  );
};

export default NavOpen;

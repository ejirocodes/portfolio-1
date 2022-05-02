import Link from "next/link";

// @ts-ignore
const Logo = ({ url }) => {
  return (
    <div>
      <Link href={url}>
        <a title="Ejiro Asiuwhu" className="flex items-center">
          <svg
            className="md:mr-[8px] mr-[4px] md:w-[16px] w-[8px] h-[12px] md:h-[24px] sm:w-[12px] sm:h-[20px]"
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
          <p className="font-extrabold md:text-[28px] sm:text-xl text-base font-['NeueMachina']">
            EjiroCode
          </p>
        </a>
      </Link>
    </div>
  );
};
export default Logo;

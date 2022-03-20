import Link from "next/link";

            // @ts-ignore
const Logo = ({ url }) => {
  return (
    <div>
      <Link href={url}>
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
  );
};
export default Logo;

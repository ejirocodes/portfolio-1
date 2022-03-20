import Marquee from "react-fast-marquee";

function TextHoriz1() {
  return (
    <div className="flex items-center stroke-text ">
      <svg
        className="md:w-[58px] w-[30px]"
        height="83"
        viewBox="0 0 58 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.7843 35.7693L38.5637 1.08427L1.94824 47.3444H25.0783L19.2988 82.0294L55.9184 35.7693H32.7843Z"
          stroke="#111111"
          strokeWidth="1.78744"
          strokeLinecap="square"
        />
      </svg>
      <h1 className="marque-title">Code Lord</h1>
    </div>
  );
}
function TextHoriz2() {
  return (
    <div className="flex items-center md:mx-0  mx-[20px]">
      <svg
        className="md:w-[58px] w-[30px]"
        height="83"
        viewBox="0 0 59 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.6505 35.7693L39.4299 1.08427L2.81445 47.3444H25.9445L20.165 82.0294L56.7846 35.7693H33.6505Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="1.78744"
          strokeLinecap="square"
        />
      </svg>
      <h1 className="marque-title">Code Lord</h1>
    </div>
  );
}
export default function TextHoriz() {
  return (
    <section className="md:text-[100px] relative text-[40px] font-NeueMachina flex items-center justify-center ">
      <Marquee pauseOnHover={true} speed={50}>
        <div className="flex w-full justify-around items-center">
          <TextHoriz1 />
          <TextHoriz2 />
        </div>
      </Marquee>
    </section>
  );
}

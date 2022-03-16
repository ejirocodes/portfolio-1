export default function Quote() {
  return (
    <section className="bg-hero-quote w-full bg-cover md:h-[670px] h-[289px] bg-no-repeat md:bg-top bg-left flex items-center justify-end">
      <div className="md:w-5/12 w-1/2 md:pr-[50px]">
        <p className="md:text-[50px] text-[20px] font-extrabold mb-5 ">
          “In order to be irreplaceable, one must always be different”
        </p>
        <p className="md:text-[32px] text-[14px] italic md:mb-[65px] mb-[5px] ">
          This is my philosophy
        </p>
        <p className="md:text-[20px] text-[10px] italic">- Coco Chanel</p>
      </div>
    </section>
  );
}

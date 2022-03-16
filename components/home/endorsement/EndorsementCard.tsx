import React from "react";

export default function EndorsementCard({ endorsement }) {
  return (
    <figure className="bg-[#F7F7F7] md:text-[14px] text-[12px] flex flex-col justify-between md:py-[30px] md:px-[38px] p-[20px] md:w-[509px] w-[321px]  md:h-[280px] h-full md:min-h-auto min-h-[220px]">
      <figcaption className="md:mb-[30px] mb-[20px]  md:leading-[26px] leading-[18px]">
        {endorsement.body}
      </figcaption>
      <div className="flex justify-between">
        <figcaption>
          <p className="font-extrabold mb-[5px] "> {endorsement.name}</p>
          <p>{endorsement.position}</p>
        </figcaption>
        <div>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3894 15.4501H12.7821V11.3655C12.7821 10.3917 12.7645 9.1376 11.4258 9.1376C10.0678 9.1376 9.85987 10.1986 9.85987 11.294V15.4498H7.2526V7.05245H9.75556V8.20018H9.78932C10.0399 7.77185 10.4019 7.4195 10.8368 7.18065C11.2718 6.9418 11.7633 6.82539 12.2592 6.84383C14.9019 6.84383 15.3894 8.5823 15.3894 10.8437V15.4501ZM4.31047 5.90438C4.01116 5.90445 3.71855 5.81575 3.46966 5.6495C3.22076 5.48326 3.02675 5.24693 2.91216 4.97042C2.79757 4.6939 2.76756 4.38961 2.82591 4.09604C2.88426 3.80246 3.02836 3.53278 3.23998 3.32111C3.4516 3.10943 3.72123 2.96527 4.01478 2.90685C4.30834 2.84843 4.61262 2.87838 4.88915 2.99291C5.16568 3.10744 5.40204 3.3014 5.56834 3.55027C5.73463 3.79914 5.82339 4.09174 5.82339 4.39106C5.82339 4.79236 5.664 5.17723 5.38028 5.46102C5.09657 5.74481 4.71175 5.90429 4.31047 5.90438ZM5.6141 15.4498H3.00413V7.05245H5.61444L5.6141 15.4498ZM16.6879 0.45671H1.69374C1.52507 0.45466 1.35764 0.485901 1.20106 0.548646C1.04447 0.611391 0.9018 0.704407 0.78121 0.822368C0.66062 0.940329 0.564481 1.08092 0.498296 1.23609C0.432112 1.39125 0.397182 1.55795 0.395508 1.72664V16.7822C0.399514 17.1227 0.538529 17.4477 0.782015 17.6859C1.0255 17.924 1.35354 18.0557 1.69408 18.0521H16.6879C17.0294 18.0567 17.3586 17.9255 17.6034 17.6873C17.8481 17.4492 17.9882 17.1236 17.9929 16.7822V1.72394C17.988 1.38271 17.8478 1.05739 17.6031 0.819547C17.3583 0.581708 17.0291 0.450828 16.6879 0.455698"
              fill="#111111"
            />
          </svg>
        </div>
      </div>
    </figure>
  );
}

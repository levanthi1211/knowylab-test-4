import { FC } from "react";
import { IconProps } from "./type";

export const MyDevelopmentIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="path-1-inside-1_6_119" fill="#1576bc">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.762695 -0.762085V26.3135C0.762695 27.6191 1.28137 28.8713 2.20463 29.7945C3.12789 30.7177 4.38009 31.2363 5.68577 31.2363H32.7627"
          fill="red"
        />
      </mask>
      <path
        d="M3.1627 -0.762085C3.1627 -2.08757 2.08818 -3.16209 0.762695 -3.16209C-0.562788 -3.16209 -1.6373 -2.08757 -1.6373 -0.762085H3.1627ZM0.762695 26.3135L-1.6373 26.3135L0.762695 26.3135ZM32.7627 33.6363C34.0882 33.6363 35.1627 32.5618 35.1627 31.2363C35.1627 29.9109 34.0882 28.8363 32.7627 28.8363V33.6363ZM-1.6373 -0.762085V26.3135H3.1627V-0.762085H-1.6373ZM-1.6373 26.3135C-1.6373 28.2557 -0.86574 30.1183 0.507616 31.4916L3.90165 28.0974C3.42849 27.6242 3.1627 26.9826 3.1627 26.3135L-1.6373 26.3135ZM0.507616 31.4916C1.88097 32.8649 3.74361 33.6363 5.68577 33.6363V28.8363C5.01657 28.8363 4.37481 28.5705 3.90165 28.0974L0.507616 31.4916ZM5.68577 33.6363H32.7627V28.8363H5.68577V33.6363Z"
        fill="#adb5bd"
        mask="url(#path-1-inside-1_6_119)"
      />
      <path
        d="M5.68616 21.3889L13.0708 14.0046L17.9938 18.9274L30.3015 6.62036"
        stroke="#1576bc"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.302 14.0046V6.62036H22.9174"
        stroke="#1576bc"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

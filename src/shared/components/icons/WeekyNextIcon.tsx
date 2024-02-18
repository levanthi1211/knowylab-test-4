import { FC } from "react";
import { IconProps } from "./type";

export const WeeklyNextIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        y="28"
        width="28"
        height="28"
        rx="4"
        transform="rotate(-90 0 28)"
        fill="#7D8DA6"
        fill-opacity="0.1"
      />
      <path
        d="M11.6667 19.8333L17.5 13.4167L11.6667 7"
        stroke="#7D8DA6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

import { FC } from "react";
import { IconProps } from "./type";

export const EventsIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.1667 3.16666H12.5C12.8536 3.16666 13.1928 3.30714 13.4428 3.55719C13.6929 3.80724 13.8334 4.14638 13.8334 4.5V13.8333C13.8334 14.187 13.6929 14.5261 13.4428 14.7761C13.1928 15.0262 12.8536 15.1667 12.5 15.1667H4.50002C4.1464 15.1667 3.80726 15.0262 3.55721 14.7761C3.30716 14.5261 3.16669 14.187 3.16669 13.8333V4.5C3.16669 4.14638 3.30716 3.80724 3.55721 3.55719C3.80726 3.30714 4.1464 3.16666 4.50002 3.16666H5.83335"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 1.83334H6.49998C6.13179 1.83334 5.83331 2.13181 5.83331 2.5V3.83334C5.83331 4.20153 6.13179 4.5 6.49998 4.5H10.5C10.8682 4.5 11.1666 4.20153 11.1666 3.83334V2.5C11.1666 2.13181 10.8682 1.83334 10.5 1.83334Z"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

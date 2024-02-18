import { FC } from "react";
import { IconProps } from "./type";

export const SelectArrowIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.5"
        y="23.5"
        width="23"
        height="24"
        transform="rotate(-90 0.5 23.5)"
        stroke="#EFF0F6"
      />
      <path
        d="M6.52344 8.72534L12.5 14.4628L18.4766 8.72534L20.3125 10.5003L12.5 18.0003L4.6875 10.5003L6.52344 8.72534Z"
        fill="#848A95"
      />
    </svg>
  );
};

import { FC } from "react";
import { IconProps } from "./type";

export const ChevronLeftIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.3747 5.74986L8.6247 12.4999L15.3747 19.2499"
        stroke="#525F7F"
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

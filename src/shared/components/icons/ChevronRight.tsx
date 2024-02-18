import { FC } from "react";
import { IconProps } from "./type";

export const ChevronRightIcon: FC<IconProps> = ({ className }) => {
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
        d="M8.62531 19.2501L15.3753 12.5001L8.6253 5.75014"
        stroke="#525F7F"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

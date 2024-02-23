import { FC } from "react";
import { IconProps } from "./type";

export const AdvertiseNextIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 18L18.364 11.636L12 5.27208"
        stroke="white"
        stroke-opacity="0.5"
      />
    </svg>
  );
};

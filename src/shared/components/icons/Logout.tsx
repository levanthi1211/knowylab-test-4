import { FC } from "react";
import { IconProps } from "./type";

export const LogoutIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.3074 9.34867C9.61604 9.75467 8.83871 10 8.00004 10C7.16137 10 6.38404 9.75467 5.69271 9.34867C3.26271 9.508 1.33337 11.5307 1.33337 14V15.1533L1.79671 15.302C1.88604 15.33 4.02537 16 8.00004 16C11.9747 16 14.114 15.33 14.2034 15.302L14.6667 15.1533V14C14.6667 11.5307 12.7374 9.508 10.3074 9.34867Z"
        fill="#ACACAC"
      />
      <path
        d="M8 8.66667C10.2527 8.66667 12 6.158 12 4C12 1.794 10.206 0 8 0C5.794 0 4 1.794 4 4C4 6.158 5.74733 8.66667 8 8.66667Z"
        fill="#ACACAC"
      />
    </svg>
  );
};

import { FC } from "react";
import { IconProps } from "./type";

export const MyAssistantIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_6_107)">
        <path
          d="M20.0007 27.8667H21.2007V26.6667V25.2H29.4673V30.6667C29.4673 30.7399 29.4072 30.8 29.334 30.8H2.66732C2.59406 30.8 2.53398 30.7399 2.53398 30.6667V25.2H10.8007V26.6667V27.8667H12.0007H20.0007Z"
          stroke="#ADB5BD"
          strokeWidth="2.4"
        />
        <path
          d="M21.4667 5.33333V6.53333H22.6667H30.6667C30.7399 6.53333 30.8 6.59341 30.8 6.66667V20C30.8 20.0733 30.7399 20.1333 30.6667 20.1333H21.2V17.3333V16.1333H20H12H10.8V17.3333V20.1333H1.33333C1.26008 20.1333 1.2 20.0733 1.2 20V6.66667C1.2 6.59341 1.26008 6.53333 1.33333 6.53333H9.33333H10.5333V5.33333V1.33333C10.5333 1.26007 10.5934 1.2 10.6667 1.2H21.3333C21.4066 1.2 21.4667 1.26008 21.4667 1.33333V5.33333ZM20 6.53333H21.2V5.33333V2.66667V1.46667H20H12H10.8V2.66667V5.33333V6.53333H12H20Z"
          stroke="#ADB5BD"
          strokeWidth="2.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_107">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

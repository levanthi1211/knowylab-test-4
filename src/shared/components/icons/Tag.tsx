import { FC } from "react";
import { IconProps } from "./type";

export const TagIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.3535 5.6465L5.8535 0.1465C5.76 0.053 5.6325 0 5.5 0H1C0.724 0 0.5 0.224 0.5 0.5V5C0.5 5.1325 0.5525 5.26 0.6465 5.3535L6.1465 10.8535C6.244 10.9515 6.372 11 6.5 11C6.628 11 6.756 10.951 6.8535 10.8535L11.3535 6.3535C11.549 6.1585 11.549 5.842 11.3535 5.6465ZM3.5 4C2.9475 4 2.5 3.5525 2.5 3C2.5 2.4475 2.9475 2 3.5 2C4.0525 2 4.5 2.4475 4.5 3C4.5 3.5525 4.0525 4 3.5 4Z"
        fill="white"
      />
    </svg>
  );
};
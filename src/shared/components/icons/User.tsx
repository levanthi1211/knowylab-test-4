import { FC } from "react";
import { IconProps } from "./type";

export const UserIcon: FC<IconProps> = ({ className }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5683 8.49716C16.5683 12.9155 12.9866 16.4972 8.56833 16.4972C4.15005 16.4972 0.568329 12.9155 0.568329 8.49716C0.568329 4.07888 4.15005 0.497162 8.56833 0.497162C12.9866 0.497162 16.5683 4.07888 16.5683 8.49716ZM10.5683 5.49716C10.5683 6.60173 9.67293 7.49716 8.56833 7.49716C7.46376 7.49716 6.56833 6.60173 6.56833 5.49716C6.56833 4.39259 7.46376 3.49716 8.56833 3.49716C9.67293 3.49716 10.5683 4.39259 10.5683 5.49716ZM8.56826 9.49716C6.55072 9.49716 4.81227 10.6922 4.02207 12.4129C5.12236 13.6892 6.75098 14.4972 8.56831 14.4972C10.3856 14.4972 12.0142 13.6893 13.1145 12.413C12.3243 10.6922 10.5858 9.49716 8.56826 9.49716Z"
        fill="#4F4F4F"
      />
    </svg>
  );
};
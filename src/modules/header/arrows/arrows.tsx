import { FC } from "react";
import {
  CirclePrevArrowIcon,
  CircleNextArrowIcon,
} from "../../../shared/components/icons";
import styles from "./arrows.module.scss";

interface ArrowProps {
  onClick?: () => void;
}

export const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className={styles.prev_arrow} onClick={onClick}>
      <CirclePrevArrowIcon />
    </div>
  );
};

export const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className={styles.next_arrow} onClick={onClick}>
      <CircleNextArrowIcon />
    </div>
  );
};

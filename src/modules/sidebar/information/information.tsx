import { FC } from "react";
import styles from "./information.module.scss";
import avatarImage from "/images/avatar.jpg";

export const Information: FC = () => {
  return (
    <div className={styles.information}>
      <div className={`avatar ${styles.avatar}`}>
        <img src={avatarImage} />
      </div>
      <div className={styles.name}>Teacher - U0212</div>
    </div>
  );
};

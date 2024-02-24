import { FC, useState } from "react";
import styles from "./information.module.scss";
import avatarImage from "/images/avatar.jpg";
import { Management } from "../management/management";

export const Information: FC = () => {
  const [isOpenManagement, setOpenManagement] = useState<boolean>(false);
  return (
    <div className={styles.information}>
      <div
        className={`${styles.avatar}`}
        onMouseOver={() => setOpenManagement(true)}
        onMouseOut={() => setOpenManagement(false)}
      >
        <img src={avatarImage} />
      </div>
      <Management
        isOpen={isOpenManagement}
        handleMouseOver={() => setOpenManagement(true)}
        handleMouseOut={() => setOpenManagement(false)}
      />
      <div className={styles.name}>Teacher - U0212</div>
    </div>
  );
};

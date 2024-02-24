import { FC } from "react";
import { NotificationIcon } from "../../../shared/components/icons/Notification";
import styles from "./card.module.scss";
import SmallAvatarImage from "/images/smal_avatar.jpg";

type CardProps = {
  handleClick?: () => void;
};

export const Card: FC<CardProps> = (props) => {
  const { handleClick } = props;
  return (
    <div
      className={styles.card}
      onClick={() => {
        handleClick?.();
      }}
    >
      <p className={styles.date}>August 10th, 2023</p>
      <div className={styles.bottom}>
        <div className={styles.notification}>
          <div className={styles.badge}>
            <span>1</span>
          </div>
          <NotificationIcon />
        </div>
        <div className={styles.avatar}>
          <img src={SmallAvatarImage} />
        </div>
      </div>
    </div>
  );
};

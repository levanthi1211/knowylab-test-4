import { NotificationIcon } from "../../../shared/components/icons/Notification";
import styles from "./card.module.scss";
import SmallAvatarImage from "/images/smal_avatar.jpg";

export const Card = () => {
  return (
    <div className={styles.card}>
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

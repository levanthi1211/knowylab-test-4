import { FC } from "react";
import styles from "./management.module.scss";

type ManagementProps = {
  isOpen: boolean;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
};

export const Management: FC<ManagementProps> = ({
  isOpen,
  handleMouseOut,
  handleMouseOver,
}) => {
  return (
    <div
      className={`${styles.management} ${isOpen ? styles.show : ""}`}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>Quick profile management</h3>
        <p className={styles.subtitle}>Choose your interests.</p>
        <div className={styles.list}>
          <div className={styles.item}>
            <span>Change your password</span>
          </div>
          <div className={styles.item}>
            <span>Set up your login pin</span>
          </div>
          <div className={styles.item}>
            <span>Change your profile password</span>
          </div>
        </div>
      </div>
    </div>
  );
};

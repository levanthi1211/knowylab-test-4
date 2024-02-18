import styles from "./content.module.scss";
import { RightSide } from "./rightside/rightside";
import { Weeky } from "./weeky/weekly";

export const Content = () => {
  return (
    <div className={styles.content}>
      <Weeky />
      <RightSide />
    </div>
  );
};

import styles from "./content.module.scss";
import { Panel } from "./panel/panel";
import { RightSide } from "./rightside/rightside";
import { Weeky } from "./weeky/weekly";

export const Content = () => {
  return (
    <div className={styles.content}>
      <Panel />
      <div className={styles.main}>
        <Weeky />
        <RightSide />
      </div>
    </div>
  );
};

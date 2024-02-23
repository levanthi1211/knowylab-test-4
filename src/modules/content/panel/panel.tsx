import { Tabs } from "../../header/tabs/tabs";
import styles from "./panel.module.scss";

export const Panel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.top}>
        <div className={styles.top_1}>
          <h1 className={styles.number}>12</h1>
          <p className={styles.title}>LESSONS THIS WEEK</p>
        </div>
        <div className={styles.top_2}>
          <h1 className={styles.number}>10</h1>
          <p className={styles.title}>OVERDUE TASKS</p>
        </div>
        <div className={styles.top_3}>
          <h1 className={styles.number}>11</h1>
          <p className={styles.title}>PT/ DEMO</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Tabs />
      </div>
    </div>
  );
};

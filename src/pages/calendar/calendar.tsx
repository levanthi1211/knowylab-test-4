import { Content } from "../../modules/content/content";
import { Header } from "../../modules/header/header";
import { Sidebar } from "../../modules/sidebar/sidebar";
import styles from "./calendar.module.scss";

export const CalendarPage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <Content />
      </div>
    </div>
  );
};

import { useState } from "react";
import styles from "./tabs.module.scss";
import {
  BookIcon,
  CalendarIcon,
  JCECIcon,
  UserIcon,
} from "../../../shared/components/icons";

const tabs = [
  {
    icon: CalendarIcon,
    title: "ALL",
    width: 134.5,
  },
  {
    icon: UserIcon,
    title: "PT/DEMO",
    width: 134.5,
  },
  { icon: JCECIcon, title: "JCEC", width: 160 },
  { icon: BookIcon, title: "TRAINING", width: 147 },
];

export const Tabs = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className={styles.tabs}>
      {tabs.map((tab, index) => {
        return (
          <div
            key={index}
            className={`${styles.tab} ${
              tabIndex === index ? styles.active : ""
            }`}
            style={{ width: tab.width }}
            onClick={() => setTabIndex(index)}
          >
            <div className={styles.icon_container}>
              {tab.icon({
                className: `${styles.icon} ${
                  tabIndex === index ? styles.active : ""
                }`,
              })}{" "}
            </div>
            <span
              className={`${styles.title} ${
                tabIndex === index ? styles.active : ""
              }`}
            >
              {tab.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

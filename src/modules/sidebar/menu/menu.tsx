import { FC, useMemo, useState } from "react";
import styles from "./menu.module.scss";
import {
  HomepageIcon,
  MyAssistantIcon,
  MyDevelopmentIcon,
  MyPerformanceIcon,
  MyselfIcon,
  MyCalendarIcon,
  DownArrowIcon,
} from "../../../shared/components/icons";

const menu = [
  {
    icon: HomepageIcon,
    title: "Home page",
    numOfNotifications: 1,
  },
  {
    icon: MyAssistantIcon,
    title: "My Assistant",
    numOfNotifications: 1,
    hasDropdown: true,
  },
  {
    icon: MyDevelopmentIcon,
    title: "My Development",
  },
  {
    icon: MyPerformanceIcon,
    title: "My Development",
  },
  {
    icon: MyselfIcon,
    title: "Myself",
  },
  {
    icon: MyCalendarIcon,
    title: "My Calendar",
  },
];

export const Menu: FC = () => {
  const [menuIndex, setMenuIndex] = useState<number>(0);

  const activeBarPosition = useMemo(() => {
    if (menuIndex === 0) return 0;
    return menuIndex * 90;
  }, [menuIndex]);

  return (
    <div className={styles.menu}>
      <div
        className={styles.active_bar}
        style={{
          top: activeBarPosition,
        }}
      ></div>
      {menu.map((item, index) => {
        return (
          <div
            key={index}
            className={styles.item}
            onClick={() => setMenuIndex(index)}
          >
            {item.icon({
              className: `${styles.icon} ${
                menuIndex === index && styles.active
              }`,
            })}
            {item.numOfNotifications && item.numOfNotifications > 0 ? (
              <div className={styles.badge}>
                <span>1</span>
              </div>
            ) : (
              <></>
            )}
            {item.hasDropdown ? (
              <DownArrowIcon
                className={`${styles.down} ${
                  menuIndex === index && styles.active
                }`}
              />
            ) : (
              <></>
            )}
            <p
              className={`${styles.title} ${
                menuIndex === index && styles.active
              }`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

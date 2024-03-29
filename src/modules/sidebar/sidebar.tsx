import { FC } from "react";
import styles from "./sidebar.module.scss";
import { Information } from "./information/information";
import { Menu } from "./menu/menu";
import { LogoutIcon } from "../../shared/components/icons";

export const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Information />
      <div className={styles.seperator}></div>
      <Menu />
      <div className={styles.bottom}>
        <span>
          <LogoutIcon /> Logout
        </span>
        | <span>Change password</span>
      </div>
    </div>
  );
};

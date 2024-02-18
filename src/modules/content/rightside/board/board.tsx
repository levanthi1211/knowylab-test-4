import { useState } from "react";
import styles from "./board.module.scss";
import AvatarJohnsonImage from "/images/avatar_johnson.jpg";
import AvatarJackImage from "/images/avatar_jack.jpg";
import AvatarAbbyImage from "/images/avatar_abby.jpg";
import AvatarTeddyImage from "/images/avatar_teddy.jpg";
import AvatarRonaldImage from "/images/avatar_ronald.jpg";
import { MailIcon } from "../../../../shared/components/icons";

const positions = [
  {
    name: "Position 1",
    bg: "#FFEBDA",
    color: "#FD7E14",
  },
  {
    name: "Position 2",
    bg: "#A5F4FF",
    color: "#006BA7",
  },
  {
    name: "Position 3",
    bg: "#FFCBF4",
    color: "#710084",
  },
];

const tabs = [
  {
    title: "All",
  },
  { title: "Position 1" },
  { title: "Position 2" },
];

const users = [
  {
    name: "Johnson Sonn",
    avatar: AvatarJohnsonImage,
    tag: "Position 1",
  },
  {
    name: "Jack",
    avatar: AvatarJackImage,
    tag: "Position 1",
  },
  {
    name: "Abby",
    avatar: AvatarAbbyImage,
    tag: "Position 2",
  },
  {
    name: "Teddy",
    avatar: AvatarTeddyImage,
    tag: "Position 2",
  },
  {
    name: "Ronald",
    avatar: AvatarRonaldImage,
    tag: "Position 3",
  },
];

export const Board = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className={styles.board}>
      <h1 className={styles.title}>Center available calendar</h1>
      <div className={styles.tab_panel}>
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`${styles.tab_item} ${
                index === tabIndex ? styles.active : ""
              }`}
              onClick={() => {
                setTabIndex(index);
              }}
            >
              <span>{tab.title}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.list}>
        {users
          .filter((item) => {
            if (tabIndex === 0) return true;
            const positionName = positions[tabIndex - 1].name;
            return item.tag === positionName;
          })
          .map((item, index) => {
            const positionInfo = positions.find(
              (position) => position.name === item.tag
            );
            return (
              <div key={index} className={styles.list_item}>
                <div className={styles.left}>
                  <div className={styles.avatar}>
                    <div className={styles.status}></div>
                    <img src={item.avatar} />
                  </div>
                </div>
                <div className={styles.mid}>
                  <div className={styles.name}>{item.name}</div>
                  <div
                    className={styles.tag}
                    style={{
                      backgroundColor: positionInfo?.bg,
                      color: positionInfo?.color,
                    }}
                  >
                    {item.tag}
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.mail}>
                    <MailIcon />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

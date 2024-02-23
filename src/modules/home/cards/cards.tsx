import { MarkIcon, CartIcon } from "../../../shared/components/icons";
import styles from "./cards.module.scss";
import { SpecialCard } from "./specialCard/specialCard";

const cards = [
  {
    title: "This month renewal rate",
    progress: 45,
    logoBg: "#E01E5A",
    logo: MarkIcon,
    diff: -23,
    time: "than last month",
  },
  {
    title: "Welearn course progress",
    progress: 45,
    logoBg: "#E01E5A",
    logo: MarkIcon,
    diff: -2,
    time: "than last week",
  },
  {
    title: "Teaching hour ",
    progress: 45,
    logoBg: "#009A58",
    logo: CartIcon,
    diff: 5,
    time: "than last month",
  },
  {
    title: "Conversion rate ",
    progress: 45,
    logoBg: "#009A58",
    logo: CartIcon,
    diff: +2,
    time: "than last month",
  },
];

export const Cards = () => {
  return (
    <div className={styles.cards}>
      <SpecialCard />
      {cards.map((card, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.top}>
              <div className={styles.left}>
                <p className={styles.title}>{card.title}</p>
                <p className={styles.progress}>{card.progress}%</p>
              </div>
              <div className={styles.logo} style={{ background: card.logoBg }}>
                {card.logo({})}
              </div>
            </div>
            <div className={styles.bottom}>
              <p
                className={`${styles.diff} ${
                  card.diff > 0 ? styles.increase : ""
                }`}
              >
                {card.diff}%
              </p>
              <p className={styles.time}>{card.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

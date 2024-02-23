import styles from "./specialCard.module.scss";
import BgSpecialCardImage from "/images/bg_special_card.jpg";

export const SpecialCard = () => {
  return (
    <div
      className={styles.special_card}
      style={{ backgroundImage: `url(${BgSpecialCardImage})` }}
    >
      <div className={styles.mask}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>KPI SCORE - YTD</h1>
        <p className={styles.progress}>45%</p>
        <div className={styles.bottom}>
          <span>+15% since last month</span>
        </div>
      </div>
    </div>
  );
};

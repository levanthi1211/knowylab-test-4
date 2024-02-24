import {
  DatabaseIcon,
  DecreaseIcon,
  IncreaseIcon,
} from "../../../shared/components/icons";
import styles from "./leaderboard.module.scss";
import GoldImage from "/images/gold.jpg";
import SilverImage from "/images/silver.jpg";
import BronzeImage from "/images/bronze.jpg";
import { FC } from "react";
import { LeaderboardProps } from "./leaderboardTypes";

export const Leaderboard: FC<LeaderboardProps> = (props) => {
  const { header, badges, subtitle, ranking, users } = props;
  const renderRanking = (ranking: number) => {
    switch (ranking) {
      case 1:
        return <img src={GoldImage} />;
      case 2:
        return <img src={SilverImage} />;
      case 3:
        return <img src={BronzeImage} />;
      default:
        return <span>#{ranking}</span>;
    }
  };

  return (
    <div className={styles.leaderboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>{header}</h1>
        {badges ? (
          <div className={styles.badges}>
            <div className={styles.badge}>ACADEMIC</div>
            <div className={styles.badge}>BUSSINESS</div>
            <div className={styles.badge}>SERVICE</div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.yourself}>
        <div className={styles.information}>
          <p className={styles.leaderboard_name}>{subtitle}</p>
          <p className={styles.leaderboard_ranking}>#{ranking}</p>
        </div>
        <div className={styles.icon}>
          <DatabaseIcon />
        </div>
      </div>

      <div className={styles.list}>
        {users.map((user, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.ranking}>
                {renderRanking(user.ranking)}
              </div>
              <div className={styles.user}>
                {user.avatar ? (
                  <div className={styles.avatar}>
                    <div
                      className={`${styles.status} ${
                        user.online ? styles.online : styles.offline
                      }`}
                    />
                    <img src={user.avatar} />
                  </div>
                ) : user.avatarAlt ? (
                  <div
                    className={styles.avatar_alt}
                    style={{ background: user.avatarAltBg }}
                  >
                    <span>{user.avatarAlt}</span>
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.name}>{user.name}</div>
              </div>
              {user.change > 0 ? (
                <div className={`${styles.change} ${styles.increase}`}>
                  +{user.change} <IncreaseIcon />
                </div>
              ) : user.change < 0 ? (
                <div className={`${styles.change} ${styles.decrease}`}>
                  {user.change} <DecreaseIcon />
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

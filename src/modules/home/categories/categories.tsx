import { CategoryArrowIcon } from "../../../shared/components/icons/CategoryArrow";
import styles from "./categories.module.scss";
import { CategoryProps } from "./categoryTypes";
import { FC } from "react";

export const Categories: FC<CategoryProps> = (props) => {
  const { header, items } = props;
  return (
    <div className={styles.categories}>
      <h5>{header}</h5>
      <div className={styles.list}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.logo}>{item.logo}</div>
            <div className={styles.text}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
            <div className={styles.arrow}>
              <CategoryArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

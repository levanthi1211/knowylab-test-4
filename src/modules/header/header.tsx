import styles from "./header.module.scss";
import Slider, { Settings } from "react-slick";
import coverImage from "/images/cover.jpg";
import { useRef } from "react";
import { NextArrow, PrevArrow } from "./arrows/arrows";
import { Card } from "./card/card";
import { HelloIcon } from "../../shared/components/icons";
import { Tabs } from "./tabs/tabs";

export const Header = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    customPaging: function () {
      return <div className="custom-dot"></div>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.header} id="header">
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((index) => {
          return (
            <div key={index} className={styles.item}>
              <div
                style={{ backgroundImage: `url(${coverImage})` }}
                className={styles.item_content}
              ></div>
            </div>
          );
        })}
      </Slider>
      <PrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
      <NextArrow onClick={() => sliderRef?.current?.slickNext()} />
      <Card />
      <div className={styles.container}>
        <h1 className={styles.name}>
          <span>Hi Mark</span>
          <HelloIcon className={styles.hello} />
        </h1>
        <p className={styles.subtitle}>Welcome to Apollo 2.0</p>

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
      </div>
    </div>
  );
};
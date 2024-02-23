import Slider, { Settings } from "react-slick";
import { useRef } from "react";
import styles from "./advertise.module.scss";
import AdvertiseImage from "/images/advertise.jpg";
import {
  AdvertiseNextIcon,
  AdvertisePrevIcon,
} from "../../../shared/components/icons";

export const Advertise = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.advertise} id="advertise-bg">
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((index) => {
          return (
            <div key={index} className={styles.item}>
              <div
                className={styles.item_content}
                style={{ backgroundImage: `url(${AdvertiseImage})` }}
              >
                <div className={styles.on_air}>
                  <span>APOLLO ON AIR</span> <div className={styles.dot}></div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className={styles.arrows}>
        <div
          className={styles.prev}
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <AdvertisePrevIcon />
        </div>
        <div
          className={styles.next}
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <AdvertiseNextIcon />
        </div>
      </div>
    </div>
  );
};

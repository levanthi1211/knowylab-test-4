import styles from "./header.module.scss";
import Slider, { Settings } from "react-slick";
import { useRef, useState } from "react";
import { NextArrow, PrevArrow } from "./arrows/arrows";
import { Card } from "./card/card";
import { HelloIcon } from "../../shared/components/icons";
import { Notification } from "./notification/notification";

export const Header = () => {
  const sliderRef = useRef<Slider>(null);
  const [isShowNotification, setShowNotification] = useState<boolean>(false);

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
                style={{
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/54b4/a99a/e9b321795c699a18b73830c17cb779a6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXXLLmVryWd3MKNiUuW6GO6sdHnZyqtiuL~~-VgEmhyQSXuRtp4S6YuI7ZPgLQ14Evpu5Ri1sGhsxfN20TOJynw-c037vjEEvkIroBeekpcsWrLmZOct7vDgFygIFYkSuX0NfaYlp-dp9BD4vfbPWPInEUe3XzsguvTXWfxv8gLiWAUI6Te4GXVk9OHsmcdK7XwxNLKkiK0gYJK2NGhqulDx~AiC8idBOyhgTNBdInapU6R~BwNsKgy19OleIeBXCRv5H~9JS99HC5P65K9UJmd8X4xZx~ixVJSe4v9dq~-c3JhB7RqVdycspzMbXlCobJiINpy1UOomkscRWJw6zQ__)`,
                }}
                className={styles.item_content}
              ></div>
            </div>
          );
        })}
      </Slider>
      <PrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
      <NextArrow onClick={() => sliderRef?.current?.slickNext()} />
      <Card handleClick={() => setShowNotification(true)} />
      <Notification
        isShow={isShowNotification}
        handleHide={() => setShowNotification(false)}
      />
      <div className={styles.container}>
        <h1 className={styles.name}>
          <span>Hi Mark</span>
          <HelloIcon className={styles.hello} />
        </h1>
        <p className={styles.subtitle}>Welcome to Apollo 2.0</p>
      </div>
    </div>
  );
};

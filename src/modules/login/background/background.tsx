import Slider, { Settings } from "react-slick";
import styles from "./background.module.scss";
import DecorationImage from "/images/decoration.png";

export const Background = () => {
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
    <div className={styles.background} id="login-bg">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((index) => {
          return (
            <div key={index} className={styles.item}>
              <div
                className={styles.item_content}
                style={{
                  backgroundImage: `url(${DecorationImage}), linear-gradient(315deg, #1576bc 0%, #509fd8 100%)`,
                }}
              >
                <h1 className={styles.title}>
                  Start your journey with Apollo English by one click!
                </h1>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

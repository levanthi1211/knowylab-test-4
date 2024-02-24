import { FC } from "react";
import styles from "./notification.module.scss";
import SunImage from "/images/sun.jpg";
import SeenImage from "/images/seen.jpg";
import moment from "moment";
import { MoreHorizontalIcon } from "../../../shared/components/icons";

type NotificationProps = {
  isShow: boolean;
  handleHide?: () => void;
};

const notifications = [
  {
    isNew: true,
    tag: {
      bg: "linear-gradient(68deg, #F3410F 54.99%, #F53B58 79.29%)",
      text: "Announcement",
    },
    message:
      "Class 1 will start in next <span style='color: #1576BC;'>30 mins</span>, please be informed!",
    time: new Date(),
    sender: "AP 2.0",
    seen: false,
    isToday: true,
  },
  {
    isNew: false,
    tag: {
      bg: "#1576BC",
      text: "Notification",
    },
    message:
      "Workshop will start in next <span style='color: #1576BC;'>30 mins</span>, please be informed!",
    seen: true,
    isToday: true,
  },
  {
    isNew: false,
    tag: {
      bg: "#1576BC",
      text: "Notification",
    },
    message:
      "Workshop will start in next <span style='color: #1576BC;'>30 mins</span>, please be informed!",
    seen: true,
    isToday: true,
  },
  {
    isNew: true,
    tag: {
      text: "Holiday break",
    },
    message:
      "Hi all beloved teachers, we will have a holiday break from <span style='color: #8898AA;'>Sep 12th, 2023</span> until the end of <span style='color: #8898AA;'>Sep 16th, 2023</span> due to Vietnamese national winter season ...",
    time: new Date(),
    sender: "AP 2.0",
    seen: false,
    isToday: false,
  },
  {
    isNew: false,
    tag: {
      text: "Holiday break",
    },
    message:
      "Hi all beloved teachers, we will have a holiday break from <span style='color: #8898AA;'>Sep 12th, 2023</span> until the end of <span style='color: #8898AA;'>Sep 16th, 2023</span> due to Vietnamese national winter season ...",
    time: new Date(),
    sender: "AP 2.0",
    seen: false,
    isToday: false,
  },
  {
    isNew: false,
    tag: {
      text: "Holiday break",
    },
    message:
      "Hi all beloved teachers, we will have a holiday break from <span style='color: #8898AA;'>Sep 12th, 2023</span> until the end of <span style='color: #8898AA;'>Sep 16th, 2023</span> due to Vietnamese national winter season ...",
    time: new Date(),
    sender: "AP 2.0",
    seen: false,
    isToday: false,
  },
  {
    isNew: false,
    tag: {
      text: "Holiday break",
    },
    message:
      "Hi all beloved teachers, we will have a holiday break from <span style='color: #8898AA;'>Sep 12th, 2023</span> until the end of <span style='color: #8898AA;'>Sep 16th, 2023</span> due to Vietnamese national winter season ...",
    time: new Date(),
    sender: "AP 2.0",
    seen: false,
    isToday: false,
  },
];

export const Notification: FC<NotificationProps> = (props) => {
  const { isShow, handleHide } = props;
  return (
    <div className={styles.notification}>
      <div
        className={`${styles.overlay} ${isShow ? styles.show : ""}`}
        onClick={() => {
          handleHide?.();
        }}
      ></div>
      <div className={`${styles.content} ${isShow ? styles.show : ""}`}>
        <div className={styles.header}>
          <div className={styles.time}>
            <h3>September 19th, 2023</h3>
            <img src={SunImage} />
          </div>
        </div>
        <div className={styles.today}>
          <h3>Today</h3>
          <div className={styles.list}>
            {notifications
              .filter((notification) => notification.isToday)
              .map((item, index) => (
                <div className={styles.item} key={index}>
                  <div
                    className={styles.status}
                    style={{ ...(item.isNew ? {} : { background: "#E9ECEF" }) }}
                  />
                  <div className={styles.information}>
                    <p
                      className={styles.tag}
                      style={{ background: item.tag?.bg }}
                    >
                      <span>{item.tag?.text}</span>
                    </p>
                    <div className={styles.message}>
                      <div dangerouslySetInnerHTML={{ __html: item.message }} />
                    </div>
                    <div className={styles.bottom}>
                      <div
                        className={styles.time}
                        style={{
                          ...(!item.seen && item.time
                            ? {}
                            : { visibility: "hidden" }),
                        }}
                      >
                        {moment(item.time).fromNow()}, sent by {item.sender}
                      </div>
                      {item.seen ? (
                        <div className={styles.seen}>
                          <span>Seen</span> <img src={SeenImage} />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.older}>
          <h3>Older</h3>
          <div className={styles.list}>
            {notifications
              .filter((notification) => !notification.isToday)
              .map((item, index) => (
                <div
                  className={styles.item}
                  key={index}
                  style={{
                    ...(item.isNew ? { background: "#DDF1FF" } : {}),
                  }}
                >
                  <div
                    className={styles.status}
                    style={{ ...(item.isNew ? {} : { background: "#E9ECEF" }) }}
                  />
                  <div className={styles.information}>
                    <div className={styles.item_header}>
                      <p className={styles.title}>
                        <span>{item.tag?.text}</span>
                      </p>
                      <MoreHorizontalIcon />
                    </div>

                    <div className={styles.message}>
                      <div dangerouslySetInnerHTML={{ __html: item.message }} />
                    </div>
                    <div className={styles.bottom}>
                      <div
                        className={styles.time}
                        style={{
                          ...(!item.seen && item.time
                            ? {}
                            : { visibility: "hidden" }),
                        }}
                      >
                        {moment(item.time).fromNow()}, sent by {item.sender}
                      </div>
                      {item.seen ? (
                        <div className={styles.seen}>
                          <span>Seen</span> <img src={SeenImage} />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

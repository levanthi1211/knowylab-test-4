import { Popover } from "antd";
import styles from "./event.module.scss";
import { ErrorIcon, EventsIcon } from "../../../../shared/components/icons";
import { FC, useState } from "react";

type EventProps = {
  numOfEvents: number;
};

export const Event: FC<EventProps> = (props) => {
  const { numOfEvents } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover
      id="event-popover"
      content={
        <div className={styles.content}>
          <div className={styles.decorator}></div>
          <div className={styles.icon}>
            <ErrorIcon />
          </div>
          <div className={styles.text}>
            <h4 className={styles.title}>UNDONE TASKS</h4>
            <p className={styles.subtitle}>Deadline incoming!!!</p>
            <p className={styles.description}>
              You have 5 undone tasks with their deadlines today.
              <span className={styles.link}>Click here</span> for more details!
            </p>
          </div>
        </div>
      }
      title={false}
      trigger="click"
      open={open}
      onOpenChange={(newOpen: boolean) => {
        setOpen(newOpen);
      }}
      arrow={false}
      placement="topLeft"
    >
      <div className={styles.events}>
        <EventsIcon /> <span>{numOfEvents}</span>
      </div>
    </Popover>
  );
};

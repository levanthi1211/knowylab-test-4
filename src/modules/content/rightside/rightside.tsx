import FullCalendar from "@fullcalendar/react";
import styles from "./rightside.module.scss";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useRef } from "react";
import moment from "moment";
import { Board } from "./board/board";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../../shared/components/icons";

export const RightSide = () => {
  const calendarRef = useRef<FullCalendar>(null);

  const [title, setTitle] = useState<string>("");

  return (
    <div className={styles.right_side}>
      <div className={styles.calendar} id="right_side_calendar">
        <div className={styles.calendar_header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.buttons}>
            <div
              onClick={() => {
                calendarRef.current?.getApi().prev();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <ChevronLeftIcon />
            </div>
            <div
              onClick={() => {
                calendarRef.current?.getApi().next();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          titleFormat={(info) => {
            const startDate = info.start.marker;
            return `${moment(startDate).format("MMM")}, ${moment(
              startDate
            ).format("YYYY")}`;
          }}
          viewDidMount={({ view }) => {
            setTitle(view.title);
          }}
          initialView="dayGridMonth"
          firstDay={1}
          headerToolbar={false}
          height="auto"
          events={[
            {
              start: "2024-02-12",
              end: "2024-02-19",
              display: "background",
            },
          ]}
          dayHeaderContent={({ date }) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{moment(date).format("dd")}</span>
              </div>
            );
          }}
        />
      </div>
      <Board />
    </div>
  );
};

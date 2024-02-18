import styles from "./weeky.module.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import { useState, useRef } from "react";
import {
  EventsIcon,
  WeeklyNextIcon,
  WeeklyPrevIcon,
} from "../../../shared/components/icons";
import SelectArrowIcon from "/images/select_arrow.jpg";

const events = [
  { day: moment().startOf("isoWeek").weekday(1), numOfEvents: 5 },
  { day: moment().startOf("isoWeek").weekday(5), numOfEvents: 5 },
];

const timezones = [
  {
    value: "-12",
    label: "-12:00",
  },

  {
    value: "-11",
    label: "-11:00",
  },
  {
    value: "-10",
    label: "-10:00",
  },
  {
    value: "-9",
    label: "-9:00",
  },
  {
    value: "-8",
    label: "-8:00",
  },
  {
    value: "-7",
    label: "-7:00",
  },
  {
    value: "-6",
    label: "-6:00",
  },
  {
    value: "-5",
    label: "-5:00",
  },
  {
    value: "-4.5",
    label: "-4:30",
  },
  {
    value: "-4",
    label: "-4:00",
  },
  {
    value: "-3.5",
    label: "-3:30",
  },
  {
    value: "-3",
    label: "-3:00",
  },
  {
    value: "-2",
    label: "-2:00",
  },
  {
    value: "-1",
    label: "-1:00",
  },
  {
    value: "0",
    label: "+0:00",
  },
  {
    value: "1",
    label: "+1:00",
  },
  {
    value: "2",
    label: "+2:00",
  },
  {
    value: "3",
    label: "+3:00",
  },
  {
    value: "3.5",
    label: "+3:30",
  },
  {
    value: "4.0",
    label: "+4:00",
  },
  {
    value: "4.5",
    label: "+4:30",
  },
  {
    value: "5",
    label: "+5:00",
  },
  {
    value: "5.5",
    label: "+5:30",
  },
  {
    value: "6",
    label: "+6:00",
  },
  {
    value: "6",
    label: "+6:30",
  },
  {
    value: "7",
    label: "+7:00",
  },
  {
    value: "8",
    label: "+8:00",
  },
  {
    value: "9",
    label: "+9:00",
  },
  {
    value: "9.5",
    label: "+9:30",
  },
  {
    value: "10",
    label: "+10:00",
  },
  {
    value: "11",
    label: "+11:00",
  },
  {
    value: "12",
    label: "+12:00",
  },
  {
    value: "13",
    label: "+13:00",
  },
];

export const Weeky = () => {
  const calendarRef = useRef<FullCalendar>(null);

  const [title, setTitle] = useState<string>("");

  return (
    <div className={styles.weekly} id="weekly">
      <div className={styles.weekly_header}>
        <div className={styles.left}>
          <div className={styles.buttons}>
            <div
              onClick={() => {
                calendarRef.current?.getApi().prev();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <WeeklyPrevIcon />
            </div>
            <div
              onClick={() => {
                calendarRef.current?.getApi().next();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <WeeklyNextIcon />
            </div>
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.select}>
            <select
              defaultValue="7"
              style={{ backgroundImage: `url(${SelectArrowIcon})` }}
            >
              {timezones.map((timezone, index) => {
                return (
                  <option key={index} value={timezone.value}>
                    (GMT {timezone.label})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        viewDidMount={({ view }) => {
          setTitle(view.title);
        }}
        height={734}
        titleFormat={(info) => {
          const startDate = info.start.marker;
          const endDate = info.end?.marker;
          return `${moment(startDate).format("Do")} ${
            moment(startDate).format("MMMM") !== moment(endDate).format("MMMM")
              ? moment(startDate).format("MMMM")
              : ""
          } - ${moment(endDate).format("Do")} ${moment(endDate).format(
            "MMMM"
          )}`;
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        allDaySlot={false}
        firstDay={1}
        scrollTimeReset={false}
        slotDuration="01:00:00"
        dayHeaderContent={({ date }) => {
          const event = events.find((event) => {
            return moment(date).isSame(moment(event.day), "day");
          });

          const isToday = moment(date).isSame(moment(), "day");

          const isWeekends = moment(date).clone().day() % 6 === 0;

          return (
            <div className={styles.header_label}>
              <span
                className={`${styles.day_in_week} ${
                  isToday ? styles.today : ""
                }  ${isWeekends ? styles.weekends : ""}`}
              >
                {moment(date).format("ddd")}
              </span>
              <span
                className={`${styles.day_in_month} ${
                  isToday ? styles.today : ""
                } ${isWeekends ? styles.weekends : ""}`}
              >
                {moment(date).format("DD")}
              </span>
              {event ? (
                <div className={styles.events}>
                  <EventsIcon /> <span>{event.numOfEvents}</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        }}
        slotLabelContent={({ date }) => {
          return (
            <div className={styles.slot_label}>
              {moment(date).format("H:mm")}
            </div>
          );
        }}
      />
    </div>
  );
};

import { useState } from "react";
import styles from "./table.module.scss";
import SearchIcon from "/images/search.jpg";

export const Table = () => {
  const [selectedClass, setSelectedClass] = useState<number>(0);

  return (
    <div className={styles.table}>
      <h3 className={styles.header}>STUDENTS AT RISK</h3>
      <div className={styles.search}>
        <input
          className={styles.input}
          placeholder="Search student or class"
          style={{
            background: `url(${SearchIcon}) no-repeat scroll`,
            backgroundPosition: "right 13px center",
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.classes}>
            {[0, 1, 2, 3, 4, 5, 6].map((value, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.class} ${
                    selectedClass === value ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSelectedClass(value);
                  }}
                >
                  PNT - PR2 - 0028
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.detail}>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Off track category</th>
                <th>Time range</th>
                <th>Suggestion</th>
              </tr>
            </thead>
            <tbody
              style={{
                maxHeight: "454px",
                overflowY: "scroll",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
                <tr>
                  <td key={index}>
                    <div className={styles.checkbox_container}>
                      <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                      </label>
                      <span>Student name {value}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.tag_container}>
                      <div className={styles.tag}>Home learning</div>
                      <div className={styles.tag}>Engagement</div>
                    </div>
                  </td>
                  <td>4 weeks</td>
                  <td>Suggest for tutor</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

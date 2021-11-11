import React from "react";
import styles from "../styles/PageExperience.module.css";
import { HiCursorClick } from "react-icons/hi";

function PageExperience(props) {
  const { moveSection, btnLabel, title, essence, type, pImg } = props;
  return (
    <div className={styles.expPage}>
      <div className={styles.project}>
        <h1>{title}</h1>
        <div></div>
        <p>{essence}</p>
        <div></div>
        <h2>{type}</h2>
      </div>
      <div className={styles.imgProject}>
        <img height="400px" src={pImg} alt="profile-picture" />
        <div className={styles.shadowImg}>
          <div className={styles.clickHand}>
            <HiCursorClick />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageExperience;

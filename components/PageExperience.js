import React from "react";
import styles from "../styles/PageExperience.module.css";

function PageExperience(props) {
  const { moveSection, btnLabel, title, pImg } = props;
  return (
    <div className={styles.expPage}>
      <button onClick={moveSection}>{btnLabel}</button>
      <div>
        <img height="400px" src={pImg} alt="profile-picture" />
      </div>
    </div>
  );
}

export default PageExperience;

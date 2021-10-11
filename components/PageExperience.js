import React from "react";
import styles from "../styles/PageExperience.module.css";

function PageExperience(props) {
  const { moveSection, btnLabel, title } = props;
  return (
    <div className={styles.expPage}>
      <button onClick={moveSection}>{btnLabel}</button>
      <p>{title}</p>
    </div>
  );
}

export default PageExperience;

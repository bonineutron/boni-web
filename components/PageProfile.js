import React from "react";
import styles from "../styles/PageProfile.module.css";
import { DiJavascript1 } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";

function PageProfile(props) {
  const { moveSection, btnLabel, title, pImg } = props;
  return (
    <div className={styles.ProPage}>
      <button onClick={moveSection}>{btnLabel}</button>
      <div className={styles.contProfile}>
        <img src={pImg} alt="profile-picture" />
        <div className={styles.barsExp}>
          <div className={styles.bar}>
            <DiJavascript1 />
            <div className={styles.progress}>
              <div className={styles.color1}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <SiJava />
            <div className={styles.progress}>
              <div className={styles.color2}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <IoLogoPython />
            <div className={styles.progress}>
              <div className={styles.color3}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <AiOutlineConsoleSql />
            <div className={styles.progress}>
              <div className={styles.color4}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <BiGitBranch />
            <div className={styles.progress}>
              <div className={styles.color5}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageProfile;

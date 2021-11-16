import React from "react";
import styles from "../styles/TopBar.module.css";
import { FaGithubSquare } from "react-icons/fa";

function Topbar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.contTopBar}>
        <img src="/logoTopbar.svg" />
        <a
          className={styles.icon}
          href="https://github.com/BoniNeutron/boni-web"
          target="_blank"
          rel="noreferrer"
        >
          <p>CODE</p>
          <FaGithubSquare />
        </a>
        {/*<div className={styles.icon}>
          <a
            href="https://github.com/BoniNeutron"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://gitlab.com/BoniNeutron"
            target="_blank"
            rel="noreferrer"
          >
            <FiGitlab />
          </a>

          <a
            href="https://www.instagram.com/bonineutron"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
  </div>*/}
      </div>
    </div>
  );
}

export default Topbar;

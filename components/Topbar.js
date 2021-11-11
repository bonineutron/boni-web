import React from "react";
import styles from "../styles/TopBar.module.css";
import { FiGithub, FiGitlab, FiInstagram, FiLinkedin } from "react-icons/fi";

function Topbar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.contTopBar}>
        <h1>Boni Web</h1>
        <div className={styles.icon}>
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
        </div>
      </div>
    </div>
  );
}

export default Topbar;

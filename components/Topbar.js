import React from "react";
import styles from "../styles/TopBar.module.css";
import { FiGithub, FiGitlab, FiInstagram, FiMenu } from "react-icons/fi";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <h1>ANDRES BONILLA</h1>
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
        <a>
          <FiMenu />
        </a>
      </div>
    </div>
  );
}

export default Topbar;

import React from "react";
import styles from "../styles/TopBar.module.css";
import { FiGithub, FiGitlab, FiInstagram, FiMenu } from "react-icons/fi";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <h1>ANDRES BONILLA</h1>
      <div className={styles.icon}>
        <a href="https://github.com/BoniNeutron" target="_blank">
          <FiGithub />
        </a>
        <a href="https://gitlab.com/BoniNeutron" target="_blank">
          <FiGitlab />
        </a>
        <a href="https://www.instagram.com/bonineutron" target="_blank">
          <FiInstagram />
        </a>
        <a href="">
          <FiMenu />
        </a>
      </div>
    </div>
  );
}

export default Topbar;

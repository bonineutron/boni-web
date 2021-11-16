import React from "react";
import styles from "../styles/LinksContact.module.css";
import { FiGithub, FiGitlab, FiInstagram, FiLinkedin } from "react-icons/fi";
import {
  AiOutlineLinkedin,
  AiOutlineGitlab,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

function LinksContact() {
  return (
    <div className={styles.linksContact}>
      <div className={styles.contLinksC}>
        <div className={styles.listLinks}>
          <a
            href="https://www.instagram.com/bonineutron/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/bonineutron/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://gitlab.com/BoniNeutron"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGitlab />
          </a>
          <a
            href="https://github.com/BoniNeutron"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <div className={styles.lineAbsolute}></div>
        </div>

        <div className={styles.mailAbsolute}>
          <a href="mailto:correodboni@gmail.com" rel="noreferrer">
            correodboni@gmail.com
          </a>
          <div className={styles.lineAbsolute}></div>
        </div>
      </div>
    </div>
  );
}

export default LinksContact;

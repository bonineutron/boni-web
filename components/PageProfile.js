import React from "react";
import { useState } from "react";
import styles from "../styles/PageProfile.module.css";
import { DiJavascript1 } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { IoLogoPython, IoLogoWhatsapp } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { BsMailbox2 } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";

import Modal from "./Modal";
import FormContact from "./FormContact";

function PageProfile(props) {
  const { pImg } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.contProPage}>
      <div className={styles.ProPage}>
        <div className={styles.presentation}>
          <div className={styles.boniText}>
            <h2>Hola, mi nombre es,</h2>
            <h1>Andres Bonilla</h1>
            <h2>y contruyo cosas para la Web.</h2>
            <div></div>
            <p>
              Soy desarrollador de software, me especializo en el uso de
              javascript, implementando tecnologías como react y angular. Lo que
              me motivo a ser desarrollador, es el poder dar soluciones
              tecnológicas a problemas, siempre los veo como un reto nuevo por
              superar.
            </p>
          </div>
          <div className={styles.boxContact}>
            <button
              className={styles.contact}
              onClick={() => setShowModal(true)}
            >
              <p>Contáctame</p>
              <BsMailbox2 className={styles.mail} />
              <Modal
                className={styles.modalBlue}
                show={showModal}
                onClose={() => setShowModal(false)}
              >
                <FormContact />
              </Modal>
            </button>
            <a
              className={styles.whats}
              href="https://api.whatsapp.com/send?phone=573203604288"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
          <div className={styles.line2}></div>
        </div>
        <div className={styles.contProfile}>
          <img src={pImg} alt="profile-picture" />
          <div className={styles.barsExp}>
            <div className={styles.bar}>
              <SiJava />
              <div className={styles.progress}>
                <div className={styles.color2}></div>
              </div>
            </div>
            <div className={styles.bar}>
              <DiJavascript1 />
              <div className={styles.progress}>
                <div className={styles.color1}></div>
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
    </div>
  );
}

export default PageProfile;

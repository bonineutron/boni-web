import React from "react";
import { useState } from "react";
import styles from "../styles/PageProfile.module.css";
import { DiJavascript1 } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { IoLogoPython, IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Modal from "./Modal";
import FormContact from "./FormContact";

function PageProfile(props) {
  const { pImg } = props;
  const [showModal, setShowModal] = useState(false);
  const aa = (e) => {
    e.preventDefault();
    setShowModal(false);
    console.log("jdjd");
    setTimeout(() => {
      console.log("jdjd");
      setShowModal(false);
    }, 10);
  };
  return (
    <div className={styles.ProPage}>
      <div className={styles.presentation}>
        <button onClick={() => setShowModal(true)}>
          <Modal show={showModal} onClose={() => aa}>
            <FormContact />
          </Modal>
        </button>
        <div className={styles.boniText}>
          <h3>Hola, mi nombre es,</h3>
          <h2>Andres Bonilla</h2>
          <h3>Contruyo cosas para la Web</h3>
          <p>
            Soy desarrollador de software, me especializo en el uso de
            javascript, implementando tecnologías como react y angular. Lo que
            me motivo a ser desarrollador, es el poder dar soluciones
            tecnológicas a problemas, siempre los veo como un reto nuevo por
            superar.
          </p>
        </div>
        <div className={styles.boxContact}>
          <div className={styles.contact}>
            <p>Contactame</p>
            <IoMdMail />
          </div>

          <div className={styles.whats}>
            <a href="">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
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

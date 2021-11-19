import React from "react";
import styles from "../styles/PageExperience.module.css";
import { ImRedo2 } from "react-icons/im";

function PageExperience(props) {
  const { title, essence, pImg, link } = props;
  return (
    <div className={styles.contExpPage}>
      <div className={styles.expPage}>
        <div className={styles.project}>
          <h1>{title}</h1>
          <p>{essence}</p>
          <div className={styles.line}></div>
          <h2>Implemente:</h2>
          <p>
            El uso de stripe y su pasarela de pago, para dar mas posibilidades
            de pago a nivel global. El uso de revenucat para analizar las
            subscripciones en web. Flujo de suscripción para usuarios nuevos.
            Corrección de bugs. Cambios en Front-end…
          </p>
          <div className={styles.logos}>
            <img src="/revenuecat.svg" alt="revenucat.svg" />
            <img src="/stripe.svg" alt="stripe.svg" />
          </div>
          <div className={styles.line2}></div>
        </div>
        <div className={styles.imgProject}>
          <div className={styles.imgCont}>
            <img height="400px" src={pImg} alt="profile-picture" />
          </div>
          <div className={styles.contLabels}>
            <div className={styles.labels}>
              <h2>Cargo:</h2>
              <p>Full Stack Developer</p>
            </div>
            <div className={styles.labels}>
              <h2 className={styles.hidden}>Duración:</h2>
              <p className={styles.hidden}>3 meses</p>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
              Go Site
              <ImRedo2 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageExperience;

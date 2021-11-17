import React, { useState } from "react";
import styles from "../styles/FormContact.module.css";
import { RiMailSendLine } from "react-icons/ri";
import { BiCommentCheck } from "react-icons/bi";

function FormContact() {
  const componentsStep = [
    "",
    <BiCommentCheck key="1" className={styles.sent} />,
  ];
  const [componentChange, setComponetChange] = useState(componentsStep[0]);
  const sentCorrectly = () => {
    setComponetChange(componentsStep[1]);
    setTimeout(() => {
      setComponetChange(componentsStep[0]);
    }, 3000);
  };
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
  }
  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <input type="text" name="name" placeholder="Tu Nombre:" />
      <input type="email" name="email" placeholder="Tu Email:" />
      <input type="message" name="message" placeholder="Tu Mensaje:" />
      <button onClick={sentCorrectly}>
        Enviar
        <RiMailSendLine className={styles.iconM} />
      </button>
      {componentChange}
    </form>
  );
}

export default FormContact;

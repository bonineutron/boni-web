import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import { FaWindowClose } from "react-icons/fa";

export default function Modal(props) {
  const { onClose, show, children } = props;
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleClose = (e) => {
    e.preventDefault();
    setTimeout(() => {
      onClose();
    }, 1);
  };
  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FaWindowClose className={styles.close} onClick={handleClose} />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

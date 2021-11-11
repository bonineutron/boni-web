import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";

export default function Modal(props) {
  const { onClose, show, children } = props;
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleClose = () => {
    console.log("dhbfoijhasdgf");
    onClose();
  };
  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={onClose()}>
            <button className="btn">close</button>
          </a>
        </div>
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

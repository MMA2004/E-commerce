import React from "react";
import styles from "./ModalWindow.module.css";

const Modal = ({ children, onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}><i className="bi bi-x-circle"></i></button>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

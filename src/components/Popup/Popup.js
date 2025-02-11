import React from "react";
import styles from "./Popup.module.css";

const Popup = (props) => {
  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <span className={styles.close_icon} onClick={props.handleClose}>
          x
        </span>
        <div className={styles.popup_content}> {props.content}</div>
      </div>
    </div>
  );
};

export default Popup;

import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Create New Office</h2>
        <div>
          <label>
            Title:
            <input className={styles.input} type="text" />
          </label>
        </div>
        <div className={styles.textContainer}>
          <textarea className={styles.textarea}></textarea>
        </div>
        <div>
          <label>
            Location:
            <input className={styles.input} />
          </label>
          <label>
            Capacity:
            <input className={styles.input} />
          </label>
          <label>
            Year Built:
            <input className={styles.input} />
          </label>
        </div>
        <button className={styles.button}>Create</button>
      </div>
    </div>
  );
};

export default page;

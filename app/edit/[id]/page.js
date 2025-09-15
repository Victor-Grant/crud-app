"use client";
import React from "react";
import styles from "./page.module.css";
import data from "@/public/utils";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  const { id } = React.use(params);
  const [office, setOffice] = useState();

  useEffect(() => {
    const _office = data.find((item) => item.id === Number(id));
    setOffice(_office);
  });

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Edit Office</h2>
        <div>
          <label>
            Title:
            <input
              className={styles.input}
              value={office && office.title}
              type="text"
            />
          </label>
        </div>
        <div className={styles.textContainer}>
          <textarea
            className={styles.textarea}
            value={office && office.description}
          ></textarea>
        </div>
        <div>
          <label>
            Location:
            <input className={styles.input} value={office && office.location} />
          </label>
          <label>
            Capacity:
            <input className={styles.input} value={office && office.capacity} />
          </label>
          <label>
            Year Built:
            <input
              className={styles.input}
              value={office && office["year-built"]}
            />
          </label>
        </div>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default page;

//0204082652 Abigail

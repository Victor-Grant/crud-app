"use client";
import React from "react";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  const { id } = React.use(params);
  const [office, setOffice] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("office"));
    const _office = data.find((item) => item.id == Number(id));
    setOffice(_office);
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{office && office.title}</h2>
      <div style={{ height: 2, width: "100%", backgroundColor: "black" }}></div>
      <p className={styles.description}>{office && office.description}</p>
      <div style={{ height: 2, width: "100%", backgroundColor: "black" }}></div>
      <div className={styles.featuresBox}>
        <h3>Office Features</h3>
        <h4>Location: {office && office.location}</h4>
        <h4>Capacity: {office && office.capacity}</h4>
        <h4>Year Built: {office && office["year-built"]}</h4>
      </div>
    </div>
  );
};

export default page;

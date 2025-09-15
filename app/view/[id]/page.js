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
    console.log(_office);
  });
  return (
    <div className={styles.container}>
      <h2>{office && office.title}</h2>
      <p>{office && office.description}</p>
      <div>
        <h3>Office Features</h3>
        <h4>Location: {office && office.location}</h4>
        <h4>Capacity: {office && office.capacity}</h4>
        <h4>Year Built: {office && office["year-built"]}</h4>
      </div>
    </div>
  );
};

export default page;

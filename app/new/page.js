"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [year, setYear] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const locationChange = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const capacityChange = (e) => {
    setCapacity(e.target.value);
    console.log(capacity);
  };
  const yearChange = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  const createOffice = () => {
    try {
      const data = JSON.parse(localStorage.getItem("office"));
      const dat = {
        id: data.length,
        title: title,
        description: description,
        location: location,
        capacity: capacity,
        "year-built": year,
        wifi: true,
      };
      data.push(dat);
      localStorage.setItem("office", JSON.stringify(data));
      alert("Office Created Successfully");
    } catch (error) {
      alert("Could not create product, something went wrong");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Create New Office</h2>
        <div>
          <label>
            Title:
            <input
              className={styles.input}
              onChange={titleChange}
              value={title}
              type="text"
            />
          </label>
        </div>
        <div className={styles.textContainer}>
          <textarea
            value={description}
            onChange={descriptionChange}
            className={styles.textarea}
          ></textarea>
        </div>
        <div>
          <label>
            Location:
            <input
              value={location}
              onChange={locationChange}
              className={styles.input}
            />
          </label>
          <label>
            Capacity:
            <input
              value={capacity}
              onChange={capacityChange}
              className={styles.input}
            />
          </label>
          <label>
            Year Built:
            <input
              value={year}
              onChange={yearChange}
              className={styles.input}
            />
          </label>
        </div>
        <button onClick={createOffice} className={styles.button}>
          Create
        </button>
      </div>
    </div>
  );
};

export default page;

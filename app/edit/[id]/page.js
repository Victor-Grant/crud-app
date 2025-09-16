"use client";
import React from "react";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  const { id } = React.use(params);
  const [office, setOffice] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("office"));
    const _office = data.find((item) => item.id === Number(id));
    setTitle(_office.title);
    setDescription(_office.description);
    setLocation(_office.location);
    setCapacity(_office.capacity);
    setYear(_office["year-built"]);
  }, []);

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

  const edit = () => {
    try {
      const arr = JSON.parse(localStorage.getItem("office"));
      arr[Number(id) - 1].title = title;
      arr[Number(id) - 1].capacity = capacity;
      arr[Number(id) - 1].description = description;
      arr[Number(id) - 1].location = location;
      arr[Number(id) - 1]["year-built"] = year;
      localStorage.setItem("office", JSON.stringify(arr));
      alert("Office Updated Successfully");
    } catch (error) {
      alert("Could not update office");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Edit Office</h2>
        <div>
          <label>
            Title:
            <input
              className={styles.input}
              value={title}
              type="text"
              onChange={titleChange}
            />
          </label>
        </div>
        <div className={styles.textContainer}>
          <textarea
            className={styles.textarea}
            value={description}
            onChange={descriptionChange}
          ></textarea>
        </div>
        <div>
          <label>
            Location:
            <input
              className={styles.input}
              onChange={locationChange}
              value={location}
            />
          </label>
          <label>
            Capacity:
            <input
              className={styles.input}
              onChange={capacityChange}
              value={capacity}
            />
          </label>
          <label>
            Year Built:
            <input
              className={styles.input}
              value={year}
              onChange={yearChange}
            />
          </label>
        </div>
        <button onClick={edit} className={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;

//0204082652 Abigail

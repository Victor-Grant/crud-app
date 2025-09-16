"use client";
import Image from "next/image";
import styles from "./page.module.css";
import OfficeCard from "@/components/office_card";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("office")));
  }, []);
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <OfficeCard
            title={item.title}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

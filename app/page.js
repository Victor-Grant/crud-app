"use client";
import Image from "next/image";
import styles from "./page.module.css";
import OfficeCard from "@/components/office_card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("office")));
  }, []);
  const refreshFunc = () => {
    router.refresh();
  };
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <OfficeCard
            title={item.title}
            description={item.description}
            id={item.id}
            key={item.id}
            refresh={refreshFunc}
          />
        );
      })}
    </div>
  );
}

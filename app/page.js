import Image from "next/image";
import styles from "./page.module.css";
import OfficeCard from "@/components/office_card";
import data from "@/public/utils";

export default function Home() {
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

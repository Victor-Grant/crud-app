import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>OfficeX</div>
      <Link href={"/new"} className={styles.button}>
        New Office
      </Link>
    </div>
  );
};

export default Header;

import React from "react";
import styles from "./office_card.module.css";
import Link from "next/link";

const OfficeCard = ({ title, description, id }) => {
  const deleteOffice = () => {
    const result = confirm("Are you sure you want to delete this office");
    if (result) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  };
  return (
    <Link className={styles.link} href={`/view/${id}`}>
      <div className={styles.container}>
        <div>{title}</div>
        <div>{description}</div>
        <div className={styles.icons}>
          <Link href={`/edit/${id}`}>
            <div className={styles.edit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                fill="#ffbd59"
                viewBox="0 0 640 640"
              >
                <path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z" />
              </svg>
            </div>
          </Link>
          <Link href="">
            <button className={styles.button} onClick={deleteOffice}>
              <div className={styles.delete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  fill="#ff3131"
                  viewBox="0 0 640 640"
                >
                  <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default OfficeCard;

import React, { useState } from "react";
import styles from "./card.module.css";

function Card({ data }) {
  const [open, setOpen] = useState(false);

  function moreDetailsHandler() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <li className={`${styles.listItem} ${!open && styles.listItem_hidden}`}>
      <div className={styles.listItem__contacts}>
        {data?.employer.logo_urls !== null && (
          <img
            className={styles.listItem__logo}
            src={data.employer.logo_urls.original}
            alt="vacancies logo"
          ></img>
        )}
        <p className={styles.listItem__contact}>
          <span className={`${styles.listItem__contact} ${styles.colorGrey}`}>
            Form:{" "}
          </span>
          {data.schedule.id}
        </p>
        <p className={styles.listItem__contact}>
          <span className={`${styles.listItem__contact} ${styles.colorGrey}`}>
            Company:{" "}
          </span>
          {data.employer.name}
        </p>
        <p className={styles.listItem__contact}>
          <span className={`${styles.listItem__contact} ${styles.colorGrey}`}>
            Web:{" "}
          </span>
          {data.alternate_url}
        </p>
        <p className={styles.listItem__contact}>
          <span className={`${styles.listItem__contact} ${styles.colorGrey}`}>
            Address:{" "}
          </span>
          {data?.address !== null ? data?.address.city : "none"}
        </p>
      </div>

      <div className={styles.listItem__description}>
        <p className={styles.vacanciesTitle}>{data.name}</p>
        <p className={styles.vacanciesText}>
          {data.snippet.requirement}
          {data.snippet.requirement}
          {data.snippet.requirement}
          {data.snippet.requirement}
          {data.snippet.requirement}
        </p>
        <p className={styles.vacanciesText}>
          {data.snippet.responsibility}
          {data.snippet.responsibility}
          {data.snippet.responsibility}
          {data.snippet.responsibility}
          {data.snippet.responsibility}
        </p>
        <button
          className={`${styles.addButton} ${open && styles.addButton_opened}`}
          onClick={moreDetailsHandler}
        >
          {!open ? `more details` : `close`}
        </button>
      </div>
    </li>
  );
}

export default Card;

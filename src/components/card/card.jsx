import React from "react";
import styles from "./card.module.css";

function Card({ data }) {
  return (
    <li>
      <div>
        {data?.employer.logo_urls !== null && (
          <img
            src={data.employer.logo_urls.original}
            alt=""
            width="200"
            height="200"
          ></img>
        )}
        <p>
          <span>Form: </span>
          {data.schedule.id}
        </p>
        <p>
          <span>Company: </span>
          {data.employer.name}
        </p>
        <p>
          <span>Web: </span>
          {data.alternate_url}
        </p>
        <p>
          <span>Address: </span>
          {data?.address !== null ? data?.address.city : "none"}
        </p>
      </div>
      <div className={styles.description}>
        <p>{data.name}</p>
        <p>{data.snippet.requirement}</p>
        <p>{data.snippet.responsibility}</p>
      </div>
    </li>
  );
}

export default Card;

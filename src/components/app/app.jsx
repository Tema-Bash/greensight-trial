import React, { useEffect, useState } from "react";
import List from "../list/list";
import styles from "./app.module.css";
import { getVacanciesArr } from "../../services/slices/vacancies";
import { useDispatch, useSelector } from "react-redux";
import Feedback from "./../feedback/feedback";

function App() {
  const dispatch = useDispatch();
  const { vacanciesArr } = useSelector((store) => store.vacancies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getVacanciesArr());
  }, [dispatch]);

  useEffect(() => {
    if (vacanciesArr) {
      setIsLoading(false);
    }
  }, [vacanciesArr]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>List of vacancies</h1>
      <List />
      <Feedback />
    </div>
  );
}

export default App;

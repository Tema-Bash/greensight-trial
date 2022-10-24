import React, { useState, useEffect } from "react";
import styles from "./list.module.css";
import CrossButton from "./../../assets/Cross.png";
import { useDispatch, useSelector } from "react-redux";
import Card from "./../card/card";
import Button from "../button/button";

function List() {
  const { vacanciesArr } = useSelector((store) => store.vacancies);
  const [itemsLimit, setItemsLimit] = useState(5);
  const [filterCondition, setFilterCondition] = useState("all");
  const [showMoreVisible, setShowMoreVisible] = useState(true);

  let counter = 0;
  let FullArrlength = 0;
  let halfArrlength = 0;
  let partArrlength = 0;

  if (vacanciesArr) {
    FullArrlength = vacanciesArr.items.filter(
      (item) => item.schedule.id === "fullDay"
    ).length;
    halfArrlength = vacanciesArr.items.filter(
      (item) => item.schedule.id === "flexible"
    ).length;
    partArrlength = vacanciesArr.items.filter(
      (item) => item.schedule.id === "remote"
    ).length;
  }

  function onChangeFilterHandle(event) {
    setFilterCondition(event.target.value);
    setItemsLimit(5);
    setShowMoreVisible(true);
    counter = 0;
  }

  useEffect(() => {
    showMoreVisibilityCheck();
  }, [filterCondition, itemsLimit]);

  function showMoreVisibilityCheck() {
    switch (filterCondition) {
      case "full":
        if (counter === FullArrlength) {
          setShowMoreVisible(false);
        }
        break;
      case "half":
        if (counter === halfArrlength) {
          setShowMoreVisible(false);
        }
        break;
      case "part":
        if (counter === partArrlength) {
          setShowMoreVisible(false);
        }
        break;
      default:
        break;
    }
  }

  function showMoreHandler() {
    setItemsLimit(itemsLimit + 5);
  }

  function onClearHandle() {
    setFilterCondition("all");
  }

  return (
    <div className={styles.container}>
      <div className={styles.fildset}>
        <select
          name="employment"
          className={styles.select}
          onChange={onChangeFilterHandle}
          defaultValue=""
        >
          <option value="" disabled hidden>
            Not selected
          </option>
          <option value="full">Full time</option>
          <option value="half">Half time</option>
          <option value="part">Part time</option>
        </select>
        <label htmlFor="Position">Position</label>
        <input
          type="text"
          id="Position"
          name="jobPosition"
          placeholder="Unspecified"
        />
        <button onClick={onClearHandle}>
          Clear sorting <img src={CrossButton} alt="" />
        </button>
      </div>
      <ul>
        {vacanciesArr.items.length > 0 &&
          vacanciesArr.items.map((item, i) => {
            if (filterCondition === "full" && item.schedule.id === "fullDay") {
              while (counter < itemsLimit) {
                counter++;
                return <Card data={item} key={i} />;
              }
            }
            if (filterCondition === "half" && item.schedule.id === "flexible") {
              while (counter < itemsLimit) {
                counter++;
                return <Card data={item} key={i} />;
              }
            }
            if (filterCondition === "part" && item.schedule.id === "remote") {
              while (counter < itemsLimit) {
                counter++;
                return <Card data={item} key={i} />;
              }
            }
            if (filterCondition === "all") {
              while (counter < itemsLimit) {
                counter++;
                return <Card data={item} key={i} />;
              }
            }
          })}
      </ul>
      {showMoreVisible && (
        <Button text={"Show more"} onClick={showMoreHandler} />
      )}
    </div>
  );
}

export default List;

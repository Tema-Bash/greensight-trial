import React, { useState, useEffect } from "react";
import CrossButton from "./../../img/svg/cross.svg";
import { useSelector } from "react-redux";
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
                setShowMoreVisible(true);
                break;
        }
    }

    function showMoreHandler() {
        setItemsLimit(itemsLimit + 5);
    }

    function onClearHandle() {
        setFilterCondition("all");
        setItemsLimit(5);
        counter = 0;
    }

    return (
        <div className="list">
            <div className="list__fildset">
                <div className="list__unit">
                    <label className="list__label" htmlFor="form-select">
                        Form
                    </label>
                    <select
                        className={
                            filterCondition !== "all"
                                ? "list__select"
                                : "list__select list__select_color_grey"
                        }
                        id="form-select"
                        name="employment"
                        onChange={onChangeFilterHandle}
                        value={filterCondition}
                    >
                        <option value="all" disabled hidden>
                            Not selected
                        </option>
                        <option value="full">Full time</option>
                        <option value="half">Half time</option>
                        <option value="part">Part time</option>
                    </select>
                </div>
                <div className="list__unit">
                    <label htmlFor="Position" className="list__label">
                        Position
                    </label>
                    <input
                        className="list__inputField"
                        type="text"
                        id="Position"
                        placeholder="Unspecified"
                    />
                </div>
                <button className="list__clearButton" onClick={onClearHandle}>
                    Clear sorting
                    <img className="list__closeIcon" src={CrossButton} alt="" />
                </button>
            </div>
            <ul className="list__vacanciesList">
                {vacanciesArr.items.length > 0 &&
                    vacanciesArr.items.map((item, i) => {
                        if (
                            filterCondition === "full" &&
                            item.schedule.id === "fullDay"
                        ) {
                            while (counter < itemsLimit) {
                                counter++;
                                return <Card data={item} key={i} />;
                            }
                        }
                        if (
                            filterCondition === "half" &&
                            item.schedule.id === "flexible"
                        ) {
                            while (counter < itemsLimit) {
                                counter++;
                                return <Card data={item} key={i} />;
                            }
                        }
                        if (
                            filterCondition === "part" &&
                            item.schedule.id === "remote"
                        ) {
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
            {showMoreVisible && itemsLimit !== 20 && (
                <Button
                    text={"Show more"}
                    onClick={showMoreHandler}
                    extraClass="list__showMoreButton"
                />
            )}
        </div>
    );
}

export default List;

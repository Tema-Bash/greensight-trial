import React, { useState } from "react";

function Card({ data }) {
    const [open, setOpen] = useState(false);

    function moreDetailsHandler() {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <li className={`card ${!open && "card_visibility_hidden"}`}>
            <div className="card__contacts">
                <div className="card__logoContainer">
                    {data?.employer.logo_urls !== null && (
                        <img
                            className="card__logo"
                            src={data.employer.logo_urls?.original}
                            alt="vacancies logo"
                        ></img>
                    )}
                </div>
                <p className="card__contact">
                    <span className="card__contact card__contact_color_grey">
                        Form:{" "}
                    </span>
                    {data.schedule.id}
                </p>
                <p className="card__contact">
                    <span className="card__contact card__contact_color_grey">
                        Company:{" "}
                    </span>
                    {data.employer.name}
                </p>
                <p className="card__contact">
                    <span className="card__contact card__contact_color_grey">
                        Web:{" "}
                    </span>
                    {data.alternate_url}
                </p>
                <p className="card__contact">
                    <span className="card__contact card__contact_color_grey">
                        Address:{" "}
                    </span>
                    {data?.address !== null ? data?.address.city : "none"}
                </p>
            </div>

            <div className="card__description">
                <p className="card__vacanciesTitle">{data.name}</p>
                <p className="card__vacanciesText">
                    {data.snippet.requirement}
                    {data.snippet.requirement}
                    {data.snippet.requirement}
                    {data.snippet.requirement}
                    {data.snippet.requirement}
                </p>
                <p className="card__vacanciesText">
                    {data.snippet.responsibility}
                    {data.snippet.responsibility}
                    {data.snippet.responsibility}
                    {data.snippet.responsibility}
                    {data.snippet.responsibility}
                </p>
                <button
                    className={`card__addButton ${
                        open && "card__addButton_opened"
                    }`}
                    onClick={moreDetailsHandler}
                >
                    {!open ? `more details` : `close`}
                </button>
            </div>
        </li>
    );
}

export default Card;

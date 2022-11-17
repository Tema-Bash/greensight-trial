import React, { useState } from "react";
import Button from "../button/button";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const digitsReg = /^\d+$/;
  const formatPhone = (event) => {
    if (!event.nativeEvent.data) {
      return;
    }

    const digits = event.target.value
      .split("")
      .filter((str) => digitsReg.test(str));
    let formatted = "+";

    digits.forEach((digit, idx) => {
      if (idx > 10) {
        return;
      }

      formatted += digit;

      if (idx === 0) {
        formatted += "(";
      }
      if (idx === 3) {
        formatted += ")";
      }
      if (idx === 6 || idx === 8) {
        formatted += "-";
      }
    });

    event.target.value = formatted;
    setPhone(formatted);
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Name: ${name}\nEmail: ${email}\nPhone number: ${phone}\nComment: ${comment}`
    );
  }

  return (
    <div className="feedback">
      <h2 className="feedback__title">Leave a request</h2>
      <div className="feedback__container">
        <div className="feedback__request-form">
          <form
            className="feedback__form"
            id="requestForm"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="feedback__unit">
              <label className="feedback__label" htmlFor="name">
                Your name
              </label>
              <input
                className="feedback__input-field"
                id="name"
                type="text"
                name="name"
                placeholder="Please introduce yourself"
                onInput={(event) => setName(event.target.value)}
                defaultValue={name}
                required
              />
            </div>
            <div className="feedback__unit">
              <label className="feedback__label" htmlFor="email">
                Email
              </label>
              <input
                className="feedback__input-field"
                id="email"
                name="email"
                type="email"
                placeholder="ivanov@mail.ru"
                defaultValue={email}
                onInput={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="feedback__unit">
              <label className="feedback__label" htmlFor="contact-number">
                Phone number
              </label>
              <input
                className="feedback__input-field"
                id="contact-number"
                name="contact-number"
                pattern="\+7\(\d{3}\)\d{3}[-]\d{2}[-]\d{2}"
                type="tel"
                defaultValue={phone}
                onInput={(event) => formatPhone(event)}
                placeholder="+7(999)123-45-78"
                required
              />
            </div>
            <div className="feedback__unit">
              <label className="feedback__label" htmlFor="comment">
                Comment
              </label>
              <input
                className="feedback__input-field"
                id="comment"
                name="comment"
                type="text"
                placeholder="Message text"
                defaultValue={comment}
                onInput={(event) => setComment(event.target.value)}
              />
            </div>
          </form>
          <Button
            text="Send"
            form="requestForm"
            type="submit"
            extraClass="feedback__submit-button"
          />
          <p className="feedback__agreement-text">
            By clicking "Send" you confirm your consent to the
            <span className="feedback__underline">
              {" "}
              processing of personal data
            </span>
          </p>
        </div>
        <div className="feedback__contacts">
          <p className="feedback__text">
            We will advise you and help you start a new project
          </p>
          <div className="feedback__greensight-contacts">
            <p className="feedback__text feedback__text--bold">
              +7 499 391-66-69
            </p>
            <p className="feedback__text feedback__text--bold">
              mail@greensight.ru
            </p>
          </div>
          <div className="feedback__greensight-address">
            <p className="feedback__text">
              Moscow, Zelenograd, Central Ave.,
              <br /> bldg. 305, 3rd floor
            </p>
            <p className="feedback__text">How to get there?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

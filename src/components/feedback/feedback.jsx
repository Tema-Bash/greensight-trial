import React from "react";
import Button from "../button/button";

function Feedback() {
  const digitsReg = /^\d+$/;

  const formatPhone = (event, field) => {
    // Пустая data ввода не интересует, скорее всего это delete или backspace
    if (!event.data) {
      return;
    }

    const digits = field.value.split("").filter((s) => digitsReg.test(s));

    let formatted = "+";

    digits.forEach((digit, idx) => {
      if (idx > 10) {
        return;
      }

      formatted += digit;

      if (idx === 0) {
        formatted += " (";
      }
      if (idx === 3) {
        formatted += ") ";
      }
      if (idx === 6 || idx === 8) {
        formatted += "-";
      }
    });

    field.value = formatted;
  };

  return (
    <div>
      <div className="column1">
        <h2>Leave a request</h2>
        <form action="">
          <div className="form__unit">
            <label className="form__label" htmlFor="cafe-name">
              Your name
            </label>
            <input
              className="form__field"
              id="cafe-name"
              type="text"
              name="cafe-name"
              placeholder="Please introduce yourself"
              value=""
            />
          </div>

          <div className="form__unit">
            <label className="form__label" htmlFor="cafe-address">
              Email
            </label>
            <input
              className="form__field"
              id="cafe-address"
              name="cafe-address"
              type="email"
              placeholder="ivanov@mail.ru"
              value=""
            />
          </div>

          <div className="form__unit">
            <label className="form__label" htmlFor="contact-number">
              Phone number
            </label>
            <input
              className="form__field"
              id="contact-number"
              name="contact-number"
              type="tel"
              value="+7 ("
              //oninput={formatPhone(event, this)}
              placeholder="+7(999)123-45-78"
            />
          </div>
          <div className="form__unit">
            <label className="form__label" htmlFor="comment">
              Comment
            </label>
            <input
              className="form__field"
              id="comment"
              name="cafe-address"
              type="text"
              placeholder="Message text"
              value=""
            />
          </div>
        </form>
        <Button text={"Send"} type="submit" />
        <p>
          By clicking "Send" you confirm your consent to the
          <span> processing of personal data</span>
        </p>
      </div>
      <div className="column2">
        <p>We will advise you and help you start a new project</p>
        <div>
          <p>+7 499 391-66-69</p>
          <p>mail@greensight.ru</p>
        </div>
        <div>
          <p>Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor</p>
          <p>How to get there?</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

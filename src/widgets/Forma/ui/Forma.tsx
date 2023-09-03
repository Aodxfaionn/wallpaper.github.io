import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "./forma.css";
import { Button } from "shared";
import { Text } from "shared/ui/Text/Text";
import { useValidate } from "../lib/useValidate";
import formImg from "../../../assets/images/form.png";

function Forma() {
const validate = useValidate();
  return (
    <section className="container form">
      <h2 className="title">Оставьте заявку</h2>
      <p className="desc">
        Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и
        ответит на все интересующие вопросы.
      </p>
      <Formik
        initialValues={{ name: "", tel: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form__form">
              <div className="form__field">
                <label htmlFor="name" className="form__name">
                  Ваше имя:
                </label>
                <Field
                  type="text"
                  name="name"
                  className="input"
                  validate={validate.handleNameChange}
                />
                {errors.name && touched.name && (
                  <p className="form__error">{errors.name}</p>
                )}
              </div>
              <div className="form__field">
                <label htmlFor="tel" className="form__name">
                  Ваш телефон:
                </label>
                <Field
                  type="tel"
                  name="tel"
                  className="input"
                  validate={validate.handlePhoneChange}
                />
                {errors.tel && touched.tel && (
                  <p className="form__error">{errors.tel}</p>
                )}
              </div>
            </div>
            <Button text="Оставить заявку" />
            <Text
              desc="Нажимая «отправить», я даю согласие
на обработку персональных данных"
              style="consent"
            />
          </Form>
        )}
      </Formik>
      <img src={formImg} alt="Forma" className="form__img" />
    </section>
  );
}

export default Forma;

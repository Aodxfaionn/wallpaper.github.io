import React from "react";
import { Formik, Form, Field } from "formik";
import "./product.css";
import Path from "widgets/Path/ui/Path";
import { Text } from "shared/ui/Text/Text";
import Accordeon from "widgets/Accordeon/ui/Accordeon";
import { Button } from "shared";
import { questions } from "../model/arrForProduct";
import { useValidate } from "widgets/Forma/lib/useValidate";
import popular2 from "../../../assets/images/main/popular2.jpg";
import formImg from "../../../assets/images/form.png";

function Product() {
  const validate = useValidate();
  return (
    <>
      <Path page="Каталог" link="catalog" pageLevel="Floraison" />
      <div className="product container">
        <div className="productPhoto">
          <img src={popular2} alt="Floraison" />
        </div>
        <Text title="Florasion" style="productInfo">
          <p className="desc">Аритикул: 11039</p>
          <p>
            Но базовый вектор развития влечет за собой процесс внедрения и
            модернизации соответствующих условий активизации. В целом, конечно,
            сплочённость команды профессионалов требует определения и уточнения
            поставленных обществом задач.
          </p>
          <p className="productInfo__price">
            2 552 ₽ <span className="productInfo__price-metr">552 ₽ / м2</span>
          </p>
          <div className="communicate">
            <a href="tel:+75558889866" className="communicate__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M17.4491 13.0673L16.7001 16.2197C16.6064 16.6879 16.2319 17 15.7637 17C7.89838 16.9688 1.5 10.5704 1.5 2.70508C1.5 2.23691 1.7809 1.86237 2.24908 1.76873L5.40145 1.01966C5.83841 0.926021 6.30659 1.17571 6.49386 1.58147L7.9608 4.98353C8.11686 5.38928 8.02323 5.85746 7.6799 6.10715L5.99447 7.48046C7.05567 9.63406 8.80352 11.3819 10.9883 12.4431L12.3616 10.7577C12.6113 10.4456 13.0795 10.3207 13.4853 10.4768L16.8873 11.9437C17.2931 12.1622 17.5428 12.6304 17.4491 13.0673Z"
                  fill="black"
                />
              </svg>
              Требуется консультация
            </a>
          </div>
        </Text>
      </div>
      <Accordeon arr={questions} />
      <section className="container form form-product">
        <h2 className="title">Для оформления заказа заполните данные:</h2>
        <Formik
          initialValues={{ name: "", tel: "", articul: "", metr: "" }}
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
                <div>
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
                <div>
                  {" "}
                  <div className="form__field">
                    <label htmlFor="articul" className="form__name">
                      Артикул
                    </label>
                    <Field
                      type="text"
                      name="articul"
                      className="input"
                      validate={validate.handleNumberChange}
                    />
                    {errors.name && touched.name && (
                      <p className="form__error">{errors.articul}</p>
                    )}
                  </div>
                  <div className="form__field">
                    <label htmlFor="metr" className="form__name">
                      Метраж:
                    </label>
                    <Field
                      type="text"
                      name="metr"
                      className="input"
                      validate={validate.handleNumberChange}
                    />
                    {errors.name && touched.name && (
                      <p className="form__error">{errors.metr}</p>
                    )}
                  </div>
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
    </>
  );
}

export default Product;

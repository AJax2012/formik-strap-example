import React from "react";
import { Formik, Form } from "formik";
import { Col, Container, Row } from "reactstrap";
import { Field, Submit } from "formik-strap";
import { schema } from "./schema";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

const states = require("./data/states.json");

const App = () => (
  <Container className="App my-5">
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        age: 0,
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        terms: false
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submitting...");
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1500);
      }}
    >
      <Form className="text-left">
        <Row>
          <Col md={4}>
            <Field name="firstName" withLoading />
          </Col>
          <Col md={4}>
            <Field name="lastName" withLoading />
          </Col>
          <Col md={4}>
            <Field name="email" withLoading />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Field name="username" withLoading />
          </Col>
          <Col md={4}>
            <Field name="age" type="number" withLoading />
          </Col>
        </Row>
        <Row>
          <Field name="street1" withLoading />
        </Row>
        <Row>
          <Field name="street2" withLoading />
        </Row>
        <Row>
          <Col md={6}>
            <Field name="city" withLoading />
          </Col>
          <Col md={2}>
            <Field name="state" type="select" withLoading>
              <option>---</option>
              {(states ?? []).map((state) => (
                <option value={state.name} key={state.abbreviation}>
                  {state.abbreviation}
                </option>
              ))}
            </Field>
          </Col>
          <Col md={4}>
            <Field name="zip" withLoading />
          </Col>
        </Row>
        <Row>
          <Col>
            <Field
              labelText="I accept the terms and conditions"
              name="terms"
              type="checkbox"
              withLoading
            />
          </Col>
        </Row>
        <Submit withSpinner>Submit</Submit>
      </Form>
    </Formik>
  </Container>
);

export default App;

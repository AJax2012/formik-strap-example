import React from "react";
import { Formik, Form } from "formik";
import { Col, Container, FormGroup, FormText, Label, Row } from "reactstrap";
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
        username: "",
        email: "",
        password: "",
        imageSrc: "",
        website: "",
        color: "",
        birthDate: "",
        gimmeATime: "",
        height: 0,
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        reason: "",
        terms: false,
        newsletter: "no"
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
      {({ values }) => (
        <Form className="text-left">
          <Row>
            <Col md={6}>
              <Field name="firstName" withLoading />
            </Col>
            <Col md={6}>
              <Field name="lastName" withLoading />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Field name="username" withLoading />
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Field name="email" withLoading withTemplate={false} />
                <FormText className="d-block">
                  We will never give away your information.
                </FormText>
                <FormText>
                  Also, this form doesn't submit to anywhere...
                </FormText>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Field name="password" type="password" withLoading />
            </Col>
            <Col md={6}>
              <Field name="imageSrc" type="file" withLoading />
            </Col>
          </Row>
          <Row>
            <Col>
              <Field
                name="website"
                labelText="Personal Website URL"
                type="url"
                withLoading
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup row>
                <Col sm={3}>
                  <Label for="color">Favorite Color:</Label>
                </Col>
                <Col sm={9}>
                  <Field
                    name="color"
                    type="color"
                    withLoading
                    withTemplate={false}
                  />
                </Col>
                <FormText>
                  For the record, this is now how I would normally do this. Just
                  wanted an example of an inline field ;)
                </FormText>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Field name="birthDate" type="date" withLoading />
            </Col>
            <Col md={4}>
              <Field name="gimmeATime" type="time" withLoading />
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="height">Height (in inches)</Label>
                <Field
                  name="height"
                  type="number"
                  withLoading
                  withTemplate={false}
                />
              </FormGroup>
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
                type="textarea"
                name="reason"
                labelText="Why do you want to join?"
                withLoading
              />
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
          <Row>
            <FormGroup tag="fieldset">
              <Field
                name="newsletter"
                value="daily"
                type="radio"
                labelText="daily"
                withLoading
              />
              <Field
                name="newsletter"
                value="weekly"
                type="radio"
                labelText="weekly"
                withLoading
              />
              <Field
                name="newsletter"
                value="no"
                type="radio"
                labelText="No thanks"
                checked={values.newsletter === "no"}
                withLoading
              />
            </FormGroup>
          </Row>
          <Submit withSpinner>Submit</Submit>
        </Form>
      )}
    </Formik>
  </Container>
);

export default App;

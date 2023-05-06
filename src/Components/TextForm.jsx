import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/textform.css";

function TextForm() {
  return (
    <Container className="text-area">
      <Form className=" upper-text-box">
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Input your fake news here:</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <div className="btn-submit text-center p-3">
          <Button
            variant="primary"
            className="btn btn-secondary align-center"
            type="submit"
          >
            Detect
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default TextForm;

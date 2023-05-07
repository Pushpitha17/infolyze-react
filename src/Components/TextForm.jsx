import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/textform.css";

const positive_color = "142, 68, 173";
const negative_color = "241, 196, 15";

function TextForm() {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");
  const [output, setOutput] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // let res = await fetch('http://localhost:8000/check-news/' ,{
    //   method : "POST",
    //   body: JSON.stringify({
    //     news : text
    //   })
    // })

    // res = res.json()

    // const returnArr = res.Lime.values

    const returnArr = [
      {
        word: "papa",
        value: -0.3841891428908649,
      },
      {
        word: "founder",
        value: -0.47777590215789663,
      },
      {
        word: "john",
        value: -0.67308782292357992,
      },
      {
        word: "business",
        value: -0.06862975601143952,
      },
      {
        word: "retires",
        value: 0.06019043104569669,
      },
      {
        word: "bad",
        value: -0.043811069909434903,
      },
      {
        word: "figures",
        value: 0.02393625461356164,
      },
      {
        word: "racism",
        value: -0.005205899517261152,
      },
      {
        word: "s",
        value: -0.00017025556405283424,
      },
    ];

    setOutput(returnArr);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setOutput([]);
    setText("");
    setSubmitted(false);
  };

  console.log(submitted);

  return (
    <Container className="text-area">
      <Form className=" upper-text-box">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Input your fake news here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={text}
            onChange={handleTextChange}
          />
        </Form.Group>
        {submitted ? (
          <div>
            {output.map((item, i) => (
              <span
                key={i}
                style={{
                  marginLeft: "5px",
                  padding: "0 2px",
                  backgroundColor: `rgba(${
                    item.value > 0 ? positive_color : negative_color
                  }, ${Math.abs(item.value)})`,
                }}
              >
                {item.word}
              </span>
            ))}
          </div>
        ) : null}
        <div className="btn-submit text-center p-3">
          {!submitted ? (
            <Button
              variant="secondary"
              className="btn align-center"
              type="submit"
              onClick={handleSubmit}
            >
              Detect
            </Button>
          ) : (
            <Button
              variant="danger"
              className="btn align-center"
              onClick={handleClear}
            >
              Clear
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
}

export default TextForm;

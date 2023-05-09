import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../Styles/textform.css";
import Alert from "react-bootstrap/Alert";

const positive_color = "142, 68, 173";
const negative_color = "241, 196, 15";

function TextForm() {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFake, setIsfake] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);

    let res = await fetch("http://localhost:8000/check-news/", {
      method: "POST",
      body: JSON.stringify({
        news: text,
      }),
    });

    res = await res.json();
    console.log("I'm here");
    console.log(res);

    const returnArr = res["Lime"]["values"];
    const impact = res["impact"];

    setIsfake(impact);
    setOutput(returnArr);
    setLoading(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setOutput(null);
    setText("");
    setSubmitted(false);
    setIsfake(null);
    setLoading(false);
  };

  return (
    <Container className="text-area">
      <Form className=" upper-text-box">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Input your fake news here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="මෙම කොටුව තුළ ඔබගේ සිංහල වාක්‍යය යොදන්න"
            value={text}
            onChange={handleTextChange}
          />
        </Form.Group>
        {submitted
          ? output && (
              <>
                <div>
                  <Alert variant={isFake ? "danger" : "success"}>
                    This is a {isFake ? "Fake" : "Real"} News!
                  </Alert>
                </div>
                <div>
                  {output.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        marginLeft: "5px",
                        padding: "0 2px",
                        backgroundColor: `rgba(${
                          item.value > 0 ? positive_color : negative_color
                        }, ${Math.abs(item.value) / 100})`,
                      }}
                    >
                      {item.word}
                    </span>
                  ))}
                </div>
              </>
            )
          : null}
        <div className="btn-submit text-center p-3">
          {!submitted ? (
            <Button
              variant="secondary"
              className="btn align-center"
              type="submit"
              onClick={handleSubmit}
            >
              {!loading ? "Detect" : <Spinner animation="border" />}
            </Button>
          ) : null}
          {submitted && !loading ? (
            <Button
              variant="danger"
              className="btn align-center"
              onClick={handleClear}
            >
              Clear
            </Button>
          ) : null}
        </div>
      </Form>
    </Container>
  );
}

export default TextForm;

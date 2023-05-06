import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/home.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="banner-section">
          <div className="banner-content-container">
            <div className="banner-content">
              <div className="banner-text">
                <h1 className="display-4 font-weight-bold">Infolyze</h1>
                <p className="lead font-weight-normal">
                  Sinhala Fake News Detection Tool
                </p>
              </div>
              <Link to="/demo">
                <button className="banner-btn">Try It Out!</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Container>
            <div className="sub-text">Check Your News True or Fake using 3 Steps!</div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;

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
                <p className="lead font-weight-normal">
                 සිංහල අසත්‍ය තොරතුරු තහවුරු කිරීමේ යෙදවුම.
                </p>
              </div>
              <Link to="/demo">
                <button className="banner-btn">Try It Out!</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="title-1">
          <Container>
            <div className="sub-text">Check Your News True or Fake using 2 Steps!</div>
          </Container>
        </div>
      </div>
      <footer className="footer">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <p>© 2023 Infolyze. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Home;

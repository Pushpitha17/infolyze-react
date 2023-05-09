import React from "react";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="about-section">
          <h2 className="about-title">About</h2>
          <p className="about-paragraph">
              Infolyze will allow you to detect Sinhala and English fake news in Articles. You only need to enter your News in the text box and our backend will do the process and will detect it weather it is fake or not.
              For Sinhala Language it will translate the sentence using google translater.
            </p>
        </div>
       
      </div>
      
    </>
  );
}

export default About;
import React, { useState } from "react";
import "./steps.css"; // Import CSS file for styling

function Steps(props) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-container">
      <span className="faq-title">Steps</span>
      <br />
      <br />
      {props.steps.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${
              index === activeQuestion ? "active" : ""
            }`}
            onClick={() => toggleQuestion(index)}
          >
            Step {index + 1}
            <i className="fa fa-angle-down faq-icon"></i>
          </div>
          {index === activeQuestion && <div className="faq-answer">{faq}</div>}
        </div>
      ))}
    </div>
  );
}

export default Steps;

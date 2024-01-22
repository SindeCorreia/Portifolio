import React from "react";
import { useState } from "react";
import "./Feedback.css";
import Face1 from "./FeedbackImg/face1.png";
import Face2 from "./FeedbackImg/face2.png";
import Face3 from "./FeedbackImg/face3.png";
import Face4 from "./FeedbackImg/face4.png";
import Face5 from "./FeedbackImg/face5.png";

function Feedback() {
  

  return (
    <div className="feedback">
      <div className="fristfeedback">
        <h1 id="feedbackimprove">I would like your feedback to improve my website</h1>
      </div>
      <div className="FeedBackimprove">
        <div className="FeedBackOpinion">
          <h1>What is your opinion of this page</h1>
          <img src={Face5} alt="Happyface" />
          <img src={Face4} alt="Happyface" />
          <img src={Face3} alt="Happyface" />
          <img src={Face2} alt="Happyface" />
          <img src={Face1} alt="Happyface" />
        </div>
        <div className="FeedBackbox">
          <h1>Please select your feedback category below</h1>
          <button>Suggestion</button>         
          <button>Something is not working</button>
          <button>Compliment</button>

        </div>
        
      </div>
      <div className="feedbacktext">
        <h1>Please leave your feedback below .</h1>
        <div id="textarea">
          <textarea 
            className="feedback-input"
            placeholder="Write your feedback here ..."
          />
        <div>
        </div>
      <button >SEND</button>
      </div>
      </div>
    </div>
  );
}

export default Feedback;

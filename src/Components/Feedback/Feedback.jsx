import React from "react";
import "./Feedback.css";
import Face1 from "./FeedbackImg/face1.png";
import Face2 from "./FeedbackImg/face2.png";
import Face3 from "./FeedbackImg/face3.png";
import Face4 from "./FeedbackImg/face4.png";
import Face5 from "./FeedbackImg/face5.png";

function Feedback  () {
return(
    <div className="feedback">
        <div><h1>I would like your feedback to improve my website</h1></div>
        <div className="FeedBackimprove"> 
            <div className="FeedBackOpinion"> <h1>What is your opinion of this page</h1>
                <img src={Face1} alt="Happyface" />
                <img src={Face2} alt="Happyface" />
                <img src={Face3} alt="Happyface" />
                <img src={Face4} alt="Happyface" />
                <img src={Face5} alt="Happyface" />
            </div>
            <div className="FeedBackbox"><h1> Please select you feedback category below</h1></div>
        </div>
        <div className="feedbacktext"> <h1>Please leave your feedback below .</h1>
        <textarea
        className="feedback-input"
        placeholder="Escreva seu feedback aqui..."
      />
        </div>
        <button>SEND</button>
    </div>
    )
 }
 export default Feedback;
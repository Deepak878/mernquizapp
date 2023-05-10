import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"
const Main = () => {
const inputRef = useRef(null)
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>You will be asked questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>Each question has 3 answer you can choose only one</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>Result will be declared at the end of the quiz</li>
      </ol>
      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder="Username*"></input>
      </form>
      <div className="start">
<Link className="btn" to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  );
};

export default Main;
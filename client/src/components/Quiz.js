import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";
const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  // const state = useSelector((state) => state);
  const { result } = useSelector((state) => state.result);
  const { trace, queue } = useSelector((state) => state.questions);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("result", result);
  //   // console.log(state);
  //   // console.log(queue.length);
  // });

  function onNext() {
    // Update the trace value by 1 using moveNextQuestion
    if (trace < queue.length) {
      dispatch(moveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    // console.log("On next click");
    setChecked(undefined)
  }
  function onPrev() {
    if (trace) {
      dispatch(movePrevQuestion());
    }
    console.log("On Prev click");
  }

  function onChecked(check) {
    setChecked(check);
    console.log(check);
  }
  //finished exam after the last question
  // console.log('result length', result.length);
  // console.log('queue length', queue.length);
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />
      <div className="grid">
        {trace > 0 ? <button className="btn prev" onClick={onPrev}>
          Prev
        </button> : <div></div>}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;

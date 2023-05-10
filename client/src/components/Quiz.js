import React, { useEffect } from 'react'
import Questions from "./Questions"
import {useSelector} from 'react-redux'

const Quiz = () => {

  const { questions } = useSelector(state=>state)
  const state = useSelector(state=>state)

  useEffect(()=>{
    // console.log(questions);
    // console.log(state);
  })


  function onNext(){
    console.log("On next click");
  }
  function onPrev(){
    console.log("On Prev click");
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}
      <Questions/>
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz

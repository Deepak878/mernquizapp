
//Fetch question hook to fetch api data and set value to the store

import { useEffect, useState } from "react"
import data from "../database/data"
import { useDispatch } from "react-redux"

//redux actions
import * as Action from "../redux/questionReducer"

export const useFetchQuestion =()=>{
  const dispatch = useDispatch()
  // const [getData,setGetData] =  useState({ isLoading: false, apiData:[], serverError:null })
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
              setGetData(prev => ({...prev, isLoading : true}));
      
              /** async function fetch backend data */
              (async () => {
                  try {
                      let question = await data;
      
                      if(question.length > 0){
                          setGetData(prev => ({...prev, isLoading : false}));
                          setGetData(prev => ({...prev, apiData : question}));
      
                          /** dispatch an action */
                          dispatch(Action.startExamAction(question))
                      } else{
                          throw new Error("No Question Avalibale");
                      }
                  } catch (error) {
                      setGetData(prev => ({...prev, isLoading : false}));
                      setGetData(prev => ({...prev, serverError : error}));
                  }
              })();
          }, [dispatch]);
     
  return [getData, setGetData]
}



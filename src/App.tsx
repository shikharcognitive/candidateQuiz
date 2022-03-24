import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import UserDetails from './components/userDetails';
import QuesOne from './components/quesOne';
import QuesTwo from './components/quesTwo';
import QuesThree from './components/quesThree';
import QuesFour from './components/quesFour';
import QuesFive from './components/quesFive';
import Result from './components/results';
import ResponsiveAppBar from './components/navBar';

const App: React.FC<any> = () => {

  const userAnswers:Array<any> = []

  const userQuestions:Array<any> = [
    {
      "question": "2+3",
      "answer": "5",
      "id": 1,
      "heading": "fill in the Blanks",
      "questionOption": [""],
      "option": [""]
    },
    {
      "id": 2,
      "question": "5+4",
      "answer": "9",
      "heading": "choose the correct answer",
      "option": ["4", "6","8", "9"],
      "questionOption": [""]
    },
    {
      "id": 3,
      "question": "4>7",
      "answer": "no",
      "heading": "yes or no",
      "option": ["yes", "no"],
      "questionOption":[""]
    },
    {
      "id": 4,
      "question": "value of pie",
      "option": ["3.142", "3", "4", "22/7"],
      "heading": "fill in the Blanks",
      "answer": ["3.142", "22/7"],
      "questionOption":[""]
    },
    {
      "id": 5,
      "question": "Match the following",
      "questionOption": ["2+4 =", "3-1 =", "8/2 =", "4*2 ="],
      "heading": "fill in the Blanks",
      "answer": ["6", "2", "4", "8"],
      "option": ["8", "6", "2", "4"]
    }
  ];

  const setUserAnswers:any = (id:any, value:any) => {
    console.log('the id : ', id, value);
    userAnswers.filter( (ele:any, index:any) => ele.id === id ? delete userAnswers[index] : false);
    userAnswers.push({'id':id, 'answer':value});
  }


  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<UserDetails/>}/>
        <Route path='/q1' element={<QuesOne ques={userQuestions[0]} setAnswers={setUserAnswers}/>} />
        <Route path='/q2' element={<QuesTwo ques={userQuestions[1]} setAnswers={setUserAnswers}/>}/>
        <Route path='/q3' element={<QuesThree ques={userQuestions[2]} setAnswers={setUserAnswers}/>}/>
        <Route path='/q4' element={<QuesFour ques={userQuestions[3]} setAnswers={setUserAnswers}/>}/>
        <Route path='/q5' element={<QuesFive ques={userQuestions[4]} setAnswers={setUserAnswers}/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

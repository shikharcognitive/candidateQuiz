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

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserDetails/>}/>
        <Route path='/q1' element={<QuesOne/>}/>
        <Route path='/q2' element={<QuesTwo/>}/>
        <Route path='/q3' element={<QuesThree/>}/>
        <Route path='/q4' element={<QuesFour/>}/>
        <Route path='/q5' element={<QuesFive/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

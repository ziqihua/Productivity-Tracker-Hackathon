import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Registration from './components/Registration/Registration';
import {React, useState} from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import HabitCategory from './components/HabitCategory/HabitCategory';
import JobCategory from './components/HabitCategory/JobRelated';
import TaskRecommendation from './components/TaskRecommendation/TaskRecommendation';
import Sidebar from './components/Sidebar/Sidebar';


function App() {

  let dicViewsNumbers = {};
  dicViewsNumbers["LoginPage"] = 0;
  dicViewsNumbers['Registration'] = 1;

  const [curView, setCurView] = useState(dicViewsNumbers["LoginPage"]);  // the state to decide which view to present
  const [curUserId, setUserId] = useState(-1);

  let view;

  if (curView === dicViewsNumbers["LoginPage"]) {
    view = <LoginPage updateCurView = {setCurView} updateUserId = {setUserId} />
  } else if (curView === dicViewsNumbers['Registration']) {
    view = <Registration updateCurView = {setCurView} updateUserId = {setUserId} />
  }

  return (
    <>
      {view}
    </>
  );
}

export default App;

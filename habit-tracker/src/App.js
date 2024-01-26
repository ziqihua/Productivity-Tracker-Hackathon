import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Registration from './components/Registration/Registration';
import {React, useState} from 'react';

function App() {

  let dicViewsNumbers = {};
  dicViewsNumbers["LoginPage"] = 0;
  dicViewsNumbers['Registration'] = 1;

  const [curView, setCurView] = useState(dicViewsNumbers["LoginPage"]);  // the state to decide which view to present
  // for testing; should remove or update during development
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

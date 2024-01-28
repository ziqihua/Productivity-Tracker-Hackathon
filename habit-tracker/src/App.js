/* eslint-disable no-unused-vars */
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Registration from './components/Registration/Registration';
import {useState} from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import HabitCategory from './components/HabitCategory/HabitCategory';
import JobCategory from './components/HabitCategory/JobRelated';
import TaskRecommendation from './components/TaskRecommendation/TaskRecommendation';
import SidebarPanel from './components/Sidebar/Sidebar';
import TodoList from './components/Todo/TodoList';
import FormDialog from './components/ActivityFeed/FormDialog';
import ActivityFeed from './components/ActivityFeed/ActivityFeed';
import Tracker from './components/Tracker/Tracker';
import Badges from './components/Badges/Badges';
import { Sidebar } from 'react-pro-sidebar';
import CommunityBoard from './components/Community/CommunityBoard';

function App() {

  let dicViewsNumbers = {};
  dicViewsNumbers["LoginPage"] = 0;
  dicViewsNumbers['Registration'] = 1;
  dicViewsNumbers['TodoList'] = 2;
  dicViewsNumbers['Tracker'] = 3;
  dicViewsNumbers['Badges'] = 4;
  dicViewsNumbers['LandingPage'] = 5;
  dicViewsNumbers['HabitCategory'] = 6;
  dicViewsNumbers['JobCategory'] = 7;
  dicViewsNumbers['TaskRecommendation'] = 8;
  dicViewsNumbers['CommunityBoard'] = 9;

  const [curView, setCurView] = useState(dicViewsNumbers["Badges"]);  // the state to decide which view to present
  const [curUserId, setUserId] = useState(-1);

  let view;

  if (curView === dicViewsNumbers["LoginPage"]) {
    view = <LoginPage updateCurView = {setCurView} updateUserId = {setUserId} />
  } else if (curView === dicViewsNumbers['Registration']) {
    view = <Registration updateCurView = {setCurView} updateUserId = {setUserId} />
  } else if (curView === dicViewsNumbers['TodoList']) {
    view = <TodoList updateCurView = {setCurView} userId = {curUserId} updateUserId = {setUserId} />
  } else if (curView === dicViewsNumbers['Tracker']) {
    view = <Tracker updateCurView = {setCurView} userId = {curUserId} updateUserId = {setUserId} />
  } else if (curView === dicViewsNumbers['Badges']) {
    view = <Badges updateCurView = {setCurView} userId = {curUserId} updateUserId = {setUserId} />
  } else if (curView === dicViewsNumbers['LandingPage']) {
    view = <LandingPage updateCurView={setCurView} userId={curUserId} updateUserId = {setUserId} />;
  } else if (curView === dicViewsNumbers['HabitCategory']) {
    view = <HabitCategory updateCurView={setCurView} userId={curUserId} updateUserId = {setUserId} />;
  } else if (curView === dicViewsNumbers['JobCategory']) {
    view = <JobCategory updateCurView={setCurView} userId={curUserId} updateUserId = {setUserId} />;
  } else if (curView === dicViewsNumbers['TaskRecommendation']) {
    view = <TaskRecommendation updateCurView={setCurView} userId={curUserId} updateUserId = {setUserId} />;
  } else if (curView === dicViewsNumbers['CommunityBoard']) {
    view = <CommunityBoard updateCurView={setCurView} userId={curUserId} updateUserId = {setUserId} />;
  }

  const noSideBar = new Set([0, 1, 5, 6, 7, 8]);

  return (
    // <>
    //    <FormDialog />
    // </>
    <div>
      {noSideBar.has(curView)? (
        <>
          {view}
        </>
      ) : (
        <div style={{ display: 'flex', height: '100vh' }}>
          <SidebarPanel updateCurView = {setCurView}/>
          <div style={{ flex: 1, padding: '20px' }}>
            {view}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

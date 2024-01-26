import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import HabitCategory from './components/HabitCategory/HabitCategory';
import JobCategory from './components/HabitCategory/JobRelated';
import TaskRecommendation from './components/TaskRecommendation/TaskRecommendation';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <HabitCategory/> */}
      {/* <JobCategory /> */}
      <TaskRecommendation/>
    </div>
  );
}

export default App;

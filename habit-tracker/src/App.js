import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import HabitCategory from './components/HabitCategory/HabitCategory';
import JobCategory from './components/HabitCategory/JobRelated';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <HabitCategory/> */}
      <JobCategory />
    </div>
  );
}

export default App;

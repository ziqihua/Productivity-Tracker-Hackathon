import "../CSS/TaskRecommendation.css";

const taskRecommendations = [
  "Leetcode",
  "Open Source Contribution",
  "Personal Project",
  "Hackathon",
  "Apply for Internship",
  "Build my Own Habit",
  "Confirm",
];
function TaskRecommendation() {
  const handleTaskRecommendationClick = (task) => {
    // Handle the job category selection here
    console.log(`You clicked the ${task} category`);
  };

  return (
    <div className="task-recommedation-picker">
      <div className="task-recommedation-header">
        <h1>Task Recommendation</h1>
      </div>
      <div className="task-recommedation-buttons">
        {taskRecommendations.map((task) => (
          <button
            key={task}
            onClick={() => handleTaskRecommendationClick(task)}
            className={task === "Confirm" ? "other-button" : ""}
          >
            {task}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TaskRecommendation;

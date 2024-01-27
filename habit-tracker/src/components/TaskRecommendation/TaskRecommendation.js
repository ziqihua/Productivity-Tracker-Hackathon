import "../CSS/TaskRecommendation.css";
import { useState } from "react";

const taskRecommendations = [
  "Leetcode",
  "Open Source Contribution",
  "Personal Project",
  "Hackathon",
  "Apply for Internship",
  "Build my Own Habit",
  "Confirm",
];

function TaskRecommendation({ updateCurView }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [customHabit, setCustomHabit] = useState("");
  const [taskFrequencies, setTaskFrequencies] = useState({});

  const handleTaskClick = (task) => {
    if (task === "Confirm") {
      updateCurView(3);
    } else {
      toggleTask(task);
    }
  };

  const toggleTask = (task) => {
    setSelectedCategories((prev) => {
      const isCurrentlySelected = prev.includes(task);

      if (isCurrentlySelected) {
        // If the task is currently selected, remove it and its frequency
        const updatedFrequencies = { ...taskFrequencies };
        if (task === "Build my Own Habit" && customHabit) {
          delete updatedFrequencies[customHabit];
        } else {
          delete updatedFrequencies[task];
        }
        setTaskFrequencies(updatedFrequencies);
        return prev.filter((cat) => cat !== task && cat !== customHabit);
      } else {
        // If the task is being added, ensure the frequency is set to 3
        const updatedFrequencies = {
          ...taskFrequencies,
          [task === "Build my Own Habit" ? customHabit : task]:
            taskFrequencies[task] || 3,
        };
        setTaskFrequencies(updatedFrequencies);
        return [...prev, task];
      }
    });
  };

  const handleFrequencyChange = (task, event) => {
    const value = parseInt(event.target.value, 10);
    setTaskFrequencies((prev) => ({
      ...prev,
      [task]: isNaN(value) ? 1 : Math.min(7, Math.max(1, value)),
    }));
  };

  const handleCustomHabitChange = (event) => {
    const value = event.target.value;
    setCustomHabit(value);
    if (value && !selectedCategories.includes("Build my Own Habit")) {
      setSelectedCategories((prev) => [...prev, "Build my Own Habit"]);
    }
    setTaskFrequencies((prev) => ({
      ...prev,
      [value]: prev[customHabit] || 3,
    }));
  };

  return (
    <div className="task-recommendation-container">
      <div className="task-recommendation-header">
        <h1>Task Recommendation</h1>
      </div>
      <div className="task-recommendation-buttons">
        {taskRecommendations.map((task) => (
          <button
            key={task}
            onClick={() => handleTaskClick(task)}
            className={
              task === "Confirm"
                ? "other-button"
                : selectedCategories.includes(task) ||
                  (task === "Build my Own Habit" &&
                    customHabit &&
                    selectedCategories.includes(customHabit))
                ? "selected-category"
                : ""
            }
          >
            {task}
          </button>
        ))}
      </div>
      <div className="frequency-cards-container">
        {selectedCategories.map((task) => (
          <FrequencyCard
            key={task}
            task={task === "Build my Own Habit" ? customHabit : task}
            frequency={
              taskFrequencies[
                task === "Build my Own Habit" ? customHabit : task
              ]
            }
            handleFrequencyChange={handleFrequencyChange}
            isCustomHabit={task === "Build my Own Habit"}
            customHabitNameChange={handleCustomHabitChange}
          />
        ))}
      </div>
    </div>
  );
}

// The Card component
function FrequencyCard({
  task,
  frequency,
  handleFrequencyChange,
  isCustomHabit,
  customHabitNameChange,
}) {
  return (
    <div
      className={`frequency-card ${isCustomHabit ? "custom-habit-card" : ""}`}
    >
      {isCustomHabit ? (
        <input
          type="text"
          value={task}
          onChange={customHabitNameChange}
          className="custom-habit-input"
          placeholder="Custom Habit Name"
        />
      ) : (
        <h3>{task}</h3>
      )}
      <div className="frequency-controls">
        <button
          onClick={() =>
            handleFrequencyChange(task, { target: { value: frequency - 1 } })
          }
        >
          -
        </button>
        <input
          type="number"
          value={frequency}
          onChange={(e) => handleFrequencyChange(task, e)}
          min="1"
          max="7"
        />
        <button
          onClick={() =>
            handleFrequencyChange(task, { target: { value: frequency + 1 } })
          }
        >
          +
        </button>
        <span> days per week</span>
      </div>
    </div>
  );
}

export default TaskRecommendation;

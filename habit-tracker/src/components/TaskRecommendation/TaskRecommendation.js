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

function TaskRecommendation() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [customHabit, setCustomHabit] = useState("");
  const [taskFrequencies, setTaskFrequencies] = useState({});

  const handleTaskClick = (task) => {
    if (task === "Confirm") {
      console.log("Go to next view");
    } else if (task === "Build my Own Habit") {
      if (
        selectedCategories.includes(customHabit) ||
        (customHabit === "" && selectedCategories.includes(task))
      ) {
        setSelectedCategories((prev) =>
          prev.filter((cat) => cat !== customHabit && cat !== task)
        );
        const updatedFrequencies = { ...taskFrequencies };
        delete updatedFrequencies[customHabit || task];
        setTaskFrequencies(updatedFrequencies);
      } else {
        setSelectedCategories((prev) => [...prev, customHabit || task]);
        if (!taskFrequencies[customHabit || task]) {
          setTaskFrequencies((prev) => ({ ...prev, [customHabit || task]: 3 }));
        }
      }
    } else {
      toggleTask(task);
    }
  };

  const toggleTask = (task) => {
    setSelectedCategories((prev) => {
      if (prev.includes(task)) {
        const updatedFrequencies = { ...taskFrequencies };
        delete updatedFrequencies[task];
        setTaskFrequencies(updatedFrequencies);
        return prev.filter((cat) => cat !== task);
      } else {
        if (task === "Build my Own Habit" && customHabit) {
          // Directly add the custom habit name if it's provided
          return [...prev, customHabit];
        }
        return [...prev, task];
      }
    });
    if (task !== "Build my Own Habit" || customHabit) {
      setTaskFrequencies((prev) => ({
        ...prev,
        [task === "Build my Own Habit" ? customHabit : task]: prev[task] || 3,
      }));
    }
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
    if (value) {
      setTaskFrequencies((prev) => ({
        ...prev,
        [value]: prev[customHabit] || 3,
      }));
    }
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

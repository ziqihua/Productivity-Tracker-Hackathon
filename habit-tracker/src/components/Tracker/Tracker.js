import "../CSS/Tracker.css";
import { useState, useEffect } from "react";

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const initialHabits = [
  {
    id: 1,
    title: "Leetcode",
    frequency: "7 days/week",
    daysCompleted: [true, false, true, true, false, false, false],
    progress: "3/7",
    category: "Job-related",
  },
  {
    id: 2,
    title: "Find an internship",
    frequency: "5 days/week",
    daysCompleted: [true, true, true, false, false, false, false],
    progress: "3/5",
    category: "Job-related",
  },
  {
    id: 3,
    title: "Build portfolio",
    frequency: "4 days/week",
    daysCompleted: [true, false, true, false, true, false, true],
    progress: "4/4",
    category: "Job-related",
  },
  {
    id: 4,
    title: "Work on side project",
    frequency: "3 days/week",
    daysCompleted: [true, false, true, true, false, false, false],
    progress: "3/3",
    category: "Job-related",
  },
  {
    id: 5,
    title: "Hit the gym",
    frequency: "3 days/week",
    daysCompleted: [true, false, false, false, false, true, false],
    progress: "2/3",
    category: "Health",
  },
  // ... other habits
];

const allCategories = [
  "Job-related",
  "Health",
  "Education",
  "Social",
  "Hobby",
  "Reflect",
];

function Tracker() {
  const [habits, setHabits] = useState(initialHabits);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to toggle the completion status of a habit for a given day
  const toggleDay = (habitId, dayIndex) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === habitId) {
          const updatedDays = [...habit.daysCompleted];
          updatedDays[dayIndex] = !updatedDays[dayIndex];
          const progressFraction = calculateProgressFraction(
            updatedDays,
            habit.frequency
          );
          const newProgressString = `${updatedDays.filter(Boolean).length}/${
            habit.frequency.split(" ")[0]
          }`;
          return {
            ...habit,
            daysCompleted: updatedDays,
            progress: newProgressString,
            isComplete: progressFraction === 1,
          };
        }
        return habit;
      })
    );
  };

  const onDragStart = (e, habitId) => {
    e.dataTransfer.setData("id", habitId);
    e.dataTransfer.effectAllowed = "move";
    e.target.style.cursor = "grabbing";
  };

  const onDrop = (e, dropTargetHabitId) => {
    const draggedHabitId = e.dataTransfer.getData("id");
    const draggedHabitIndex = habits.findIndex(
      (habit) => habit.id.toString() === draggedHabitId
    );
    const dropTargetIndex = habits.findIndex(
      (habit) => habit.id === dropTargetHabitId
    );

    const newHabits = [...habits];
    const [reorderedHabit] = newHabits.splice(draggedHabitIndex, 1);
    newHabits.splice(dropTargetIndex, 0, reorderedHabit);

    setHabits(newHabits);
  };

  const onDragEnd = (e) => {
    e.target.style.cursor = "grab";
  };

  const onDragOver = (event) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  const calculateProgressFraction = (daysCompleted, frequency) => {
    const completed = daysCompleted.filter(Boolean).length; // Count the true values
    const frequencyNumber = parseInt(frequency.split(" ")[0], 10); // Extract the number from the frequency string
    return completed / frequencyNumber; // This will give a number between 0 and 1
  };

  const sortedAndFilteredHabits = habits
    .map((habit) => ({
      ...habit,
      progressFraction: calculateProgressFraction(
        habit.daysCompleted,
        habit.frequency
      ),
      isComplete:
        calculateProgressFraction(habit.daysCompleted, habit.frequency) === 1,
    }))
    .sort((a, b) => {
      if (a.isComplete) return 1; // Move completed habits to the end
      if (b.isComplete) return -1; // Keep uncompleted habits at the beginning
      return 0; // Keep original order among uncompleted habits)
    });

  // Function to update the selected categories
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    // This effect will automatically filter the habits when selectedCategory changes.
    setHabits(
      initialHabits.filter(
        (habit) =>
          selectedCategory === "" || habit.category === selectedCategory
      )
    );
  }, [selectedCategory]); // Depend on selectedCategory

  return (
    <div className="habit-tracker">
      <div className="header">
        <h2>My Habit Tracker</h2>
        <div className="filter-container">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      {sortedAndFilteredHabits.map((habit) => (
        <div
          key={habit.id}
          className={`habit ${habit.isComplete ? "complete" : ""}`}
          draggable={!habit.isComplete}
          onDragStart={(event) => onDragStart(event, habit.id)}
          onDragEnd={onDragEnd}
          onDrop={(event) => onDrop(event, habit.id)}
          onDragOver={onDragOver}
        >
          <div className="drag-handle"></div> {/* Draggable area indicator */}
          <div className="title">{habit.title}</div>
          <div className="frequency">{habit.frequency}</div>
          <div className="days">
            {habit.daysCompleted.map((completed, index) => (
              <div key={index} className="day-checkbox">
                <label>
                  <span className="weekday">{weekdays[index]}</span>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleDay(habit.id, index)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="progress">{habit.progress}</div>
        </div>
      ))}
    </div>
  );
}

export default Tracker;

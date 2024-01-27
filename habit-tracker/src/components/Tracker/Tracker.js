import "../CSS/Tracker.css";
import { useState } from "react";

const initialHabits = [
  {
    id: 1,
    title: "Leetcode",
    frequency: "7 days/week",
    daysCompleted: [true, false, true, true, false, false, false],
    progress: "3/7",
  },
  {
    id: 2,
    title: "Find an internship",
    frequency: "5 days/week",
    daysCompleted: [true, true, true, false, false, false, false],
    progress: "3/5",
  },
  {
    id: 3,
    title: "Build portfolio",
    frequency: "4 days/week",
    daysCompleted: [true, false, true, false, true, false, true],
    progress: "4/4",
  },
  {
    id: 4,
    title: "Work on side project",
    frequency: "3 days/week",
    daysCompleted: [true, false, true, true, false, false, false],
    progress: "3/3",
  },
  // ... other habits
];

function Tracker() {
  const [habits, setHabits] = useState(initialHabits);

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
    return completed / frequencyNumber;
  };

  const sortedHabits = habits
    .map(habit => ({
      ...habit,
      progressFraction: calculateProgressFraction(habit.daysCompleted, habit.frequency),
      isComplete: calculateProgressFraction(habit.daysCompleted, habit.frequency) === 1,
    }))
    .sort((a, b) => {
      if (a.isComplete) return 1; // Move completed habits to the end
      if (b.isComplete) return -1; // Keep uncompleted habits at the beginning
      return 0; // Keep original order among uncompleted habits
    });

  return (
    <div className="habit-tracker">
      <div className="header">
        <h2>My Habit Tracker</h2>
        <button className="filter-category">Filter category</button>
      </div>
      {sortedHabits.map((habit) => (
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
              <input
                key={index}
                type="checkbox"
                checked={completed}
                onChange={() => toggleDay(habit.id, index)}
              />
            ))}
          </div>
          <div className="progress">{habit.progress}</div>
        </div>
      ))}
    </div>
  );
}

export default Tracker;

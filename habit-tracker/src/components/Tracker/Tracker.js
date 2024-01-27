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
    progress: "4/7",
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
          return { ...habit, daysCompleted: updatedDays };
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

  return (
    <div className="habit-tracker">
      <div className="header">
        <h2>My Habit Tracker</h2>
        <button className="filter-category">Filter category</button>
      </div>
      {habits.map((habit) => (
        <div
          key={habit.id}
          className="habit"
          draggable
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

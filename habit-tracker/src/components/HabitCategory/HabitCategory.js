import "../CSS/HabitCategory.css";
import { useState } from "react";

const categories = [
  "Job-related",
  "Health",
  "Education",
  "Social",
  "Hobby",
  "Reflect",
  "Confirm",
];

function HabitCategory({updateCurView}) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (category === "Confirm") {
        updateCurView(7); 
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          return prev.filter((cat) => cat !== category);
        } else {
          return [...prev, category];
        }
      });
      console.log(`You clicked the ${category} category`);
    }
  };

  return (
    <div className="category-picker">
      <h2>Pick A Habit Category</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={
              category === "Confirm"
                ? "other-button"
                : selectedCategories.includes(category)
                ? "selected-category"
                : ""
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HabitCategory;

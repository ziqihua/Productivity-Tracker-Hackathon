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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (category === "Confirm") {
      if (selectedCategory) {
        updateCurView(7); 
      }
    } else {
      setSelectedCategory(category);
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
                ? (selectedCategory ? "other-button" : "other-button disabled")
                : (category === selectedCategory ? "selected-category" : "")
            }
            disabled={category === "Confirm" && !selectedCategory}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HabitCategory;

import "../CSS/HabitCategory.css";

const categories = [
  "Job-related",
  "Healthy body",
  "Mental well-being",
  "Everyday study",
  "Must-done trivial matters",
  "Socializing",
  "Confirm",
];

function HabitCategory() {
  const handleCategoryClick = (category) => {
    // Handle the category selection here
    console.log(`You clicked the ${category} category`);
  };

  return (
    <div className="category-picker">
      <h2>Pick A Habit Category</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={category === "Confirm" ? "other-button" : ""}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HabitCategory;

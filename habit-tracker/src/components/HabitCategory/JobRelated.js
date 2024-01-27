import "../CSS/JobRelated.css";
import { useState } from "react";

const jobCategories = [
  "Frontend Developer",
  "Data Analyst",
  "Product Manager",
  "Backend Developer",
  "Data Engineer",
  "ML Engineer",
  "Fullstack Developer",
  "Data Scientist",
  "I have no idea",
  "Confirm",
];

function JobCategory() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleJobCategoryClick = (category) => {
    if (category === "Confirm") {
      // Handle the confirm action here
      console.log("Go to next view");
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
    <div className="job-category-picker">
      <h2>What do you aspire to do after you graduate?</h2>
      <div className="job-category-buttons">
        {jobCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleJobCategoryClick(category)}
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

export default JobCategory;

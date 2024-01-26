import "../CSS/JobRelated.css";

const jobCategories = [
  'Frontend Developer',
  'Data Analyst',
  'Product Manager',
  'Backend Developer',
  'Data Engineer',
  'ML Engineer',
  'Fullstack Developer',
  'Data Scientist',
  'I have no idea',
  'Confirm'
];

function JobCategory() {
  const handleJobCategoryClick = (category) => {
    // Handle the job category selection here
    console.log(`You clicked the ${category} job category`);
  };

  return (
    <div className="job-category-picker">
      <h2>What do you aspire to do after you graduate?</h2>
      <div className="job-category-buttons">
        {jobCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleJobCategoryClick(category)}
            className={category === 'Confirm' ? 'other-button' : ''}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobCategory;

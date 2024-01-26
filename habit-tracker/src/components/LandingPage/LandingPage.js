import "../CSS/LandingPage.css";

function LandingPage() {
  const userName = "Nollie Chen"; // Replace with dynamic data as needed
  const appName = "OvernightSensations"; // Replace with dynamic data as needed

  const handleGetStartedClick = () => {
    // Logic to handle the get started button click
    console.log("Get Started clicked");
  };

  return (
    <div className="landing-container">
      <h1>Landing page for new user</h1>
      <p>Hello, {userName}</p>
      <p>
        Welcome to {appName}, a web app that aims to help you achieve ANY goals!
      </p>
      <p>
        Please kindly fill out the following survey so that we can match you to
        the corresponding theme.{" "}
      </p>
      <p>
        For example, if you would like to establish your niche in CS, you can
        choose job-related category.
      </p>
      <button className="get-started-btn" onClick={handleGetStartedClick}>
        GET STARTED
      </button>
    </div>
  );
}

export default LandingPage;

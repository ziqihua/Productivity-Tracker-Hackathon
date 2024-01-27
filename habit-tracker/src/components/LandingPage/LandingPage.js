import "../CSS/LandingPage.css";

function LandingPage({updateCurView}) {
  const userName = "Nollie Chen"; // Replace with dynamic data as needed
  const appName = "OvernightSensations"; // Replace with dynamic data as needed

  const handleGetStartedClick = async (e) => {
    e.preventDefault();
    updateCurView(6); 
  }

  return (
    <div className="landing-container">
      <h1>Welcome, Future Sensation!</h1>
      <p>Hello, {userName}</p>
      <p>
        Dive into <span className="app-name">{appName}</span>,{" "}
      </p>
      <p>
        the magical realm where your aspirations transform into dazzling
        realities overnight!
      </p>
      <p>Take a moment to waltz through our quirky survey.</p>
      <p>
        It's the secret sauce to seasoning your experience with the right flavor
        of fabulous.
      </p>
      <button className="get-started-btn" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;

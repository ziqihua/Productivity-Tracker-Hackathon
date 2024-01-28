import "../CSS/Badges.css"; // Import your CSS stylesheet

// Badge component representing each badge
const Badge = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  title,
  description,
}) => {

  return (
    <div className="badge">
      <div className="badge-title">
        <p>{title}</p>
      </div>
      <img className="image1" src={image1} alt="Badge-icon" />
      <div className="badge-text-container">
        <div className="badge-text">
          <img className="image2" src={image2} alt="Badge-1w" />
          <span>1W</span>
        </div>
        <div className="badge-text">
          <img className="image3" src={image3} alt="Badge-3w" />
          <span>3W</span>
        </div>
        <div className="badge-text">
          <img className="image4" src={image4} alt="Badge-5w" />
          <span>5W</span>
        </div>
        <div className="badge-text">
          <img className="image5" src={image5} alt="Badge-10w" />
          <span>10W</span>
        </div>
        <div className="badge-text">
          <img className="image6" src={image6} alt="Badge-15w" />
          <span>15W</span>
        </div>
      </div>
      <p className="badge-description">{description}</p>
    </div>
  );
};

function Badges() {
  const badgeData = [
    {
      image1: require("../../pics/job_hunting_pic.png"),
      image2: require("../../pics/job_hunting_finished.png"),
      image3: require("../../pics/job_hunting_finished.png"),
      image4: require("../../pics/job_hunting_finished.png"),
      image5: require("../../pics/job_hunting_undone.png"),
      image6: require("../../pics/job_hunting_undone.png"),
      title: "Job-related",
      description:
        "6 weeks staying habitual! Stay positive and figure crossed :) ",
    },
    // Repeat for each badge...

    {
      image1: require("../../pics/education-icon.png"),
      image2: require("../../pics/education-badge-done.png"),
      image3: require("../../pics/education-badge-done.png"),
      image4: require("../../pics/education-badge-done.png"),
      image5: require("../../pics/education-badge-undone.png"),
      image6: require("../../pics/education-badge-undone.png"),
      title: "Education",
      description:
        "7 weeks staying habitual! Great job in keeping yourself from procrastinating.",
    },

    {
      image1: require("../../pics/health-icon.png"),
      image2: require("../../pics/health-badge-done.png"),
      image3: require("../../pics/health-badge-undone.png"),
      image4: require("../../pics/health-badge-undone.png"),
      image5: require("../../pics/health-badge-undone.png"),
      image6: require("../../pics/health-badge-undone.png"),
      title: "Health",
      description:
        "1 week staying habitual! It’s never late to start nurturing lifelong friendships.",
    },

    {
      image1: require("../../pics/hobby-icon.png"),
      image2: require("../../pics/hobby-badge-done.png"),
      image3: require("../../pics/hobby-badge-done.png"),
      image4: require("../../pics/hobby-badge-undone.png"),
      image5: require("../../pics/hobby-badge-undone.png"),
      image6: require("../../pics/hobby-badge-undone.png"),
      title: "Hobby",
      description: "4 weeks staying habitual! Enrich your life everyday.",
    },

    {
      image1: require("../../pics/social-icon.png"),
      image2: require("../../pics/social-badge-done.png"),
      image3: require("../../pics/social-badge-undone.png"),
      image4: require("../../pics/social-badge-undone.png"),
      image5: require("../../pics/social-badge-undone.png"),
      image6: require("../../pics/social-badge-undone.png"),
      title: "Social",
      description:
        "It’s never late to start nurturing lifelong friendships. Build your social routine today!",
    },

    {
      image1: require("../../pics/reflect-icon.png"),
      image2: require("../../pics/reflect-badge-undone.png"),
      image3: require("../../pics/reflect-badge-undone.png"),
      image4: require("../../pics/reflect-badge-undone.png"),
      image5: require("../../pics/reflect-badge-undone.png"),
      image6: require("../../pics/reflect-badge-undone.png"),
      title: "Reflection",
      description:
        "Do you know our daily lives are a reflection of what we believe in? Build your reflection routine today!",
    },
  ];

  return (
    <div className="badges">
      <h2>Badges Achievements</h2>
      {badgeData.map((badge, index) => (
        <Badge
          key={index}
          title={badge.title}
          image1={badge.image1}
          image2={badge.image2}
          image3={badge.image3}
          image4={badge.image4}
          image5={badge.image5}
          image6={badge.image6}
          description={badge.description}
        />
      ))}
    </div>
  );
}
export default Badges;

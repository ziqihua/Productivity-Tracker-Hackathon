import { requirePropFactory } from "@mui/material";
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
      <p className="badge-title">{title}</p>
      <img className="image1" src={image1} alt="Badge-icon" />
      <div className="badge-text-container">
        <div className="badge-text">
          <img className="image2" src={image2} alt="Badge-1w" />
          1W
        </div>
        <div className="badge-text">
          <img className="image3" src={image3} alt="Badge-3w" />
          3W
        </div>
        <div className="badge-text">
          <img className="image4" src={image4} alt="Badge-5w" />
          5W
        </div>
        <div className="badge-text">
          <img className="image5" src={image5} alt="Badge-10w" />
          10W
        </div>
        <div className="badge-text">
          <img className="image6" src={image6} alt="Badge-15w" />
          15W
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
      image1: require("../../pics/Education pic.png"),
      image2: require("../../pics/Education finished.png"),
      image3: require("../../pics/Education finished.png"),
      image4: require("../../pics/Education finished.png"),
      image5: require("../../pics/Education undone.png"),
      image6: require("../../pics/Education undone.png"),
      title: "Education",
      description:
        "7 weeks staying habitual! Great job in keeping yourself from procrastinating.",
    },

    {
      image1: require("../../pics/Health pic.png"),
      image2: require("../../pics/Health finished.png"),
      image3: require("../../pics/health undone.png"),
      image4: require("../../pics/health undone.png"),
      image5: require("../../pics/health undone.png"),
      image6: require("../../pics/health undone.png"),
      title: "Health",
      description:
        "1 week staying habitual! It’s never late to start nurturing lifelong friendships.",
    },

    {
      image1: require("../../pics/hobby pic.png"),
      image2: require("../../pics/hobby finished.png"),
      image3: require("../../pics/hobby finished.png"),
      image4: require("../../pics/hobbies undone.png"),
      image5: require("../../pics/hobbies undone.png"),
      image6: require("../../pics/hobbies undone.png"),
      title: "Hobby",
      description: "4 weeks staying habitual! Enrich your life everyday.",
    },

    {
      image1: require("../../pics/Socializing pic.png"),
      image2: require("../../pics/Social undone.png"),
      image3: require("../../pics/Social undone.png"),
      image4: require("../../pics/Social undone.png"),
      image5: require("../../pics/Social undone.png"),
      image6: require("../../pics/Social undone.png"),
      title: "Social",
      description:
        "It’s never late to start nurturing lifelong friendships. Build your social routine today!",
    },

    {
      image1: require("../../pics/Reflection pic.png"),
      image2: require("../../pics/Reflection undone.png"),
      image3: require("../../pics/Reflection undone.png"),
      image4: require("../../pics/Reflection undone.png"),
      image5: require("../../pics/Reflection undone.png"),
      image6: require("../../pics/Reflection undone.png"),
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

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
      <img className="image1" src={image1} alt="Badge" />
      <img className="image2" src={image2} alt="Badge-1w" />
      <img className="image3" src={image3} alt="Badge-3w" />
      <img className="image4" src={image4} alt="Badge-5w" />
      <img className="image5" src={image5} alt="Badge-10w" />
      <img className="image6" src={image6} alt="Badge-15w" />
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
        "Come on, you do want to land a decent job after graduation, right? Build your job hunting routine now!",
    },
    // Repeat for each badge...
  ];

  return (
    <div className="badges">
      <h2>Badges Achievements</h2>
      <div className="badge-container">
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
    </div>
  );
}
export default Badges;

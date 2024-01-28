import "../CSS/Badges.css"; // Import your CSS stylesheet
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FormDialog from "../ActivityFeed/FormDialog";

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
  updateCurView
}) => {
  return (
    <Grid container spacing={2} direction="row" alignItems="center" style={{ marginBottom: '10px' }}>
      <Grid item xs={1}>
        <Typography variant="h5" className="badge-title" textAlign="center" style={{ fontSize: '15px', fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <img className="image1" src={image1} alt="Badge-icon" style={{ height: '100%', width: '100%' }} />
      </Grid>
      <Grid item xs={10} container alignItems="center">
        <Box className="badge-text-container">
          <Grid container spacing={2}>
            {[{ src: image2, alt: 'Badge-1w', text: '1W' },
              { src: image3, alt: 'Badge-3w', text: '3W' },
              { src: image4, alt: 'Badge-5w', text: '5W' },
              { src: image5, alt: 'Badge-10w', text: '10W' },
              { src: image6, alt: 'Badge-15w', text: '15W' }].map((item, index) => (
                <Grid item key={index} xs={1.2}>
                  <Box className="badge-text">
                    <img src={item.src} alt={item.alt} className={`image${index + 2}`} style={{ height: '100%', width: '100%' }} />
                    <span>{item.text}</span>
                  </Box>
                </Grid>
              ))}
            <Grid item xs={3}>
              <Typography variant="body2" className="badge-description" style={{display: 'flex', alignItems: 'center', height: '100%', whiteSpace: 'normal' }}>
                {description}
              </Typography>
            </Grid>
            <Grid item xs={3} style={{display: 'flex', alignItems: 'center'}}>
              <FormDialog updateCurView = {updateCurView}/>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

function Badges(props) {
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
          updateCurView = {props.updateCurView}
        />
      ))}
    </div>
  );
}
export default Badges;
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const categories = [
  { id: 1, name: "job-related" },
  { id: 2, name: "health" },
  { id: 3, name: "education" },
  { id: 4, name: "social" },
  { id: 5, name: "hobby" },
  { id: 6, name: "reflect" },
];

function BadgesCategories() {
  const badgeLabels = ["1W", "3W", "5W", "10W", "15W"];

  return (
    <div>
      {categories.map((category) => {
        const iconImagePath =
          require(`../../pics/${category.name.toLowerCase()}-icon.png`).default;
        const badgeImagePath =
          require(`../../pics/${category.name.toLowerCase()}-badge-done.png`).default;

        console.log("Icon Path:", iconImagePath);
        console.log("Badge Path:", badgeImagePath);

        return (
          <Card key={category.id} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                {/* Category Icon */}
                <Grid
                  item
                  style={{ width: "25%", height: "25%", margin: "10px" }}
                >
                  <img
                    alt={`${category.name} Icon`}
                    src={iconImagePath}
                    style={{ width: "120px", height: "120px", margin: "10px" }}
                  />
                </Grid>
                {/* Badges */}
                <Grid
                  item
                  container
                  xs={12}
                  style={{ marginTop: "10px" }}
                  justifyContent="flex-start"
                >
                  {[1, 2, 3, 4, 5].map((badgeNumber) => (
                    <Grid
                      key={badgeNumber}
                      item
                      style={{
                        width: "20%",
                        margin: "5px",
                        textAlign: "center",
                      }}
                    >
                      <img
                        alt={`${category.name} Badge`}
                        src={badgeImagePath}
                        style={{ width: "60px", height: "60px", margin: "5px" }}
                      />
                      {/* Badge Labels */}
                      <Typography variant="body2" color="text.secondary">
                        {badgeLabels[badgeNumber - 1]}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default BadgesCategories;

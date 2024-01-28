import React from "react";
import Grid from "@mui/material/Grid";
import Post from "./Post";

function ActivityFeed({ filter }) {
  return (
    <Grid
      container
      spacing={0}
      style={{ padding: "20px", marginLeft: "50px", width: "1000px" }}
    >
      <Grid
        container
        xs={12}
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "0px",
          height: "auto",
          width: "100%",
        }}
      >
        <Post
          name="Austin"
          text="Keep it up!"
          profilePic="https://cdn-icons-png.flaticon.com/512/13542/13542465.png"
          achievement="3 weeks staying habitual for job hunting"
          community="Job-related"
          filter={filter}
        />
        <Post
          name="Nollie"
          text="Working hard"
          profilePic="https://cdn-icons-png.flaticon.com/512/13542/13542437.png"
          achievement="7 weeks staying habitual for education"
          community="Education"
          filter={filter}
        />
        <Post
          name="Grace"
          text="Drink A LOT OF water"
          profilePic="https://cdn-icons-png.flaticon.com/512/13542/13542450.png"
          achievement="1 weeks staying habitual for health"
          community="Health"
          filter={filter}
        />
      </Grid>
    </Grid>
  );
}
export default ActivityFeed;

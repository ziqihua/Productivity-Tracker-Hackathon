import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

export default function TodoItem(props) {

  let pictures = {};
  pictures["Education"] = "https://cdn-icons-png.flaticon.com/512/747/747086.png";
  pictures["Job-related"] = "https://cdn-icons-png.flaticon.com/512/4115/4115893.png";
  pictures["Health"] = "https://cdn-icons-png.flaticon.com/512/3043/3043918.png ";
  pictures["Social"] = "https://cdn-icons-png.flaticon.com/512/11126/11126148.png ";
  pictures["Hobby"] = "https://cdn-icons-png.flaticon.com/512/2853/2853386.png";
  pictures["Reflect"] = "https://cdn-icons-png.flaticon.com/512/3339/3339551.png ";
  let category = props.habit.category;

  return (
    <Card style={{ height: '200px', width: '100%', padding: '0', marginTop: '10px'}}>
      <CardContent >
        <Grid container spacing={2} alignItems="center">
          {/* Left Part: Icon */}
          <Grid item style={{ width: '25%', height: '25%', margin: '10px' }} >
            <img alt="" src={pictures[category]} style={{ width: '120px', height: '120px', margin: '10px' }} />
          </Grid>
          {/* Center Part: Wording */}
          <Grid item xs={6} style={{ marginLeft: '10px' }} alignItems="flex-start">
            <Typography variant="h5" component="div">
              {props.habit.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
              {props.habit.description} 
            </Typography>
          </Grid>
            <FormControlLabel
                control={<Checkbox style={{ color: "#00e676" }}  sx={{ '& .MuiSvgIcon-root': { fontSize: 80 } }} />}
                label="Mark as Done" labelPlacement="bottom"
            />
          </Grid>
      </CardContent>
    </Card>
  );
}
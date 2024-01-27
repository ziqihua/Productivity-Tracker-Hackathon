import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

export default function Post(props) {
  const achievementStr = 'Has shared an achievement: ' + props.achievement

  return (
    <Card style={{ height: '150px', width: '70%', padding: '0', marginTop: '10px'}}>
      <CardContent >
        <Grid container spacing={2} alignItems="center">
          {/* Left Part: Icon */}
          <Grid item style={{ width: '15%', height: '25%', margin: '10px' }} >
            <Avatar style={{ width: '50%', height: '50%', margin: '10px', border: '4px solid #00e676', padding: '15px' }} alt="Remy Sharp" src= {props.profilePic} /> 
          </Grid>
          {/* Center Part: Wording */}
          <Grid item xs={8} style={{ marginLeft: '10px' }} alignItems="flex-start">
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' , fontSize: "12px" , color: '#00e676', fontWeight: 'bold' }}>
              {achievementStr}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
              {props.text}
            </Typography>
          </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
}
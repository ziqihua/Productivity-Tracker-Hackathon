import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import '../CSS/LoginPage.css';
import LoginForm from './LoginForm';

export default function LoginPage(props){

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
        {/* Background Image */}
        <Grid item xs={12} sm={12} md={12} >
            <Box className = "centerBox" >
            {/* Icon */}
                <Avatar sx={{ m: 1, bgcolor: '#00e676' }}>
                    <LockPersonRoundedIcon />
                </Avatar>
                {/* Title */}
                <h2>Sign In - Habit Tracker</h2>
                {/* Input area */}
                <LoginForm updateCurView ={props.updateCurView} updateUserId = {props.updateUserId}/>
                {/* link -> direct to register*/}
                <Grid id = 'regGrid' container justifyContent="flex-end">
                        <Link id = 'regLink' href="#" variant="body2" onClick = {() => {props.updateCurView(1)}}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                </Grid>
            </Box>
        </Grid>
        </Grid>
      );
    }
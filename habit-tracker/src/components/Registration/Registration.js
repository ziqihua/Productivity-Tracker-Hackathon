import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import '../CSS/Registration.css';
import RegistrationForm from './RegistrationForm';

export default function Registration({updateCurView, updateUserId}){

    return (
        <Grid container component="main" sx={{ overflowY: 'auto', height: '100vh' }}>
        {/* Background Image */}
        <Grid item xs={12} sm={12} md={12}>
            <Box className = "centerBox">
            {/* Icon */}
                <Avatar sx={{ m: 1, bgcolor: '#00e676' }}>
                    <AccountCircleRoundedIcon />
                </Avatar>
                {/* Title */}
                <h2>Create Account for Habit Tracker</h2>
                <RegistrationForm updateCurView = {updateCurView} updateUserId = {updateUserId}/>
                <Grid container justifyContent="flex-end">
                        <Link href="#" variant="body2" onClick = {() => {updateCurView(0)}}>
                            {"Already have an account? Click here"}
                        </Link>
                </Grid>
            </Box>
        </Grid>
        </Grid>
      );
    }
 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import Box from '@mui/material/Box';

export default function RegistrationForm({updateCurView, updateUserId}){
    
    return (
        <Box component="form"  sx={{ mt: 1 }} >
        <TextField
            margin="normal"
            required
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="userName"
            label="Username"
            id="userName"
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            id="userPassword"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            id='signUpBtn'
            name= 'Sign Up'
            sx={{ mt: 3, mb: 3 }}
            style= { {backgroundColor: '#00e676', color: 'white'}}
        >
            Create
        </Button>
    </Box>
    )
}
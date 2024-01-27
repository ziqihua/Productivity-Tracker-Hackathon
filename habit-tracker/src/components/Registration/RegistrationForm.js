import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useState} from 'react';
import {createUser} from '../../api/user';

export default function RegistrationForm({updateCurView, updateUserId}){

    const [newUser, setUser] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        community: ""
    })

    const changeInput = (e)=>{
        setUser((currData) => {
            return {
                ...currData,
                [e.target.name]: e.target.value
            }
        });
    }

    // handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        let matchingUser = await createUser(newUser) // get userId from database
        updateUserId(matchingUser);
        updateCurView(0); // redirect to select hobby
    }
    
    return (
        <Box component="form"  sx={{ mt: 1 }} onSubmit = {handleSubmit}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
            value = {newUser.userEmail}
            onChange= {changeInput}
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="userName"
            label="Username"
            id="userName"
            value = {newUser.userName}
            onChange= {changeInput}
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="userPassword"
            type="password"
            label="Password"
            id="userPassword"
            value = {newUser.userPassword}
            onChange= {changeInput}
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
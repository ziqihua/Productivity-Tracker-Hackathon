import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useState} from 'react';
import {checkUserLogin} from '../../api/user';

export default function LoginForm(props){

    const [inputData, setInput] = useState({
        userEmail: null,
        userPassword: null,
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        let matchingUser = await checkUserLogin(inputData)
        if (matchingUser !== null){
            props.updateUserId(matchingUser);
            props.updateCurView(2);
        }
        else{
            alert("Wrong email or password!");
        }
    }

    const changeInput = (e)=>{
        setInput((currData) => {
            return {
                ...currData,
                [e.target.name]: e.target.value
            }
        });
    }

    return(
        <Box component="form" sx={{ mt: 1 }} onSubmit = {handleSubmit}>
        <TextField
            margin="normal"
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
            onChange={changeInput}
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            type="password"
            id="userPassword"
            onChange={changeInput}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            id="buttonUserSignIn"
            sx={{ mt: 3, mb: 3 }}
            style= { {backgroundColor: '#00e676', color: 'white'}}
        >
            Sign In
        </Button>
    </Box>
    )
}
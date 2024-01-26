import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function LoginForm(props){

    return(
        <Box component="form" sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            type="password"
            id="userPassword"
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
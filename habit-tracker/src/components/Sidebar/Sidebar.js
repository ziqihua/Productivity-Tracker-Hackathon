import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function SidebarPanel(props) {

    const handleLogout = (e) => {
        props.updateCurView(0);
    }

    const handleToDo = (e) => {
        props.updateCurView(2);
    }

    const handleTracker = (e) => {
        props.updateCurView(3);
    }

    const handleBadges = (e) => {
        props.updateCurView(4);
    }

    const handleCommunity = (e) => {
        props.updateCurView(9);
    }

    return (
        <div id="sidebar-panel" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar style={{ height: "1400px" }}>
            <Menu>
            <MenuItem
                style={{ textAlign: "left", margin: "10px 10px 20px", fontSize: '22px' }}
            >
                <h1>Habit Tracker</h1>
            </MenuItem>

            <Grid item style={{ width: '20%', height: '20%', marginLeft: '50px' }} >
                <Avatar style={{ width: '90%', height: '90%', margin: '10px', border: '4px solid #456253', padding: '15px' }} alt="Remy Sharp" src= "https://cdn-icons-png.flaticon.com/512/13542/13542437.png" /> 
            </Grid>

            <MenuItem onClick = {handleToDo} icon={<FactCheckIcon color="success" />} style={{ fontSize: '18px' }} >To-Do</MenuItem>
            <MenuItem onClick = {handleTracker} icon={<EditCalendarIcon color="success"/>} style={{ fontSize: '18px' }}>Tracker</MenuItem>
            <MenuItem onClick = {handleBadges} icon={<EmojiEventsIcon color="success"/>} style={{ fontSize: '18px' }}>Badges</MenuItem>
            <MenuItem onClick = {handleCommunity} icon={<PeopleAltIcon color="success"/>} style={{ fontSize: '18px' }}>Community</MenuItem>
            <MenuItem onClick = {handleLogout} icon={<MeetingRoomIcon color="success"/>} style={{ fontSize: '18px' }}>Sign out</MenuItem>
            </Menu>
        </Sidebar>
        </div>
    );
}

export default SidebarPanel;
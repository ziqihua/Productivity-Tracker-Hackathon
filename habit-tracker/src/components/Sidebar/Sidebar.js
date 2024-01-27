import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

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


    return (
        <div id="sidebar-panel" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar style={{ height: "1000px" }}>
            <Menu>
            <MenuItem
                style={{ textAlign: "left", margin: "10px 10px 20px", fontSize: '22px' }}
            >
                <h1>Habit Tracker</h1>
            </MenuItem>

            <MenuItem icon={<FactCheckIcon color="success" />} style={{ fontSize: '18px' }} >To-Do</MenuItem>
            <MenuItem icon={<EditCalendarIcon color="success"/>} style={{ fontSize: '18px' }}>Tracker</MenuItem>
            <MenuItem icon={<EmojiEventsIcon color="success"/>} style={{ fontSize: '18px' }}>Badges</MenuItem>
            <MenuItem icon={<PeopleAltIcon color="success"/>} style={{ fontSize: '18px' }}>Community</MenuItem>
            <MenuItem onClick = {handleLogout} icon={<MeetingRoomIcon color="success"/>} style={{ fontSize: '18px' }}>Sign out</MenuItem>
            </Menu>
        </Sidebar>
        </div>
    );
}

export default SidebarPanel;
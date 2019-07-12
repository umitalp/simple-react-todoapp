import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CalendarToday from '@material-ui/icons/CalendarToday';

const MeetingList = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <CalendarToday />
                </ListItemIcon>
                <ListItemText primary="Sales Meeting" secondary="14:00 to 15:00 | Jan 5, 2019" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <CalendarToday />
                </ListItemIcon>
                <ListItemText primary="Productivity Decisions" secondary="15:15 to 16:00 | Jan 5, 2019" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <CalendarToday />
                </ListItemIcon>
                <ListItemText primary="Weekly Connectivity Meeting" secondary="16:10 to 17:00 | Jan 5, 2019" />
            </ListItem>
        </List>
    );
}

export default MeetingList;
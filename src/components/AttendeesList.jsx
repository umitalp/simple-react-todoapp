import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBox from '@material-ui/icons/AccountBox';

const AttendeesList = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Arthur Cortez" secondary="arthurcortez@myhotelshop.com" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Terrell Jenkins" secondary="terrelljenkins@myhotelshop.com" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Anita Gray" secondary="anitagray@myhotelshop.com" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Sonia Arnold" secondary="soniaarnold@myhotelshop.com" />
            </ListItem>
        </List>
    );
}

export default AttendeesList;
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBox from '@material-ui/icons/AccountBox';

const OrganizerList = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary="John Doe" secondary="johndoe@myhotelshop.com" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Quinn Marshall" secondary="quinnmarshall@myhotelshop.com" />
            </ListItem>
        </List>
    );
}

export default OrganizerList;
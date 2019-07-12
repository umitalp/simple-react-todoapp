import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import MeetingList from '../MeetingList';
import OrganizerList from '../OrganizerList';
import AttendeesList from '../AttendeesList';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '2rem'
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: '2rem'
    },
    cardsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    card1: {
        backgroundColor: '#C5E1A5',
    },
    card2: {
        backgroundColor: '#FFE082',
    },
    listHeader: {
        marginTop: '2rem'
    }
});

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} className={classes.titleRow}>
                <Typography variant="h4" color="textSecondary" gutterBottom>
                    13:30 | Jan 5, 2019
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Card className={classes.card1}>
                    <CardHeader title='Ongoing Meeting' />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Weekly IT Huddle
                        </Typography>
                        <Typography variant="h4" color="textSecondary" gutterBottom>
                            13:00 to 14:00
                        </Typography>
                        <Typography variant="h5" color="textSecondary" className={classes.listHeader}>
                            Organizers
                        </Typography>
                        <OrganizerList />
                        <Typography variant="h5" color="textSecondary" className={classes.listHeader}>
                            Attendees
                        </Typography>
                        <AttendeesList />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card className={classes.card2}>
                    <CardHeader title='Upcomming Meetings' />
                    <CardContent>
                        <MeetingList />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Home;
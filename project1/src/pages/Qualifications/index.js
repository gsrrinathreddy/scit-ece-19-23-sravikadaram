import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sravika" src="https://tse1.mm.bing.net/th?id=OIP.b5FtNHTGaD0qCSbrzWIbfwHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya institute of technological sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                6.7 CGPA
              </Typography>
              {" — B.tech Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sravika" src="https://tse1.mm.bing.net/th?id=OIP.b5FtNHTGaD0qCSbrzWIbfwHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113" />
        </ListItemAvatar>
        <ListItemText
          primary="Kakatiya Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                83% Percentage
              </Typography>
              {" — Intermediate studies with Computers & Commerce"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sravika" src="https://tse1.mm.bing.net/th?id=OIP.b5FtNHTGaD0qCSbrzWIbfwHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113" />
        </ListItemAvatar>
        <ListItemText
          primary="Sindhu Vidyalayam High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.8 CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

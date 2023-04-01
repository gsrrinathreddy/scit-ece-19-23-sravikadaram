import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://tse4.mm.bing.net/th?id=OIP.CjGRy9RM_WiFSQyJcosXvgHaFU&pid=Api&P=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Python 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Python is a programming language, which is used to build web & software applications,Python programming language  is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}

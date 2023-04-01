import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://tse2.mm.bing.net/th?id=OIP.6JfZJLhyNdrtT5fOe7Cw5wHaD1&pid=Api&P=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          C language
          </Typography>
          <Typography variant="body2" color="text.secondary">
          C is a general-purpose programming language that is extremely popular, simple, and flexible to use.The development of system software and desktop applications is mostly accomplished via the use of C programming. The following are some examples of C programming applications.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}


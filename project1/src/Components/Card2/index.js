import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://tse2.mm.bing.net/th?id=OIP.unZg276qrdUYL_rSFBXkZAHaEy&pid=Api&P=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Ms office
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Microsoft Office is a family of client and server software and services developed by Microsoft. Initially the term for an office suite —a bundled set of Microsoft’s productivity applications—the first version of Microsoft Office contained Microsoft Word , Microsoft Excel , and Microsoft PowerPoint.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}

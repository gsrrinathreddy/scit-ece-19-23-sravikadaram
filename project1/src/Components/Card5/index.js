import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://tse4.mm.bing.net/th?id=OIP.ooONPQ2FmsQbgVKaJKfIrAHaE8&pid=Api&P=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sql server
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SQL Server is a relational database management system (RDBMS) developed by Microsoft. It is primarily designed and developed to compete with MySQL and Oracle database. SQL Server supports ANSI SQL, which is the standard SQL (Structured Query Language) language.
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card>
    
  );

}

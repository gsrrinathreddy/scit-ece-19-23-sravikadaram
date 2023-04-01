import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.0AkJXgwhVdvynExG-vvkAQHaE7&pid=Api&P=0',
    title: 'Watching movies',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.k745XnT4JjMnO4kn42gBQwHaFR&pid=Api&P=0',
    title: 'Listhening to music',
    
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.Afgipm5NiSR020Nx3p1HLAHaEl&pid=Api&P=0',
    title: 'Playing games',
    
  },
  
];



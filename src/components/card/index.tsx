import * as React from 'react';
import {
  Card as CardMui,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
} from '@mui/material';

interface ICard {
  title: string;
  img: string;
  onCardClick: () => void;
  description?: string;
}

export const Card: React.FC<ICard> = ({
  title,
  img,
  description,
  onCardClick,
}) => {
  return (
    <CardMui
      onClick={onCardClick}
      sx={{ maxWidth: 305, margin: 1, padding: 1 }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          style={{ width: 300, height: 300, objectFit: 'contain' }}
          image={img}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          {description && (
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </CardMui>
  );
};

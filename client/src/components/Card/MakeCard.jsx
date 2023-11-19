import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './Card.css';

function MakeCard({ cardData }) {
  return (
    <Card className='custom-card'>
      <CardMedia
        component='img'
        alt={cardData.title}
        height='140'
        image={cardData.imageUrl}
      />
      <CardContent>
        <h2 className='text-xl font-bold mb-2'>{cardData.title}</h2>
        <p className='text-gray-600 mb-2'>{cardData.author}</p>
        <div className='text-yellow-500 mb-2'>Rating: {cardData.rating}</div>
        <div className='text-green-500'>Price: {cardData.price}</div>
      </CardContent>
    </Card>
  );
}

export default MakeCard;

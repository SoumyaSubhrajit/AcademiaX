import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Card.scss';

function MakeCard({ cardData }) {
  return (
    <Card className='custom-card'>
      <CardContent>
        <h2 className='title'>{cardData.title}</h2>
        <p className='author'>{cardData.author}</p>
        <div className='rating'>Rating: {cardData.rating}</div>
        <div className='price'>Price: {cardData.price}</div>
      </CardContent>
    </Card>
  );
}

export default MakeCard;

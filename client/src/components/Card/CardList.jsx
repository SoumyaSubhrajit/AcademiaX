import React from 'react';
import Card from './MakeCard';

const CardList = ({ data }) => {
  return (
    <div className='card-list'>
      {console.log(data)}
      {data.map((cardData, index) => (
        <Card key={index} cardData={cardData} />
      ))}
    </div>
  );
};

export default CardList;

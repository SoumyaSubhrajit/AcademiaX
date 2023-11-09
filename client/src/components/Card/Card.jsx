import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import data from '../data.json'; // by remov ing the name of the data.json the ambiguity problem is resove.

const Card = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(data);
  }, []);

  return (
    <div className='Card'>
      <h1>Dynamic Cards</h1>
      <CardList data={cardData} />
    </div>
  );
};

export default Card;

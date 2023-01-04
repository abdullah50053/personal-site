import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2002-09-21T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const States = () => {
  const statesVisited = 'Alabama, Arizona, Arkansas, California, Colorado, Florida, Georgia, Illinois, Kansas, Louisiana, Mississippi, Nevada, New Mexico, New York, North Carolina, Oklahoma, Oregon, South Carolina, Tennessee, Texas, Utah, Washington';
  const statesVisitedArray = statesVisited.split(', ');
  const statesVisitedArrayLength = statesVisitedArray.length;
  return <>{statesVisitedArrayLength}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Dallas, TX',
  },
  {
    key: 'location',
    label: 'Number of US States Visited',
    value: <States />,
  },
];

export default data;

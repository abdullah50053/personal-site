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
  const statesVisited = 23;
  return <>{statesVisited}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current Age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current City',
    value: 'Dallas, TX',
  },
  {
    key: 'location',
    label: 'Number of US States Visited',
    value: <States />,
  },
  {
    key: 'patents',
    label: 'Number of Patents',
    value: 8,
  },
  {
    key: 'hackathons',
    label: 'Hackathons Organized',
    value: 5,
  },
];

export default data;

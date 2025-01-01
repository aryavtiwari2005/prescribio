import React, { useEffect, useState } from 'react';

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration of the counting animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / endValue));
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);
      if (currentCount >= endValue) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [endValue]);

  return <h3 className="text-3xl font-bold text-yellow-300">{count}K+</h3>;
};

export default Counter;
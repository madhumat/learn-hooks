import React, { useState, useEffect } from 'react';

const IntervalCounterFunction = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);  
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
};

export default IntervalCounterFunction;

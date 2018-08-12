import React from 'react';

const Day = ({ date }) => (
    <div>
        {date.format()}
    </div>
);

export default Day;

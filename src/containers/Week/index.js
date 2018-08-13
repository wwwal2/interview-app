import React from 'react';
import moment from 'moment';
import { cloneDeep } from 'lodash';
import WeekWrapper from './WeekWrapper';
import Day from '../Day';

const Week = ({ weekNumber, monthNumber }) => {
    const startOfWeek = moment().week(weekNumber).startOf('week');
    const days = [startOfWeek];

    for (let i = 1; i < 7; i += 1) {
        days.push(cloneDeep(startOfWeek).add('days', i));
    }

    return (
        <WeekWrapper>
            {days.map(date => (
                <Day
                    date={date}
                    monthNumber={monthNumber}
                />
            ))}
        </WeekWrapper>
    );
};

export default Week;

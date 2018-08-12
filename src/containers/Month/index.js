/* eslint-disable */

import React from 'react';
import moment from 'moment';
import MonthWrapper from './MonthWrapper';
import Week from '../Week';

class Month extends React.Component {
    render() { 
        const { monthNumber } = this.props;
        const startOfMonth = moment().month(monthNumber).startOf('month');
        const endOfMonth = moment().month(monthNumber).endOf('month');
        const startWeekNumber = moment(startOfMonth).week();
        const endWeekNumber = moment(endOfMonth).week();

        const weeks = [];

        for (let i = startWeekNumber; i <= endWeekNumber; i++) {
            weeks.push(
            <Week 
                key={i}
                weekNumber={i}
                monthNumber={monthNumber}
            />
        )}
        
        return (
            <MonthWrapper>
                {weeks}
            </MonthWrapper>
        )
    }
}

export default Month;

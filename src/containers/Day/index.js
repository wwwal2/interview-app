import React from 'react';
import { connect } from 'react-redux';
import DayWrapper from './DayWrapper';

const createDateStr = date => date.format('YYYY-MM-DD');

const Day = ({ date, monthNumber, notes }) => (
    <DayWrapper
        current={date.month() === monthNumber}
    >
        {date.date()}
    </DayWrapper>
);

const mapStateToProps = (state, { date }) => {
    const dateStr = createDateStr(date);
    const notes = state.notes[dateStr];

    console.log('notes', notes);

    return {
        notes,
    };
};

// const mapDispatchToProps = (dispatch) => {
//
// }

export default connect(mapStateToProps)(Day);

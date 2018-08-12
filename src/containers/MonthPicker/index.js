import React from 'react';
import moment from 'moment';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import MonthPickerWrapper from './MonthPickerWrapper';
import Button from './Button';
import MonthWrapper from './MonthWrapper';

export default class MonthPicker extends React.Component {
    handleNextClick = () => {
        const { onMonthChange, monthNumber } = this.props;
        onMonthChange(monthNumber + 1)
    }
    
    handlePrevClick = () => {
        const { onMonthChange, monthNumber } = this.props;
        onMonthChange(monthNumber - 1)
    }

    getMonthName = () => {
        const { monthNumber } = this.props;
        return moment().month(monthNumber).format('MMMM')
    }

    render() {
        const { monthNumber } = this.props;
        return (
            <MonthPickerWrapper>
                <Button
                    disabled={monthNumber <= 0}
                    onClick={this.handlePrevClick}
                >
                    <MdNavigateBefore size={40} />
                </Button>
                <MonthWrapper>
                    {this.getMonthName()}
                </MonthWrapper>
                <Button
                    disabled={monthNumber >= 11}
                    onClick={this.handleNextClick}
                >
                    <MdNavigateNext size={40} />
                </Button>
            </MonthPickerWrapper>
        );
    }
}

import React from 'react';
import moment from 'moment';
import AppWrapper from './AppWrapper';
import MonthPicker from '../MonthPicker';
import Month from '../Month';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
})

class App extends React.Component {
  constructor(props) {
    super(props);

    const monthNumber = moment().month();
    this.state = {
        monthNumber,
    };
  }

  handleMonthChange = monthNumber => { this.setState({ monthNumber })}

  render () {
    const { monthNumber } = this.state;
    return (
      <AppWrapper>
        <MonthPicker 
          monthNumber={monthNumber}
          onMonthChange={this.handleMonthChange}
        />
        <Month 
          monthNumber={monthNumber}
        />
      </AppWrapper>
    )
  }
};

export default App;

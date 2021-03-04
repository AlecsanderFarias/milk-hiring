import React from 'react';
import {View, Text} from 'react-native';
import {format, isSameDay} from 'date-fns';

import {
  Container,
  DayName,
  Line,
  MinIcon,
  Percent,
  Icon,
  Temperature,
} from './styles';

const Day = ({data}) => {
  const dateToShow = () => {
    if (isSameDay(new Date(data.date), new Date())) {
      return 'Hoje';
    }

    return format(new Date(data.date), 'dd/MM/yyyy');
  };

  return (
    <Container>
      <DayName numberOfLines={1}>{dateToShow()}</DayName>

      <Line style={{marginRight: 20}}>
        <MinIcon name="drop" />
        <Percent>{`${Number(data.drainRate).toFixed(1)}%`}</Percent>
      </Line>

      <Line>
        <Temperature>{`${Number(data.minTemperature).toFixed(1)}° / ${Number(
          data.maxTemperature,
        ).toFixed(1)}°`}</Temperature>
      </Line>
    </Container>
  );
};

export default Day;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {isSameDay, format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {useIsFocused} from '@react-navigation/native';

import {requestLocation} from '../../store/modules/climate/actions';
import DayLine from '../../Components/Day';
import NoContent from '../../Components/NoContent';
import {
  SafeContainer,
  Container,
  Title,
  City,
  Box,
  Day,
  Line,
  Temperature,
  Details,
  IconLocation,
  Button,
  ButtonText,
  MinIcon,
} from './styles';

function actualDay(days) {
  return days.find((item) => {
    return isSameDay(new Date(item.date), new Date());
  });
}

const Home = () => {
  const dispatch = useDispatch();
  const climate = useSelector((state) => state.climate);
  const loading = useSelector((state) => state.climate.loading);
  const isFocused = useIsFocused();

  const dateToShow = () => {
    let today = actualDay(climate.days);

    //O dia atual não esta no vetor de dias guardados na memória
    if (!today) {
      //Pegar data do ultimo dia guardado
      if (climate.days.length > 0) {
        return format(
          new Date(climate.days[climate.days.length - 1].date),
          "EEEEEE','d 'de' MMMM",
          {
            locale: pt,
          },
        );
      } else {
        return null;
        /*  'Sem dados para exibição.' */
      }
    } else {
      return format(new Date(today.date), "EEEEEE','d 'de' MMMM", {
        locale: pt,
      });
    }
  };

  const TemperatureToShow = () => {
    let today = actualDay(climate.days);

    //O dia atual não esta no vetor de dias guardados na memória
    if (!today) {
      //Pegar data do ultimo dia guardado
      if (climate.days.length > 0) {
        return climate.days[climate.days.length - 1];
      } else {
        return null;
      }
    } else {
      return today;
    }
  };

  async function getData() {
    dispatch(requestLocation());
  }

  React.useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return (
    <SafeContainer>
      <Container>
        <Title>Clima</Title>

        {dateToShow() !== null ? (
          <>
            <Line mb={20}>
              <City>{climate.cityName}</City>

              {loading ? (
                <ActivityIndicator color="#f8f9fa" style={{marginLeft: 10}} />
              ) : (
                <IconLocation name="location-on" />
              )}
            </Line>

            <Box>
              <Day>{dateToShow()}</Day>
              <Line mb={20}>
                <Temperature>{TemperatureToShow().temperature}°</Temperature>
              </Line>
              <Line>
                <MinIcon name="drop" />
                <Details>{`${Number(TemperatureToShow().drainRate).toFixed(
                  1,
                )}% de chance de chuva`}</Details>
              </Line>
              <Details>{`Temperatura maxima : ${Number(
                TemperatureToShow().maxTemperature,
              ).toFixed(1)}°`}</Details>
              <Details>{`Temperatura minima : ${Number(
                TemperatureToShow().minTemperature,
              ).toFixed(1)}°`}</Details>
            </Box>

            <Box style={{marginBottom: 20}}>
              <Details style={{marginBottom: 30}}>
                {`Atualizado pela ultima vez : ${format(
                  new Date(climate.lastAtt),
                  'dd/MM/yyyy',
                )}`}
              </Details>

              {climate.days.map((item) => (
                <DayLine data={item} />
              ))}
            </Box>

            <Button onPress={() => !loading && getData()}>
              {loading ? (
                <ActivityIndicator color="#212529" />
              ) : (
                <ButtonText>Atualizar</ButtonText>
              )}
            </Button>
          </>
        ) : (
          <NoContent />
        )}
      </Container>
    </SafeContainer>
  );
};

export default Home;

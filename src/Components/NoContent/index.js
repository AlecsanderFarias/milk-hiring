import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {requestLocation} from '../../store/modules/climate/actions';
import {Container, Title, Subtitle, Button, ButtonText} from './styles';

const NoContent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.climate.loading);

  async function getData() {
    dispatch(requestLocation());
  }

  return (
    <Container>
      <Title>Sem dados para exibição</Title>
      <Subtitle>
        Você precisa se conectar com a internet pela primeira vez para capitar
        dados novos!
      </Subtitle>
      <Button onPress={() => /* !loading && */ getData()}>
        {loading ? (
          <ActivityIndicator color="#212529" />
        ) : (
          <ButtonText>conectar-se</ButtonText>
        )}
      </Button>
    </Container>
  );
};

export default NoContent;

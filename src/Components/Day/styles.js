import styled from 'styled-components/native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwsome from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const DayName = styled.Text`
  flex: 1;
  color: #f8f9fa;
  font-size: 18px;
  font-weight: 600;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MinIcon = styled(IconEntypo).attrs({
  size: 10,
  color: '#f8f9fa',
})`
  margin-right: 5px;
`;

export const Percent = styled.Text`
  font-size: 12px;
  color: #6c757d;
  margin-right: 15px;
`;

export const Icon = styled(IconAwsome).attrs({
  size: 20,
  color: '#f8f9fa',
})`
  margin-right: 10px;
`;

export const Temperature = styled.Text`
  color: #f8f9fa;
  font-size: 16px;
  font-weight: 600;
`;

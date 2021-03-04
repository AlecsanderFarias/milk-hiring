import styled from 'styled-components/native';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwsome from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';

export const SafeContainer = styled.SafeAreaView`
  background-color: #212529;
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
})`
  padding-top: 60px;
`;

export const Title = styled.Text`
  color: #f8f9fa;
  font-size: 56px;
  margin-bottom: 10px;
`;

export const City = styled.Text`
  color: #f8f9fa;
  font-size: 18px;
`;

export const Box = styled.View`
  background-color: #343a40;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Day = styled.Text`
  color: #adb5bd;
  font-size: 14px;
  margin-bottom: 20px;
  margin-right: auto;
`;

export const Line = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: ${(props) => props.mb || 5}px;
  justify-content: ${(props) => props.justify || 'center'};
`;

export const Icon = styled.View`
  width: 50px;
  height: 50px;
  background-color: red;
  margin-right: 10px;
`;

export const Temperature = styled.Text`
  color: #fff;
  font-size: 18px;
  font-size: 42px;
`;

export const IconLocation = styled(IconMaterial).attrs({
  size: 30,
  color: '#f8f9fa',
})`
  margin-left: 10px;
`;

export const IconClimate = styled(IconAwsome).attrs({
  size: 42,
  color: '#f8f9fa',
})`
  margin-right: 10px;
`;

export const Details = styled.Text`
  color: #adb5bd;
  font-size: 14px;
  margin-right: auto;
  margin-bottom: 5px;
`;

export const NoInfoText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-size: 32px;
  width: 100%;
  text-align: center;
`;

export const MinIcon = styled(IconEntypo).attrs({
  size: 10,
  color: '#f8f9fa',
})`
  margin-right: 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #dee2e6;
  padding: 15px 20px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 100px;
`;

export const ButtonText = styled.Text`
  color: #212529;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

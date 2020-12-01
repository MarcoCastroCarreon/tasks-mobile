import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

const HeaderCard = (props) => (
  <View {...props}>
    <Text category="h2" style={{ paddingTop: 0 }}>{props.title}</Text>
  </View>
);

export default HeaderCard;
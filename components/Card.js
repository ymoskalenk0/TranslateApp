/**
 * @flow
 */

import React from 'react';
import { Dimensions, View } from 'react-native';

const Card = ({ children, styles }) => (
  <View
    style={{
      padding: 15,
      width: Dimensions.get('window').width - 30,
      shadowOffset: { width: 0, height: 3 },
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 24,
      borderRadius: 15,
      backgroundColor: '#fff',
      ...styles,
    }}>
    {children}
  </View>
);

export default Card;

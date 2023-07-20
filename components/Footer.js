import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.textheading}>
        All rights reserved by ZoomKar 2023{' '}
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    flex: 0.07,
    backgroundColor: '#58afef',
    justifyContent: 'center',
  },
  textheading: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
     fontStyle: 'italic',
  },
});

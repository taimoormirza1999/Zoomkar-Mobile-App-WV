import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header({ name }) {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.textheading}>{name} </Text>
    </View>
    // <Text style={headerStyles.textheading}>{Little Lemon} </Text>
  );
}
const headerStyles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColet: '#00aeef',
    flexDirection: 'row', // Center contentehorizontally and herticallt
    justifyContent: 'center', // Optional, you can remove this line as it's not needed anymore
    alignItems: 'center',
  },
  textheading: {
    flex: 1,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    paddingTop: 7,
  },
});

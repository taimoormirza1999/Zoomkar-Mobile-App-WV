import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header({name}) {
  return (
    <View style={headerStyles.container}>
            <Text style={headerStyles.textheading}>{name} </Text>
    </View>
   // <Text style={headerStyles.textheading}>{Little Lemon} </Text>
  );
}
const headerStyles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#EE9972',
    justifyContent: 'center',
  },
  textheading: {
    flex:1,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingTop:30,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';

export default function WelcomeScreen() {
  return (
  // <View style={{ flex: 1,  backgroundColor: '#495E57',marginTop:10 }}>
  
  <ScrollView indicatorStyle="white"  style={welcomeScreenStyles.container}>
  <Text style={welcomeScreenStyles.heading}>Welcome to Little Lemon</Text>
          <Text style={welcomeScreenStyles.subheading}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear more about your experience with us!
          </Text>
         
  </ScrollView>
  // </View>

  );
}

const welcomeScreenStyles = StyleSheet.create({
container:{
flex: 1,  
marginTop:10,
},
  heading: {
    paddingVertical:20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color:'white',
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color:'white', // removed 'px' from here
  },
});

import React, { useState } from 'react';
import { ScrollView, StyleSheet,KeyboardAvoidingView,
  Platform, Text, TextInput } from 'react-native';

const FormFeedback = () => {
  // declare the variables
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [Email, onChangeEmail] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView style={styles.container} keyboardDismissMode="on-drag">
      <Text style={styles.headingSection}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        placeholder='First Name'
        onChangeText={onChangeFirstName}
         keyboardType={"phone-pad"} 
      />
      <TextInput
        style={styles.input}
        value={lastName}
        placeholder='last Name'
        onChangeText={onChangeLastName}
      />
      <TextInput placeholder='Email'
      value={Email}
      style={styles.input}
      onChangeText={onChangeEmail}
       />
      <TextInput
       
        value={message}
         editable
       multiline={true} 
        numberOfLines={4}
         style={styles.messageInput}
        placeholder='Your Message'
        onChangeText={onChangeMessage}
      />
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE', // Fixed the error here
    backgroundColor: '#EDEFEE',
  },
  messageInput: {
   height:100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
   
    fontSize: 16,
    backgroundColor: '#EDEFEE',
  },
  infoSection: {
    fontSize: 22,
    padding: 10,
    marginVertical: 5,
    color: '#EDEFEE',
    textAlign: 'center',
  
  },
  headingSection: {
    fontSize: 24,
    padding: 10,
    marginVertical: 5,
    color: '#EDEFEE',
    textAlign: 'center',
   
  },
});

export default FormFeedback;

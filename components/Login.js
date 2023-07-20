import { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from 'react-native';
export default function LoginScreen() {
  const { email, OnchnageEmail } = useState('');
  const { password, OnchnagePassword } = useState('');
  const [Login, setLogin] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        {!Login ? 'Login to continue' : 'You are Logged in!'}{' '}
      </Text>
     {!Login && ( <>
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={OnchnageEmail}
        />
        <TextInput
          placeholder="Password"
          style={[styles.input, { marginVertical: 10 }]}
          value={password}
          secureTextEntry={true}
          onChangeText={OnchnagePassword}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable style={styles.button} onPress={() => {setLogin(!Login);}}>
            <Text style={styles.text}>Log in</Text>
          </Pressable>
        </View>
      </>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  input: {
    borderRadius: 100,
    padding: 10,
    paddingLeft:15,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: 'white',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  button: {
    borderColor: '#EE9972',
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#EE9972', // Change to desired color
    width: 150,
    marginVertical:10,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
});

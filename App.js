import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';
import Footer from './components/Footer';
import WebViewScreen from './components/WebViewScreen';
export default function App() {
  return (
    <View style={styles.container}>
  <Header name="Zoomkar"/>
      <View style={styles.content}>
        <WebViewScreen />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
  },
  content: {
    flex: 0.98,
  },
});

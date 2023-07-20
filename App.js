import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItemScrollView from './components/MenuItemScrollView';
import MenuItemFlatList from './components/MenuItemFlatList';
import MenuItemSectionList from './components/MenuItemSectionList';
import FormFeedback from './components/FormFeedback';
import Login from './components/Login';
import WebViewScreen from './components/WebViewScreen';
// import Cafe from './components/Cafe'; // Remove this if you're not using it
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
  //<Header name="WebViewScreen" />
export default function App() {
  return (
    <View style={styles.container}>
    
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
    backgroundColor: '#333333',
  },
  content: {
    flex: 0.98,
    // paddingHorizontal:8 // This ensures that this View takes up the remaining space
  },
});

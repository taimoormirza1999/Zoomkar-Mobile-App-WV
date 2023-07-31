import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
   
        <WebView
          source={{ uri: 'https://staging.zoomkar.com/' }}
          style={styles.webview}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#00aeef', // Ensure the SafeAreaView background color matches the StatusBar background color
  },
  webview: {
    flex:1,
  },
});

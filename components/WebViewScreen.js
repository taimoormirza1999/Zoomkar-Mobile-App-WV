import React from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, SafeAreaView,StatusBar  } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <WebView
          source={{ uri: 'https://staging.zoomkar.com/' }}
          style={styles.webview}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  webview: {
    flex: 1,
  },
});

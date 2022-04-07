import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <WebView
      style={{flex: 1}}
      originWhitelist={['*']}
      source={'index.html'}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

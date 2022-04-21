import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
      style={StyleSheet.absoluteFillObject}
      provider={MapView.PROVIDER_GOOGLE}
      region={{
        latitude: 30.6152473,
        longitude: -96.3421577,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      >
      </MapView>
      
      <StatusBar style="auto" />
    </View>
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
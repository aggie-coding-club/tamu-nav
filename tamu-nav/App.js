import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.body}>
      <Text>Main Page </Text>
    </View>
  );
}





const styles = StyleSheet.create({
  body: {
    flex: 1,
    algnItems: 'centers',
  },
});

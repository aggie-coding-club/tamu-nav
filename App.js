import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen from './screens/MapScreen';
import MapListScreen from './screens/MapListScreen';
import { setNavigator } from './screens/navigationRef';


const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App 
      ref={navigator => {
        setNavigator(navigator)
      }}
    />
  );
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up .jsdfafffffs to adsf  on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

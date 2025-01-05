import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {game} from './Src/Game'

import {LinearGradient} from 'expo-linear-gradient'
export default function App() {
  return (
    
    <linearGradient color={['orange']} style={styles.container}>
        <View style={styles.Overlay}>
          <Game/>
        </View>
    </linearGradient>
     
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  Overlay:
  {
    flex:1,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  }
});

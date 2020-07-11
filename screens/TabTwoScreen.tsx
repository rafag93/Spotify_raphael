import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spotify</Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#121212"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"green"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

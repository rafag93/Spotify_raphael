import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export default function TabOneScreen() {
  let ScreenHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0.0, 0]}
        end={[0.05, 0.15]}

        colors={['rgba(135,136,104, 0.2)', 'transparent']}
        style={{
          position: 'absolute',
          left: -29,
          right: 0,
          top: -30,
          height: ScreenHeight
        }}
      />
      <Text style={styles.title}></Text>
      <View style={styles.iconSetting}><MaterialIcons size={24} name="settings" color="white" style={{ marginBottom: -3 }} /></View>


    </View>
  );
}

const styles = StyleSheet.create({
  iconSetting: {
    position: 'absolute',
    right: 15,
    top: 30,
    backgroundColor: "transparent"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#121212"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

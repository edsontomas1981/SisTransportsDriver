import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-paper';

import Login from "./components/login"
import * as React from "react";
export default function App() {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

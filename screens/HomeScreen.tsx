import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { Text, Button, Title } from 'react-native-paper';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: '80%' }}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {props.navigation.navigate('Car Behavior')}}
        >
          Setup Engineer
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 70,
    paddingRight: 70,
    // height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    width: 175
  }
});
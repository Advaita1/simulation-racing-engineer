import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { Text, Button, Title } from 'react-native-paper';

export default function CornerLocationScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Title>In what part of the corner is your car {route.params.carBehavior}ing?</Title>
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {
            navigation.navigate('Setup Fixes', {
              carBehavior: route.params.carBehavior,
              cornerSpeed: route.params.cornerSpeed,
              cornerLocation: 'entry'
            });
          }}
        >
          Entry
        </Button>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {
            navigation.navigate('Setup Fixes', {
              carBehavior: route.params.carBehavior,
              cornerSpeed: route.params.cornerSpeed,
              cornerLocation: 'apex'
            });
          }}
        >
          Apex
        </Button>
      </View>
      <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {
            navigation.navigate('Setup Fixes', {
              carBehavior: route.params.carBehavior,
              cornerSpeed: route.params.cornerSpeed,
              cornerLocation: 'exit'
            });
          }}
        >
        Exit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 70,
    paddingRight: 70,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    width: 125
  }
});
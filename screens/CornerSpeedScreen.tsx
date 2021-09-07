import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { Text, Button, Title } from 'react-native-paper';

export default function CornerSpeedScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Title>What type of corner is your car {route.params.carBehavior}ing in?</Title>
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {
            navigation.navigate('Corner Location', {
              carBehavior: route.params.carBehavior,
              cornerSpeed: 'fast'
            });
          }}
        >
          Fast
        </Button>
      </View>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => {
          navigation.navigate('Corner Location', {
            carBehavior: route.params.carBehavior,
            cornerSpeed: 'slow'
          });
        }}
      >
        Slow
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
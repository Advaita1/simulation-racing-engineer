import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { Text, Button, Title } from 'react-native-paper';

export default function CarBehaviorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title>I would like to fix:</Title>
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {
            navigation.navigate('Corner Speed', { carBehavior: 'oversteer' });
          }}
        >
          Oversteer
        </Button>
      </View>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => {
          navigation.navigate('Corner Speed', { carBehavior: 'understeer' });
        }}
      >
        Understeer
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
    width: 175
  }
});
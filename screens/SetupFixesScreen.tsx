import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Caption, Subheading, Text, Title, Surface, Badge } from 'react-native-paper';
import { data } from '../data';

export default function SetupFixesScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Title>
        Here are some changes orderded from higher to lower handling impact.
      </Title>
      <View style={styles.fixes}>
        {
          data[route.params.carBehavior][route.params.cornerSpeed][route.params.cornerLocation].map(
            (fix, index) => {
              return (
                <View>
                  <Text
                    style={{ fontSize: 18, marginTop: 5, marginBottom: 5 }}
                    key={index}
                  >
                      <Badge key={index + 100}/>
                      {fix}
                  </Text>
                </View>
              );
            }
          )
        }
        {/* <Divider /> */}
      </View>
      <Caption>
        Always check tire pressures before and after any adjustment.
        Only one change at a time.
      </Caption>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    // height: 450,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fixes: {
    margin: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderColor: '#dfe1e5',
    borderWidth: 1
  }
});
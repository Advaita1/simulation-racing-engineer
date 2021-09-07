import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CarBehaviorScreen from './screens/CarBehaviorScreen';
import CornerSpeedScreen from './screens/CornerSpeedScreen';
import CornerLocationScreen from './screens/CornerLocationScreen';
import SetupFixesScreen from './screens/SetupFixesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <View style={styles.container}>
          {/* <Appbar.Header>
            <Appbar.Content title="Setup Engineer" />
          </Appbar.Header> */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerBackTitle: 'Back'
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Car Behavior"
              component={CarBehaviorScreen}
            />
            <Stack.Screen
              name="Corner Speed"
              component={CornerSpeedScreen}
            />
            <Stack.Screen name="Corner Location" component={CornerLocationScreen} />
            <Stack.Screen name="Setup Fixes" component={SetupFixesScreen} />
          </Stack.Navigator>
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Arial'
  },
});
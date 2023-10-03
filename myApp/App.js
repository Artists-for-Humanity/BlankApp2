import React from 'react';
import 'react-native-gesture-handler';
import { View, Image, StyleSheet, Text, Button } from 'react-native'; // Make sure to import 'Text' and 'Button'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import NewNote from './src/NewNotes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="NewNote" component={NewNote} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
  },
  logoContainer: {
    Top: 55,
  },
  logo: {
    width: 130,
    height: 40,
  },
  textButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  categoryContainer: {
    marginRight: 200,
    marginLeft: 5,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  note1: {
    width: 350,
    height: 140,
    borderRadius: 10,
    padding: 18,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#75AED2',
  },
  note2: {
    width: 350,
    height: 140,
    borderRadius: 10,
    padding: 18,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#958AD2',
  },
  preview: {
    width: 300,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
  },
  previewText: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22, // Adjust the line height as needed
  },
  date: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
  },
  folder1: {
    width: 350,
    height: 140,
    borderRadius: 10,
    padding: 18,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#E17B96',
  },
  folder2: {
    width: 350,
    height: 140,
    borderRadius: 10,
    padding: 18,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#75AED2',
  },
});

export default App;

// Imports de React et React Native :
import React from 'react';
import {View, Text} from 'react-native';

// Import des dépendences React Navigation :
// Doc : https://reactnavigation.org/docs/getting-started
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Création des stacks
const Stack = createNativeStackNavigator();

// Component imports :
import Home from './src/Components/Pages/Home/Home';

export const App = () => {
  return (
    // Balise englobante pour les stacks
    <NavigationContainer>
      {/* Déclaration de la navigation */}
      <Stack.Navigator>
        {/*
         Routes : 
          - name: Nom de la page (affiché)
          - component: composant cible
         */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

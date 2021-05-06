import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { HomePage } from './src/pages/HomePage';

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' component={HomePage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

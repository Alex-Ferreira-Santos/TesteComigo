import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { HomePage } from './src/pages/HomePage';
import { Map } from './src/pages/Map';
import { CreateAccount } from './src/pages/CreateAccount';
import { Profile } from './src/pages/Profile';
import {UserProvider} from './src/Context/UserContext'

const Stack = createStackNavigator()

function App(){
  return(
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomePage' component={HomePage} options={{headerShown:false}}/>
          <Stack.Screen name='Map' component={Map} options={{headerShown:false}}/>
          <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}}/>
          <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;

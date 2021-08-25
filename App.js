import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/presentation/login/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/Store'

const Stack = createStackNavigator();

const app = (props) => {
  return (
     <Provider store={store}>
       <NavigationContainer>
         <Stack.Navigator >
            <Stack.Screen name = "Login" component = {LoginScreen} />
         </Stack.Navigator>
       </NavigationContainer>
     </Provider>
  );
}

export default app;

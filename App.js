import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from './screens/home/Home.component';
import Login from './screens/login/Login.component';
import SignUp from './screens/signup/SignUp.component';
import Main from './screens/main/Main.component';
import Contact from './screens/main/contact';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
            name="contact"
            component={Contact}
            options={{ title: 'Contact' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

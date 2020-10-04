import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './screens/Home/Home.component';
import SignIn from './screens/SignIn/SignIn.component';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './screens/Home/Home.component';
import SignIn from './screens/SignIn/SignIn.component';

const Stack = createStackNavigator();

const email = '';
const password = '';

const App = () => {

    const register = async () => {
        //url
        const url = 'https://jsonplaceholder.typicode.com/posts';

        // Headers
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        // Request Body
        const body = JSON.stringify({email, password});

        try {
            let response = await fetch(url, settings, body);
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    
    const login = async () => {

        //url
        const url = 'https://jsonplaceholder.typicode.com/posts';
    
        // Headers
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        // Request Body
        const body = JSON.stringify({email, password});

        try {
            let response = await fetch(url, settings, body);
            let data = await response.json();

            // use response to authenticate
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    register();
    login();

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
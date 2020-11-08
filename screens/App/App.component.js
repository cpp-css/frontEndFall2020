import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '../Home/Home.component';
import Login from '../Login/Login.component';
import SignUp from '../SignUp/SignUp.component';
import Main from '../Navigation/Navigation.component';
import Contact from '../Contact/Contact.component';
//import { Context } from "../../Context";
import UserSettings from "../UserSettings/UserSettings.component";

import { UserProvider } from '../../context/UserContext';

const Stack = createStackNavigator();

// <Context.Provider value={[context, setContext]}>

const App = () => {
    //const [context, setContext] = useState([]);
    
    return (
        <UserProvider>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen 
                name="Main"
                component={Main}
                options={{headerShown: false}}
                />
                <Stack.Screen
                    name="contact"
                    component={Contact}
                    options={{ title: 'Contact' }}
                />
                <Stack.Screen
                    name="User Settings"
                    component={UserSettings}
                />
            </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;

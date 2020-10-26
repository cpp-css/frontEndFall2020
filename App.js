import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './screens/Home/Home.component';
import Login from './screens/Login/Login.component';
import SignUp from './screens/SignUp/SignUp.component';
import Main from './screens/Navigation/Navigation.component';
import Contact from './screens/Contact/Contact.component';
import { Context } from "./components/Context.js";
import UserSettings from "./screens/UserSettings/UserSettings.component";

const Stack = createStackNavigator();

const App = () => {
    const [context, setContext] = useState([]);
    
    return (
        <Context.Provider value={[context, setContext]}>
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
        </Context.Provider>
    );
};

export default App;

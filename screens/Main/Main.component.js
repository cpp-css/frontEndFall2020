import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import news from './tabbar/news';
import directory from './tabbar/directory';
import homeTabbar from './tabbar/home';
import profile from './tabbar/profile';

const Tab = createMaterialBottomTabNavigator();

class Main extends React.Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Main"
                activeColor="#FFFFFF"
                inactiveColor="#FFFFFF"
                barStyle={{ backgroundColor: '#111111' }}>
                <Tab.Screen
                    name="Main"
                    component={homeTabbar}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="News"
                    component={news}
                    options={{
                        tabBarLabel: 'News',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="newspaper-variant"
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Directory"
                    component={directory}
                    options={{
                        tabBarLabel: 'Directory',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="application"
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default Main;

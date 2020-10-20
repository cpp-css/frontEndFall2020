import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Components
import Feed from '../Feed/Feed.component';
import Events from '../Events/Events.component';
import Clubs from '../Clubs/Clubs.component';
import Profile from '../Profile/Profile.component';

const Tab = createMaterialBottomTabNavigator();

const Main = () => {

    const icons = [
        {
            name: "Feed",
            component: Feed,
            iconName: "newspaper-variant"
        },
        {
            name: "Events",
            component: Events,
            iconName: "application"
        },
        {
            name: "Clubs",
            component: Clubs,
            iconName: "account-group"
        },
        {
            name: "Profile",
            component: Profile,
            iconName: "account"
        }
    ]

    const iconItems = icons.map((icon, key) => 
        <Tab.Screen 
            key={key}
            name={icon.name}
            component={icon.component}
            options={{
                tabBarLabel: icon.name,
                tabBarIcon: ({color}) => ( 
                    <MaterialCommunityIcons name={icon.iconName} color={color} size={26}/>
                )
            }}
        />
    );

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#92d050"
            inactiveColor="#FFFFFF"
            barStyle={{ backgroundColor: '#111111' }}>
            { iconItems }
        </Tab.Navigator>
    );
}

export default Main;

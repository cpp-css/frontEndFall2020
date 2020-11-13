import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Context
import { EventProvider } from '../../context/EventContext';

// Components
import Feed from '../Feed/Feed.component';
import Events from '../Events/Events.component';
import Clubs from '../Clubs/Clubs.component';
import Profile from '../Profile/Profile.component';
import CreateEvent from '../CreateEvent/CreateEvent.component';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const EventStack = () => {
    return(
        <Stack.Navigator initialRouteName="Events">
            <Stack.Screen
                name="Events" 
                component={Events}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CreateEvent"
                component={CreateEvent}
                options={{ title: "Create Event"}}
            />
        </Stack.Navigator>
    )
}

const Main = ({route, navigation}) => {
    
    const icons = [
        {
            name: "Feed",
            component: Feed,
            iconName: "newspaper-variant"
        },
        {
            name: "Events",
            component: EventStack,
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
            <EventProvider>
                <Tab.Navigator
                    initialRouteName="Feed"
                    activeColor="#92d050"
                    inactiveColor="#FFFFFF"
                    barStyle={{ backgroundColor: '#111111' }}>
                    { iconItems }
                </Tab.Navigator>
            </EventProvider>
    );
}

export default Main;

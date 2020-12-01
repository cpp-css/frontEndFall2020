import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text, EventEmitter } from "react-native";

// Components
import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

// api
import { getRegisteredEvents, getPublishedEvents } from "../../api/event";

import styles from "./Feed.styles";

// Context
import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

const Feed = () => {
    const { publishedEvents, setPublishedEvents } = useContext(EventContext);
    const { token, setRegisteredEvents, registeredEvents } = useContext(UserContext);
    let currDate = null;

    useEffect(() => {
        getPublishedEvents().then(events => {
            setPublishedEvents(events);
        }).catch(error => {
            console.error(error);
        })

        getRegisteredEvents(token).then(events => {
            setRegisteredEvents(events);
        }).catch(error => {
            console.error(error);
        })
    },[]);

    // Checks the startDate if it is new.
    // If startDate is new, return element
    // If not, return null 
    const getDate = (data) => {
        let UTCDate = new Date(data).toString().split(" ");
        let returnDate = "";

        for ( let i = 0; i < 4; i++ ) {
            if ( i % 2 == 0 ) {
                if ( i == 2 && UTCDate[2][0] == "0" ) {
                    returnDate += UTCDate[i][1] + ", ";
                } else {
                    returnDate += UTCDate[i] + ", ";
                }
            } else {
                returnDate += UTCDate[i] + " ";
            }
        }

        if (currDate === returnDate) {
            return null;
        } else {
            currDate = returnDate;
            return <Text style={styles.dateBetweenCards}>{returnDate}</Text>;
        }
    }

    const eventList = publishedEvents.sort((a, b) => a.start_date > b.start_date)
        .map((event) => {
            let isRegistered = registeredEvents.some(regEvent => regEvent.event_id === event.event_id);
            if (isRegistered) {
            return (
                <View key={event.event_id}>
                    {getDate(event.start_date)}
                    <SubscribedCard
                        event_id={event.event_id}
                        title={event.event_name}
                        source={require('../../assets/images/CareerCenterWorkshop.jpg')}
                    />
                </View>)
            }
        }
    );

    return (
        <View style={styles.layout}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {eventList}
        </ScrollView>
        </View>
    );
};

export default Feed;

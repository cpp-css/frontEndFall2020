import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text, EventEmitter } from "react-native";

// Components
import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

// api
import { getRegisteredEvents } from "../../api/event";

import styles from "./Feed.styles";

// Context
import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

const Feed = () => {
    const { publishedEvents } = useContext(EventContext);
    const { token, setRegisteredEvents, registeredEvents } = useContext(UserContext);
    let currDate = null;

    useEffect(() => {
        getRegisteredEvents(token).then(events => {
            setRegisteredEvents(events);
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

    const eventList = registeredEvents.map(event => 
        <SubscribedCard
            key={event.event_id}
            event_id={event.event_id}
            title={event.event_name}
            source={require('../../assets/images/CareerCenterWorkshop.jpg')}
        />
    )
    /*
    const eventList = publishedEvents.sort((a, b) => (a.startDate > b.startDate) ? 1 :
        ((b.startDate > a.startDate) ? -1 : 0)).map((event, id) => 
        (registeredEvents.indexOf(event.title) !== -1) ?
        (<View>
            {getDate(event.startDate)}
            <SubscribedCard
            key={id}
            title={event.title}
            theme={event.theme}
            perks={event.perks}
            org={event.org}
            desc={event.desc}
            startDate={event.startDate}
            link={event.link}
            source={event.image}
            />
        </View>) : null
    );
    */
    return (
        <View style={styles.layout}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {eventList}
        </ScrollView>
        </View>
    );
};

export default Feed;

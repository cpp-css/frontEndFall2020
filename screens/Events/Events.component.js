import Axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';
import Button from '../../components/MainButton/MainButton.component';

// Context
import { EventContext } from '../../context/EventContext';
import { UserContext } from '../../context/UserContext';

// Styles
import styles from './Events.styles';

const axios = require("axios");
const { width } = Dimensions.get('window');

const Events = ({navigation}) => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const { publishedEvents, setPublishedEvents } = useContext(EventContext);
    const { userEvents, isAdmin } = useContext(UserContext);

    const getEvents = async () => {
        const url = "http://10.0.2.2:9090/event/published_list";

        const settings = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        try {
            let response = await axios.get(url, settings);
            setPublishedEvents(response.data.result);
        } catch(error) {
            console.error("Events: " + error);
        }
    }

    useEffect(() => {
        console.log("Fetch Events");
        console.log(isAdmin);
        getEvents();
    }, []);

    let filteredCards = publishedEvents.filter((event) => {
            return event.event_name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        }
    );

    return (
        <View style={{alignItems: 'center'}}>
            <Searchbar
                style={styles.searchBox}
                placeholder="Search"
                onChangeText={(query) => {
                    setSearchQuery(query);
                }}
                value={searchQuery}
            />
            {isAdmin && <Button
                onPress={() => {
                    navigation.push('CreateEvent');
                }}
                label="Create Event"
                containerStyle={{padding: '-2%'}}
            />}
            <ScrollView
               showsHorizontalScrollIndicator={false}
               horizontal={true}
               decelerationRate={0}
               snapToInterval={width - 60}
               snapToAlignment={"center"}
               contentInset={{
                   top: 0,
                   left: 30,
                   bottom: 0,
                   right: 30
               }}>
                {filteredCards.sort((a, b) => (a.startDate > b.startDate) ? 1 :
                    ((b.startDate > a.startDate) ? -1 : 0)).map((card, id) =>
                    (userEvents.indexOf(card.title) === -1) ?
                    (<EventCard
                       key={card.event_id}
                       title={card.event_name}
                       theme={card.theme}
                       perks={card.perks}
                       org={card.organization_id}
                       desc={card.info}
                       startDate={card.start_date}
                       endDate={card.end_date}
                       link={card.link}
                       source={require('../../assets/images/CareerCenterWorkshop.jpg')}
                        />) : console.log(card.id)
               )} 
            </ScrollView>

        </View>
    );
};

export default Events;

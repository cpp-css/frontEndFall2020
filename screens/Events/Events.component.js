import React, { useContext, useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions,Alert } from 'react-native';
// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';

// Styles
import styles from './Events.styles';

import { UserContext } from '../../context/UserContext';
import Button from '../../components/MainButton/MainButton.component';

const axios = require("axios");
const { width } = Dimensions.get('window');

const Events = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [events, setEvents] = useState([]);
    const { token } = useContext(UserContext);
    const onChangeSearch = query => setSearchQuery(query);

    const createEvent = async () => {
		const url = 'http://10.0.2.2:9090/event/add/e8d45ca3-ee88-4ef4-8bbd-812c37249c6b';

		const settings = {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
			},
		};

		const body = {
            event_name: "Career fair 2031",
            start_date: "2020-10-30T22:25:01+00:00",
            end_date: "2020-10-30T22:25:01+00:00",
            theme: "job finding",
            perks: "money",
            categories: "business",
            info:  "test"
        }

		try {
            let response = await axios.post(url, body,settings);
            console.log(response.data);
            if(response.data.success==false)
                Alert.alert(response.data.message);
		} catch (error) {
			console.error(error);
		}
    };
    const getEvents = async () => {
        const url = 'http://10.0.2.2:9090/event/published_list'; 
        const settings = {
          headers: {
            "Content-Type": "application/json",
          },
        };
  
        try {
          let response = await axios.get(url, settings);
          setEvents(
              response.data.result
          );
          console.log(events)
        } catch (error) {
          console.error(error);
        }
      };
    const approveEvent = async (eventID) => {
		const url = 'http://10.0.2.2:9090/event/approve/'+ eventID;

		const settings = {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
			},
		};

		const body = {
            
        }

		try {
            let response = await axios.put(url, body,settings);
            console.log(response.data);
            if(response.data.success==false)
                Alert.alert(response.data.message);
		} catch (error) {
			console.error(error);
		}
    };
    useEffect(() => {
        getEvents();
      }, []);

    let filteredCards = events.filter(
        (event) => {
            return event.event_name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        }
    );
    return (
        <View style={{alignItems: 'center'}}>
            <Searchbar
                style={styles.searchBox}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Button
                        onPress={() => {
                            createEvent()
                        }}
                        style={{backgroundColor: '#CD5C5C'}}
                        label="Create"
                    />
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
               {filteredCards.map((card, id) =>
                    <EventCard
                       key={id}
                       event_id={card.event_id}
                       name={card.event_name}
                       info={card.info}
                       date={card.end_date}
                       perks={card.perks}
                       theme={card.theme}
                       source={require("../../assets/images/CareerCenterWorkshop.jpg")}
                    />
               )} 
            </ScrollView>

        </View>
    );
};

export default Events;

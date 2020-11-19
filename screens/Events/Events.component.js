import React, { useContext, useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions,Alert } from 'react-native';

// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';
import Button from '../../components/MainButton/MainButton.component';

// Styles
import styles from "./Events.styles";

// Context
import { UserContext } from "../../context/UserContext";

const axios = require("axios");
const { width } = Dimensions.get("window");

const Events = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allEvents, setAllEvents] = useState([]);
  const { events, setEvents, token} = useContext(UserContext);
  const onChangeSearch = (query) => setSearchQuery(query);

  const getEvents = async () => {
    const url = "http://10.0.2.2:9090/event/published_list";
    const settings = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios.get(url, settings);
      setAllEvents(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const approveEvent = async (eventID) => {
    const url = "http://10.0.2.2:9090/event/approve/" + eventID;

    const settings = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const body = {};

    try {
      let response = await axios.put(url, body, settings);
      console.log(response.data);
      if (response.data.success == false) Alert.alert(response.data.message);
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    getEvents();
  }, []);
  
  console.log(events);
  let filteredCards = events.filter((event) => {
    return (
      event.event_name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  });
  return (
    <View style={{ alignItems: "center" }}>
      <Searchbar
        style={styles.searchBox}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button
        onPress={() => {
          navigation.push('CreateEvent');
        }}
        label="Create Event"
        containerStyle={{padding: '-2%'}}
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
          right: 30,
        }}>
        {filteredCards.sort((a, b) => (a.startDate > b.startDate) ? 1 :
        ((b.startDate > a.startDate ? -1 : 0))).map((card, id) => 
        (getEvents.indexOf(card.title) === -1) ?
          (<EventCard
            key={id}
            event_id={card.event_id}
            title={card.event_name}
            org={card.org}
            info={card.info}
            date={card.end_date}
            perks={card.perks}
            theme={card.theme}
            source={require("../../assets/images/CareerCenterWorkshop.jpg")}
          />) : console.log(card.id)
        )}
      </ScrollView>
    </View>
  );
};

export default Events;

import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
//import { Context } from "../../Context";

import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

import styles from "./Feed.styles";

import { UserContext } from '../../context/UserContext';

const axios = require("axios");

const Feed = () => {
  const [events, setEvents] = useState([]);
  const { token } = useContext(UserContext);
  const { userEvents } = useContext(UserContext);

  useEffect(() => {
    const getEvents = async () => {
      const url = 'http://10.0.2.2:9090/user/events';

      const settings = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      };
      
      const body = { 
      }

      try {
        let response = await axios.get(url,settings);
        console.log(response.data);
        setEvents(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  const eventList = events.map((card,id) => (
      <SubscribedCard
      key={id}
                       event_id={card.event_id}
                       name={card.event_name}
                       info={card.info}
                       date={card.end_date}
                       perks={card.perks}
                       theme={card.theme}
                       source={require("../../assets/images/CareerCenterWorkshop.jpg")}
    />)
    
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

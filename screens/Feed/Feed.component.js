import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
//import { Context } from "../../Context";

import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

import styles from "./Feed.styles";

import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

const axios = require("axios");

const Feed = () => {
  const { token } = useContext(UserContext);
  const { allEvents } = useContext(EventContext);
  const { userEvents, setUserEvents } = useContext(UserContext);

  useEffect(() => {
    const getEvents = async () => {
      const url = 'http://10.0.2.2:9090/user/events';

      const settings = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      };

      try {
        let response = await axios.get(url,settings);
        setUserEvents(response.data.events);
        console.log(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  const eventList = userEvents.map((card,id) => (
      <SubscribedCard
        key={id}
        event_id={card.event_id}
        event_name={card.event_name}
        info={card.info}
        end_date={card.end_date}
        start_date={card.start_date}
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

import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
//import { Context } from "../../Context";

import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

import styles from "./Feed.styles";

import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';
import { Card } from "react-native-paper";

const axios = require("axios");

const Feed = () => {

  const { token } = useContext(UserContext);
  const { allEvents } = useContext(EventContext);
  const { userEvents, setUserEvents } = useContext(UserContext);
  let currDate = null;


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

  const eventList = userEvents.sort((a, b) => (a.startDate > b.startDate) ? 1 :
        ((b.startDate > a.startDate) ? -1 : 0)).map((card,id) => 
        (userEvents.indexOf(card.title) !== -1) ?
        (<View>
          {getDate(card.startDate)}
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
    /></View>): console.log(card.id)

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

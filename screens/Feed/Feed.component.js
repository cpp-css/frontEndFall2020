import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
//import { Context } from "../../Context";

import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

import styles from "./Feed.styles";

import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

const axios = require("axios");

const Feed = () => {
<<<<<<< HEAD
  const [events, setEvents] = useState([]);
  const { token } = useContext(UserContext);
=======
  //const [events, setEvents] = useState([]);
  const { allEvents } = useContext(EventContext);
>>>>>>> upstream/master
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
<<<<<<< HEAD
        let response = await axios.get(url,settings);
        console.log(response.data);
        setEvents(response.data.events);
=======
        let response = await axios.get(url, settings);
        //console.log(response);
        /*
        setEvents([
          {
            id: 1,
            title: "Career Center Workshop",
            org: "Computer Science Society",
            date: "Tuesday, May 10, 2020",
            link: "https://github.com",
            image: require("../../assets/images/CareerCenterWorkshop.jpg")
          },
          {
            id: 2,
            title: "Capture The Flag",
            org: "Software Engineering Association",
            date: "Saturday, November 17, 2019",
            link: "https://github.com",
            image: require("../../assets/images/CTF.png")
          },
          {
            id: 3,
            title: "Guest Speaker: Lance Kimberlin from Bilizzard",
            org: "Computer Science Society",
            date: "Tuesday, May 10, 2020",
            link: "https://github.com",
            image: require("../../assets/images/Blizzard.png")
          },
        ]); // hardcoded for now
        */
>>>>>>> upstream/master
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

<<<<<<< HEAD
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
=======
  const eventList = allEvents.map((event, id) => (
    userEvents.indexOf(event.title) !== -1) ?
      (<SubscribedCard
      key={id}
      title={event.title}
      org={event.org}
      date={event.date}
      link={event.link}
      source={event.image}
    />) : console.log(event.id)
>>>>>>> upstream/master
    
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

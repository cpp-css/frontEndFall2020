import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
//import { Context } from "../../Context";

import SubscribedCard from "../../components/SubscribedCard/SubscribedCard.component";

import styles from "./Feed.styles";

import { UserContext } from '../../context/UserContext';

const axios = require("axios");

const Feed = () => {
  const [events, setEvents] = useState([]);
  const { userEvents } = useContext(UserContext);

  useEffect(() => {
    const getEvents = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts"; // temporary
      
      const settings = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        let response = await axios.get(url, settings);
        //console.log(response);
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
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  const eventList = events.map((event) => (
    userEvents.indexOf(event.title) !== -1) ?
      (<SubscribedCard
      key={event.id}
      title={event.title}
      org={event.org}
      date={event.date}
      link={event.link}
      source={event.image}
    />) : console.log(event.id)
    
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

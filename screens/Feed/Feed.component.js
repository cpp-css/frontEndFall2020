import * as React from "react";
import { useState, Component, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";

import EventCard from "../../components/EventCard/EventCard.component";

import styles from "./Feed.styles";
const axios = require("axios");

const Feed = () => {
  const [events, setEvents] = useState([]);

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
            title: "Event",
            org: "SWIFT",
            date: "10/16/20",
            link: "http",
            image: require("../../assets/images/CareerCenterWorkshop.jpg"),
          },
          {
            id: 2,
            name: "Event",
            org: "CSS",
            date: "10/18/20",
            link: "http",
            image: require("../../assets/images/CareerCenterWorkshop.jpg"),
          },
          {
            id: 3,
            name: "Event",
            org: "CSS",
            date: "10/18/20",
            link: "http",
            image: require("../../assets/images/CareerCenterWorkshop.jpg"),
          },
          {
            id: 4,
            name: "Event",
            org: "CSS",
            date: "10/18/20",
            link: "http",
            image: require("../../assets/images/CareerCenterWorkshop.jpg"),
          },
        ]); // hardcoded for now
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, []);

  const eventList = events.map((event) => (
    <EventCard
      key={event.id}
      title={event.title}
      org={event.org}
      date={event.date}
      link={event.link}
      source={event.image}
      onPress={() => console.log("yeeee")}
    />
  ));
  return (
    <View style={styles.layout}>
      <ScrollView>{eventList}</ScrollView>
    </View>
  );
};

export default Feed;

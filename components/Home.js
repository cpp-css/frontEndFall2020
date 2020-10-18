import * as React from 'react';
import {useState, Component, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
const axios = require('axios');

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts'; // temporary

      const settings = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      try {
        let response = await axios.get(url, settings);
        console.log(response);
        setEvents([
          {
            id: 1,
            name: 'SWIFT',
            date: '10/16',
            link: 'http',
          },
          {
            id: 2,
            name: 'CSS',
            date: '10/18',
            link: 'http',
          },
        ]); // hardcoded for now
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  });

  const eventList = events.map((event) => (
    <View key={event.id}>
      <Text>{event.name}</Text>
      <Text>{event.date}</Text>
      <Text>{event.link}</Text>
    </View>
  ));
  return <ScrollView>{eventList}</ScrollView>;
};

export default Home;

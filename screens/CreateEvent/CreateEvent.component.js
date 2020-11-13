import React, { useState, useContext } from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';

import styles from './CreateEvent.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';
import DateModal from '../../components/DateModal/DateModal.component';

// Context
import { EventContext } from '../../context/EventContext'
import { UserContext } from "../../context/UserContext";

const axios = require("axios");

const CreateEvent = () => {
    const { events, setEvents, addEvent } = useContext(UserContext);
    const { token } = useContext(UserContext);

    const form = {
        eventName: "",
        creator_id: 0,
        org_id: 0,
        theme: "",
        perks: "",
        categories: [],
        startDate: new Date(),
        endDate: new Date(),
        info: "",
        image: require('../../assets/images/space.jpg'),
    }

    const [eventData, setEventData] = useState(form);
    
    const createEvent = async () => {
        const url =
          "http://10.0.2.2:9090/event/add/e5ba288a-760b-4215-a441-d7497ccd0fbd";
    
        const settings = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
    
        const body = {
          event_name: eventData.eventName,
          start_date: eventData.startDate,
          end_date: eventData.endDate,
          theme: eventData.theme,
          perks: eventData.perks,
          categories: eventData.categories,
          info: eventData.info,
        };
    
        try {
          let response = await axios.post(url, body, settings);
          console.log(response.data);
          if (response.data.success == false) Alert.alert(response.data.message);
          else{
            body.event_id=response.data.message.event_id
            addEvent(body)
          }
        } catch (error) {
          console.error(error);
        }
    };

    return(
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Text> Select a image. </Text>
            </View>
            <TextLabel
                label="Title"
                placeholder="Hackpoly 2020"
                onChangeText={ text => {
                    setEventData(oldState => ({
                        ...oldState,
                        EventName: text
                    }));
                }}
            />
            <TextLabel
                label="Organization"
                placeholder="Computer Science Society"
                onChangeText={ text => {
                    setEventData(oldState => ({
                        ...oldState,
                        org: text
                    }));
                }}
            />
            <TextLabel
                label="Theme"
                placeholder="Hackathon"
                onChangeText={ text => {
                    setEventData(oldState => ({
                        ...oldState,
                        theme: text
                    }));
                }}
            />
            <TextLabel
                label="Perks"
                placeholder="Team up and build connection while struggling!"
                onChangeText={ text => {
                    setEventData(oldState => ({
                        ...oldState,
                        perks: text
                    }));
                }}
            />
            <DateModal
                label="Start Date"
                currentDate={eventData.startDate}
                displayDate={eventData.startDate}
                onDateChange={date => {
                    setEventData(oldState => ({
                        ...oldState,
                        startDate: date
                    }));
                }}
            />
            <DateModal
                label="End Date"
                currentDate={eventData.endDate}
                displayDate={eventData.endDate}
                onDateChange={date => {
                    setEventData(oldState => ({
                        ...oldState,
                        endDate: date
                    }));
                }}
            />
            <TextLabel
                label="Description"
                placeholder="Hackpoly 2020"
                onChangeText={ text => {
                    setEventData(oldState => ({
                        ...oldState,
                        info: text
                    }));
                }}
                multiline={true}
            />
			<Button 
				label="Submit" 
                containerStyle={{marginTop: '10%', marginBottom: '15%'}}
                onPress={() => createEvent()}
			/>
            {console.log(eventData)}
        </ScrollView>
    );
}

export default CreateEvent;
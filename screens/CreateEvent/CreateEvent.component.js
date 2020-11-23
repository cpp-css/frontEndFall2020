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
    
    const { events, setEvents, addEvent } = useContext(UserContext);
    const { token } = useContext(UserContext);
    const [eventData, setEventData] = useState(form);


    const createEvent = async () => {
        const url =
          "http://10.0.2.2:9090/event/add/94ead6db-0e9b-4375-88b2-f5bbcdb36df3"; // organization id

    
        const settings = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
    
        const body = {
          event_name: eventData.eventName,

          start_date: "2020-11-30T11:59:59+00:00", 
          end_date: "2020-11-30T11:59:59+00:00",

          theme: eventData.theme,
          perks: eventData.perks,
          categories: eventData.categories,
          info: eventData.info,
        };
    
        try {
          let response = await axios.post(url, body, settings);

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

                        eventName: text

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
import React, { useState, useContext } from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';

import styles from './EditEvent.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';
import DateModal from '../../components/DateModal/DateModal.component';

// Context
import { EventContext } from '../../context/EventContext'
import { UserContext } from "../../context/UserContext";

const axios = require("axios");

const EditEvent = () => {
    const { currentEvent, setEvents, editEvent } = useContext(UserContext);

    const form = {
        eventName: currentEvent.eventName,
        creator_id: currentEvent.creator_id,
        org_id: currentEvent.org_id,
        theme: currentEvent.theme,
        perks: currentEvent.perks,
        categories: currentEvent.categories,
        start_date: new Date(),
        end_date: new Date(),
        info: currentEvent.info,
        image: require('../../assets/images/space.jpg'),
    }

    const [eventData, setEventData] = useState(form);
    
    const { token } = useContext(UserContext);
    

    const edit_event = async () => {
        const url =
          "http://10.0.2.2:9090/event/" + currentEvent.event_id;
    
        const settings = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
    
        const body = {
          event_name: eventData.eventName,
          start_date: eventData.start_date.toISOString().slice(0, 19),
          end_date: eventData.end_date.toISOString().slice(0, 19),
          theme: eventData.theme,
          perks: eventData.perks,
          categories: eventData.categories,
          info: eventData.info,
        };
    
        try {
          let response = await axios.post(url, body, settings);
          if (response.data.success == false) Alert.alert(response.data.message);
          else{
            body.event_id=currentEvent.event_id
            editEvent(body)
            Alert.alert("Success");
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
                currentDate={eventData.start_date}
                displayDate={eventData.start_date}
                onDateChange={date => {
                    setEventData(oldState => ({
                        ...oldState,
                        start_date: date
                    }));
                }}
            />
            <DateModal
                label="End Date"
                currentDate={eventData.end_date}
                displayDate={eventData.end_date}
                onDateChange={date => {
                    setEventData(oldState => ({
                        ...oldState,
                        end_date: date
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
				label="Save Changes" 
                containerStyle={{marginTop: '10%', marginBottom: '15%'}}
                onPress={() => edit_event()}
			/>
            {console.log(eventData)}
        </ScrollView>
    );
}

export default EditEvent; 
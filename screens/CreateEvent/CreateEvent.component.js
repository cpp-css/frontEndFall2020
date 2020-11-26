import React, { useState, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './CreateEvent.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';
import DateModal from '../../components/DateModal/DateModal.component';

// Context
import { EventContext } from '../../context/EventContext'

const CreateEvent = () => {

    const form = {
        title: "",
        creator_id: 0,
        org_id: 0,
        theme: "",
        perks: "",
        categories: [],
        startDate: new Date(),
        endDate: new Date(),
        desc: "",
        image: require('../../assets/images/space.jpg'),
    }

    const [eventData, setEventData] = useState(form);
    const { allEvents, setEvents } = useContext(EventContext);

    const onSubmitData = () => {
        console.log("yeee")
        setEvents([...allEvents, eventData]);
    }

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
                        title: text
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
                        desc: text
                    }));
                }}
                multiline={true}
            />
			<Button 
				label="Submit" 
                containerStyle={{marginTop: '10%', marginBottom: '15%'}}
                onPress={onSubmitData}
			/>
            {console.log(eventData)}
        </ScrollView>
    );
}

export default CreateEvent;
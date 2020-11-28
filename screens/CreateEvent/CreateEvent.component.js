import React, { useState, useContext } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './CreateEvent.styles';

import { getOrganizationInfo } from '../../api/organization';

// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';
import DateModal from '../../components/DateModal/DateModal.component';

// Context
import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';
import { useEffect } from 'react';

const axios = require('axios');

const CreateEvent = ({ navigation }) => {

    const form = {
        eventName: "",
        startDate: new Date(),
        endDate: new Date(),
        theme: "",
        perks: "",
        categories: "",
        info: "",
        image: require('../../assets/images/space.jpg'),
    }

    const [eventForm, setEventForm] = useState(form);
    const [organizationList, setOrganizationList] = useState([]);
    const [organizationId, setOrganizationId] = useState("");
    const { token, roles } = useContext(UserContext);
    const { publishedEvents, setPublishedEvents } = useContext(EventContext);

    const approveEvent = async(eventId) => {
        const url = "http://10.0.2.2:9090/event/approve/" + eventId;

        const settings = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        }

        try {
            let response = await axios.put(url, {}, settings);
            setPublishedEvents([...publishedEvents, response.data.message]);
            console.log(response.data.message);
        } catch(error) {
            console.error(error);
        }
    }

    const SubmitEvent = async () => {
        const url = "http://10.0.2.2:9090/event/add/" + organizationId;

        const settings = {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
        };

        const body = {
            event_name: eventForm.eventName,
            start_date: eventForm.startDate.toISOString().slice(0, 19),
            end_date: eventForm.endDate.toISOString().slice(0, 19),
            theme: eventForm.theme,
            perks: eventForm.perks,
            categories: eventForm.categories,
            info: eventForm.info
        }

        try {
            let response = await axios.post(url, body, settings);
            if (!response.data.success) {
                Alert.alert(response.data.message);
            } else {
               /* 
                   For now, we will just automatically approve the event the moment it gets created.
                   In the future, we will add unpublish events when we have the UI for it.
               */
               approveEvent(response.data.message.event_id);
               navigation.goBack();
            }
        } catch(error) {
            console.error(error);
        }
    }

    const populateRole = async () => {
        roles.map(group => {
            if (group.role == ("ADMIN" || "CHAIRMAN")) {
                getOrganizationInfo(group.organization_id)
                .then(info => {
                    const currentObject = {
                        name: info.org_name,
                        id: group.organization_id
                    };

                    const alreadyExist = organizationList.some(object => object.name === currentObject.name);
                    if (!alreadyExist) {
                        setOrganizationList([...organizationList, currentObject]);
                    }
                })
            }
        });
    }

    useEffect(() => {
        populateRole();
    }, []);

    const onSubmitData = () => {
        SubmitEvent();
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
                    setEventForm(oldState => ({
                        ...oldState,
                        eventName: text
                    }));
                }}
            />
            <View>
                <Text style={styles.text}> Organization </Text>
                <View style={styles.organizationPickerContainer}>
                    <Picker
                        selectedValue={organizationId}
                        onValueChange={groupId => {
                            setOrganizationId(groupId);
                        }}>
                        {organizationList.map(group => 
                            <Picker.Item 
                                key={group.id}
                                label={group.name} 
                                value={group.id}
                            />
                        )}
                    </Picker>
                </View>
            </View>
            <TextLabel
                label="Theme"
                placeholder="Hackathon"
                onChangeText={ text => {
                    setEventForm(oldState => ({
                        ...oldState,
                        theme: text
                    }));
                }}
            />
            <TextLabel
                label="Perks"
                placeholder="Team up and build connection while struggling!"
                onChangeText={ text => {
                    setEventForm(oldState => ({
                        ...oldState,
                        perks: text
                    }));
                }}
            />
            <TextLabel
                label="Categories"
                placeholder="Programming"
                onChangeText={ text => {
                    setEventForm(oldState => ({
                        ...oldState,
                        categories: text
                    }));
                }}
            />
            <DateModal
                label="Start Date"
                currentDate={eventForm.startDate}
                displayDate={eventForm.startDate}
                onDateChange={date => {
                    setEventForm(oldState => ({
                        ...oldState,
                        startDate: date
                    }));
                }}
            />
            <DateModal
                label="End Date"
                currentDate={eventForm.endDate}
                displayDate={eventForm.endDate}
                onDateChange={date => {
                    setEventForm(oldState => ({
                        ...oldState,
                        endDate: date
                    }));
                }}
            />
            <TextLabel
                label="Description"
                placeholder="Hackpoly 2020"
                onChangeText={ text => {
                    setEventForm(oldState => ({
                        ...oldState,
                        info: text
                    }));
                }}
                multiline={true}
            />
			<Button 
				label="Submit" 
                containerStyle={{marginTop: '10%', marginBottom: '15%'}}
                onPress={onSubmitData}
			/>
        </ScrollView>
    );
}

export default CreateEvent;
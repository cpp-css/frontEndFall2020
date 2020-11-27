import React, { useState, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './CreateEvent.styles';

import { getOrganizationInfo } from '../../actions/organization';

// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';
import DateModal from '../../components/DateModal/DateModal.component';

// Context
import { EventContext } from '../../context/EventContext'
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';

const CreateEvent = () => {

    const form = {
        event_name: "",
        startDate: new Date(),
        endDate: new Date(),
        creator_id: 0,
        organization_id: 0,
        theme: "",
        perks: "",
        info: "",
        image: require('../../assets/images/space.jpg'),
    }

    const [eventData, setEventData] = useState(form);
    const [organizationList, setOrganizationList] = useState([]);
    const [organization, setOrganization] = useState("");
    const { allEvents, setEvents } = useContext(EventContext);
    const { roles } = useContext(UserContext);

    useEffect(() => {
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
    }, []);

    const onSubmitData = () => {
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
            <View>
                <Text style={styles.text}> Organization </Text>
                <View style={styles.organizationPickerContainer}>
                    <Picker
                        selectedValue={organization}
                        onValueChange={item => {
                            setOrganization(item);
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
        </ScrollView>
    );
}

export default CreateEvent;
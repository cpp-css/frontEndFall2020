import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Context } from '../../Context';
import styles from './EventCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

import { useNavigation } from '@react-navigation/native'
import { EventContext } from '../../context/EventContext';

const EventCard = (props) => {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const { userEvents, setUserEvents } = useContext(UserContext);
    const UTCDate = new Date(props.startDate).toString();

    return(
        <View>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {UTCDate} </Text>

                <Text> {props.link} </Text>
            </TouchableOpacity>
            
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onBackdropPress = { () => this.setState({isVisible:false})}
                >
                
                <View style={styles.containerPopUp}>
                    
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.desc} </Text>
                    <Text style={styles.datePopUp}> {UTCDate} </Text>
                    <Button
                        onPress={() => {
                            Alert.alert("You successfully have registered for " + props.title + " on " + props.startDate + "!");
                            setUserEvents([...userEvents, props.title]);
                            setModalVisible(!isModalVisible);
                            console.log([...userEvents, props.title]);
                        }}
                        style={{backgroundColor: '#92d050'}}
                        label="RSVP"
                    />
                    <Button
                        onPress={() => {
                            setModalVisible(!isModalVisible);
                        }}
                        style={{backgroundColor: '#CD5C5C'}}
                        label="Exit"
                    />
                    <Button
                       onPress={() => 
                            {
                                setModalVisible(!isModalVisible);
                                navigation.navigate('CreateEvent')
                              
                        }}
                        style={{backgroundColor: '#CEB888'}}
                        label="Edit Event"
                    
                    
                    />

                </View>
            </Modal>
           
        </View>
    )
}

export default EventCard;
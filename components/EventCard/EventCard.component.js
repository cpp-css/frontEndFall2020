import React, { useState, useContext } from 'react';
import { Text, Image, TouchableWithoutFeedback, View, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../../components/Context.js';
import styles from './EventCard.styles';
import Modal from 'react-native-modal';

const EventCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [context, setContext] = useContext(Context);
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return(
        <View>
            <TouchableOpacity style={styles.container} onPress={toggleModal}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.link} </Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.datePopUp}> {props.date} </Text>
                    <Text> {props.link} </Text>
                    <TouchableOpacity style={styles.btnPopUp}>
                        <Text style={styles.btnText} 
                        onPress={
                            () => {
                                Alert.alert("You successfully have registered for " + props.title + " on " + props.date + "!")
                                setContext([...context,props.title]);
                            }
                        }>RSVP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPopUp}>
                        <Text style={styles.btnText} onPress={toggleModal}>Exit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default EventCard;
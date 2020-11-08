import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

const SubscribedCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const { userEvents, setUserEvents } = useContext(UserContext);

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source} />
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.link} </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.datePopUp}> {props.date} </Text>
                    <Text> {props.link} </Text>
                    <Button
                        onPress={() => {
                            Alert.alert("You successfully have registered for " + props.title + " on " + props.date + "!");
                            //setUserEvents([...userEvents, props.title]);
                            setModalVisible(!isModalVisible);
                            console.log([...userEvents, props.title]);
                        }}
                        style={{ backgroundColor: '#92d050' }}
                        label="Unsubscribe"
                    />
                    <Button
                        onPress={() => {
                            setModalVisible(!isModalVisible);
                        }}
                        style={{ backgroundColor: '#CD5C5C' }}
                        label="Exit"
                    />
                </View>
            </Modal>
        </View>
    )
}

export default SubscribedCard;
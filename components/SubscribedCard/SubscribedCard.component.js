import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

const SubscribedCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const { userEvents, removeUserEvents } = useContext(UserContext);

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Image style={styles.image} source={props.source} />
                <Text style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}{"\n"}</Text>
                    <Text>Theme: {props.theme}{"\n"}</Text>
                    <Text>Perks: {props.perks}</Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.desc} </Text>
                    <Text style={styles.datePopUp}> {props.date} </Text>
                    <Button
                        onPress={() => {
                            removeUserEvents([...userEvents, props.title]);
                            setModalVisible(!isModalVisible);
                            Alert.alert("You have unsubscribed from " + props.title + " on " + props.date + ".");
                            console.log([...userEvents]);
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
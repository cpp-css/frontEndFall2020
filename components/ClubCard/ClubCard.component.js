import React, { useState,useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ClubCard.styles';

import { UserContext } from "../../context/UserContext";

import Button from '../MainButton/MainButton.component';

const axios = require("axios");

const ClubCard = (props,navigation) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const {token} = useContext(UserContext);
    //const { userEvents, setUserEvents } = useContext(UserContext);

    const subscribeToOrg = async (org_id) => {
        const url = "http://10.0.2.2:9090/organization/register/"+ org_id;
        const settings = {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          };
        const body ={

        }
        try {
          let response = await axios.post(url, body,settings);
          if(response.data.success !== true)
            Alert.alert(response.data.message)
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Image style={styles.image} source={props.source} />
                <Text style={styles.textContainer}>
                    <Text style={styles.org}> {props.org_name}{"\n"} </Text>
                    <Text> Related to: {props.categories} </Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text style={styles.orgPopUp}> {props.org_name} </Text>
                    <Image style={styles.imagePopUp} source={props.source} />
                    <Text style={styles.relatedToPopUp}> Related to: {props.categories} </Text>
                    <Button
                        onPress={() => {
                                subscribeToOrg(props.org_id)
                            //setUserEvents([...userEvents, props.title]);
                            setModalVisible(!isModalVisible);
                            //console.log([...userEvents, props.title]);
                        }}
                        style={{ backgroundColor: '#92d050' }}
                        label="Subscribe"
                    />
                    <Button
                        onPress={() => {
                            setModalVisible(!isModalVisible);
                        }}
                        style={{ backgroundColor: '#CD5C5C' }}
                        label="Exit"
                    />
                    {/* <Button
                        onPress={() => {
                            navigation.push('CreateEvent');
                        }}
                        style={{ backgroundColor: '#CD5C5C' }}
                        label="Create Event"
                    /> */}
                </View>
            </Modal>
        </View>
    )
}

export default ClubCard;
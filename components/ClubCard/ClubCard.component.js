import React, { useState, useEffect } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ClubCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

import { getOrganizationInfo } from '../../api/organization';

const ClubCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [organization, setOrganization] = useState('');
    //const { token } = useContext(UserContext);

    useEffect(() => {
        getOrganizationInfo(props.organization_id).then(res => {
            setOrganization(res);
        })
    }, []);

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Image style={styles.image} source={props.source} />
                <Text style={styles.textContainer}>
                    <Text style={styles.org}> {props.name}{"\n"} </Text>
                    <Text> Related to: {props.relatedTo} </Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text style={styles.orgPopUp}> {props.name} </Text>
                    <Image style={styles.imagePopUp} source={props.source} />
                    <Text style={styles.infoPopUp}> {props.info} </Text>
                    <Text style={styles.relatedToPopUp}> Related to: {props.relatedTo} </Text>
                    <Button
                        onPress={() => {
                            Alert.alert("You successfully have subscribed to "
                                + props.org + "!");
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
                </View>
            </Modal>
        </View>
    )
}

export default ClubCard;
import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Context } from '../../Context';
import styles from './ClubCard.styles';

const ClubCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    //const [context, setContext] = useContext(Context);

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Text style={styles.org}> {props.org} </Text>
                <Text> Related to: {props.relatedTo} </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text style={styles.orgPopUp}> {props.org} </Text>
                    <Image style={styles.imagePopUp} source={props.source} />
                    <Text style={styles.linkPopUp}> {props.link} </Text>
                    <Text style={styles.infoPopUp}> {props.info} </Text>
                    <Text style={styles.relatedToPopUp}> Related to: {props.relatedTo} </Text>
                    <TouchableOpacity style={styles.btnPopUp}>
                        <Text style={styles.btnText}
                            onPress={
                                () => {
                                    Alert.alert("You successfully have subscribed to " 
                                    + props.org + "!")
                                    //setContext([...context, props.title]);
                                }
                            }>Suscribe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPopUp}>
                        <Text
                            style={styles.btnText}
                            onPress={() => {
                                setModalVisible(!isModalVisible)
                            }}>
                            Exit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default ClubCard;
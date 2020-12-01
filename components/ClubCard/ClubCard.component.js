import React, { useState, useEffect, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ClubCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

import { getOrganizationInfo, joinOrganization, leaveOrganization } from '../../api/organization';

const ClubCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [organization, setOrganization] = useState('');
    const { token, roles, setRoles, removeRole } = useContext(UserContext);
    const [isMember, setIsMember] = useState(false);

    const joinOrganizationHandler = () => {
        joinOrganization(organization.organization_id, token).then(() => {
            const newRole = {
                "organization_id": organization.organization_id,
                "role": "MEMBER"
            }
            setRoles([...roles, newRole]);
            setModalVisible(!isModalVisible);
            setIsMember(true);
        }).catch(error => {
            console.error(error);
        })
    }

    const leaveOrganizationHandler = () => {
        leaveOrganization(organization.organization_id, token).then(() => {
            removeRole(organization.organization_id);
            setIsMember(false);
        }).catch(error => {
            console.error(error);
        })
    }

    useEffect(() => {
        getOrganizationInfo(props.organization_id).then(res => {
            setOrganization(res);

            roles.map(group => {
                console.log("MAP: ", group, organization.organization_name);
                if (group.organization_id === organization.organization_id) {
                    setIsMember(true);
                }
            })
        }).catch(error => {
            console.error(error);
        })
        console.log("MEMEBR? :", isMember);
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
                    {!isMember ? 
                    <Button
                        onPress={joinOrganizationHandler}
                        style={{ backgroundColor: '#92d050' }}
                        label="Subscribe"
                    /> :
                    <Button
                        onPress={leaveOrganizationHandler}
                        style={{ backgroundColor: '#92d050' }}
                        label="Unsubscribe"
                    />}
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
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableWithoutFeedback, Wrapper } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Button from '../MainButton/MainButton.component';
import styles from './DateModal.styles';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

const DateModal = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <View>
            <Text style={styles.text}> {props.label} </Text>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(!isModalVisible)}>
                <View style={styles.displayContainer}>
                    <View style={styles.displayDateContainer}>
                        <Text style={styles.displayDateText}> {props.displayDate.toDateString()} </Text>
                    </View>
                    <View style={styles.displayTimeContainer}>
                        <Text style={styles.displayTimeText}> {formatAMPM(props.displayDate)} </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade">
                <TouchableWithoutFeedback style={styles.container} onPress={() => setIsModalVisible(!isModalVisible)}>
                    <View style={styles.container}>
                        <View style={styles.datePickerContainer}>
                            <DatePicker
                                style={{alignSelf: 'center'}}
                                date={props.currentDate}
                                onDateChange={props.onDateChange}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default DateModal;
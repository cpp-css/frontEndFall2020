import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './MainButton.styles';

const MainButton = (props) => {

    const [debounce, setDebounce] = useState(false);

    const debounceCheck = () => {
        if (!debounce) {
            setDebounce(true);
            props.onPress();
        }
        setTimeout(() => setDebounce(false), 500);
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={debounceCheck}>
                <Text style={styles.label}> {props.label} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainButton;
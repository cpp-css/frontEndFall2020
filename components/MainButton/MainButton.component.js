import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './MainButton.styles';

const MainButton = (props) => {

    const [debounce, setDebounce] = useState(false);
    let timer;

    const debounceCheck = () => {
        if (!debounce) {
            setDebounce(true);
            props.onPress();
        }
        timer = setTimeout(() => setDebounce(false), 500)

    }

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        }
    });

    return(
        <View style={[styles.container, props.containerStyle]}>
            <TouchableOpacity style={[styles.button, props.style]} onPress={debounceCheck}>
                <Text style={styles.label}> {props.label} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainButton;
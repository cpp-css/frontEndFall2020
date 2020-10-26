import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './TextLabel.styles';

const TextLabel = (props) => {
    return (
        <View style={props.style}>
            <Text style={styles.text}> {props.label} </Text>
            <TextInput 
                style={styles.textField}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
                textStyle={props.textStyle}
            />
        </View>
    )
}

export default TextLabel;
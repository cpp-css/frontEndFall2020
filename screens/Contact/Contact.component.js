import React from 'react';
import { View, TextInput } from 'react-native';


// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';

import styles from './Contact.styles';

const Contact = ({navigation}) => {
    return (
    <View>
        <TextLabel style={styles.input} multiline={true} placeholder="To:" />
        <TextLabel
        style={styles.input}
        multiline={true}
        textStyle={{minHeight: 464}}
        />
        <Button label="Submit" onPress={() => console.log("yes")}/>
    </View>
    );
}

export default Contact;

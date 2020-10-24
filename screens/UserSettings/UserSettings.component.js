import React from 'react';
import { View } from 'react-native';

import TextLabel from '../../components/TextLabel/TextLabel.component';
import MainButton from '../../components/MainButton/MainButton.component';

import styles from './UserSettings.styles';

const UserSettings = () => {
    return(
        <View style={styles.spacing}>
           <TextLabel label="Account Name:" placeholde="John Doe"/>
           <TextLabel label="Current Password:" placeholde="Password"/>
           <TextLabel label="New Password:" placeholde="Password"/>
           <TextLabel label="Confirm Password:" placeholde="New Password"/>
           <MainButton label="Submit" onPress={() => console.log("clicked")}/>
        </View>
    )
}

export default UserSettings;
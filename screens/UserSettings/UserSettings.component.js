import React from 'react';
import { View } from 'react-native';

import TextLabel from '../../components/TextLabel/TextLabel.component';
import MainButton from '../../components/MainButton/MainButton.component';

import styles from './UserSettings.styles';

const UserSettings = () => {
    return(
        <View style={styles.spacing}>
           <TextLabel label="Account Name:" placeholder="John Doe"/>
           <TextLabel label="Current Password:" placeholder="Password"/>
           <TextLabel label="New Password:" placeholder="Password"/>
           <TextLabel label="Confirm Password:" placeholder="New Password"/>
           <MainButton label="Submit" onPress={() => console.log("clicked")}/>
        </View>
    )
}

export default UserSettings;
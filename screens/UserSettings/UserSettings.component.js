import React, { useContext } from 'react';
import { View } from 'react-native';

import TextLabel from '../../components/TextLabel/TextLabel.component';
import MainButton from '../../components/MainButton/MainButton.component';

import styles from './UserSettings.styles';

import { UserContext } from '../../context/UserContext';

const UserSettings = () => {

    const { name, major, classLevel } = useContext(UserContext);

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
/*
    This is just an example of an component,
    feel free to delete it once there's an actual component in the directory.
*/

import * as React from 'react';
import { View, Text} from 'react-native';

// styles
import styles from './Box.styles';

const Box = () => {
    return (
        <View style={styles.box}>
            <Text> This is a box!! </Text>
        </View>
    );
};

export default Box;
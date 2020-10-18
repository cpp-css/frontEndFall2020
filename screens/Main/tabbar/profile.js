import React from 'react';
import {ApplicationProvider, Text, Button} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {Avatar, Layout} from '@ui-kitten/components';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.layout} level="1">
                    <React.Fragment>
                        <View style={styles.row}>
                            <Avatar
                                style={styles.avatar}
                                size="giant"
                                source={require('../../../assets/images/primary-logo.png')} // Change "Profile" image later (and rename CPP logo image)
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text} category="h2">
                                Ben Mai
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Button
                                onPress={() => this.props.navigation.navigate('contact')}
                                status="basic">
                                Add more interests
                            </Button>
                        </View>
                        <View style={styles.row}>
                            <Button
                                onPress={() => this.props.navigation.navigate('contact')}
                                status="basic">
                                Notification Settings
                            </Button>
                        </View>
                    </React.Fragment>
                </Layout>
            </ApplicationProvider>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FA9A',
    },
    avatar: {
        width: 200,
    },
    row: {
        marginTop: 20,
    },
});

export default Profile;

import React from 'react';
import { View, Text } from 'react-native';

// Components
import Button from '../../components/MainButton/MainButton.component';

const Profile = ({navigation}) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button label="Logout" onPress={() => navigation.push('Home')}/>
        </View>
    );
};

/*
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View></View>
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
*/

export default Profile;

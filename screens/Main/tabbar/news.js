import React from 'react';
import {ApplicationProvider, Layout, Button} from '@ui-kitten/components';
import {StyleSheet, View, Text} from 'react-native';

import * as eva from '@eva-design/eva';

const News = () => {
    return (
        <View>
            <Text>News</Text>
        </View>
    );
};

/*
class News extends React.Component {
    render() {
        return (
            <View></View>
            <ApplicationProvider {...eva} theme={eva.light}>
                <Layout style={styles.layout}>
                    <React.Fragment>
                        <View style={styles.container}>
                        <Button style={styles.btn} status="basic">
                            All events
                        </Button>
                        <Button style={styles.btn} status="basic">
                            Following
                        </Button>
                        </View>
                    </React.Fragment>
                </Layout>
            </ApplicationProvider>
        );
    }
}
*/
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FA9A',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btn: {
        width: '40%',
        height: 40,
    },
});

export default News;

import React from 'react';
import {
  ApplicationProvider,
  Card,
  Text,
  Icon,
  MenuItem,
  Layout,
} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';

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
              <Text style={styles.text} category="h4">
                Base on my interested
              </Text>
            </View>
            <View style={styles.container}>
              <Card style={styles.card} status="success">
                <Text>success</Text>
              </Card>
              <Card style={styles.card} status="info">
                <Text>info</Text>
              </Card>
            </View>
            <View style={styles.row}>
              <Text style={styles.text} category="h4">
                Base on my interested
              </Text>
            </View>
            <View style={styles.container}>
              <Card style={styles.card} status="primary">
                <Text>primary</Text>
              </Card>
              <Card style={styles.card} status="warning">
                <Text>warning</Text>
              </Card>
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
  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'right',
  },
  row: {
    marginTop: 20,
  },
  card: {
    width: '40%',
    marginRight: 5,
    height: 100,
  },
});

export default Profile;

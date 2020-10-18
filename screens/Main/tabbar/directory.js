import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {Input, Layout} from '@ui-kitten/components';

class Directory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.layout} level="1">
          <React.Fragment>
            <View style={styles.row}>
              <Input
                multiline={true}
                textStyle={{minHeight: 464}}
                style={styles.input}
                placeholder="List of Organizations in Alphabetical Order"
              />
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
    alignItems: 'center',
    backgroundColor: '#00FA9A',
  },
  input: {
    marginRight: 10,
    marginLeft: 10,
  },
  row: {
    marginTop: 20,
  },
});

export default Directory;

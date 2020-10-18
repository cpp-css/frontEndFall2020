import React from 'react';
import {
  ApplicationProvider,
  Input,
  Button,
  Layout,
} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.layout}>
          <React.Fragment>
            <Input style={styles.input} multiline={true} placeholder="To:" />
            <Input
              style={styles.input}
              multiline={true}
              textStyle={{minHeight: 464}}
            />
            <Button style={styles.btn} status="basic">
              Submit
            </Button>
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
  input: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  row: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    alignItems: 'flex-end',
  },
});

export default Contact;

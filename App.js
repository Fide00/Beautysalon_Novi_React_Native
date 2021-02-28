import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <ScrollView>
          <Header />
          {/*De Body is contactpagina waarin de Google Maps kaart en het contactformulier zich in bevinden.*/}
          <Body />
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

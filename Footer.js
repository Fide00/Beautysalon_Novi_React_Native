import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text>Zonnebaan 9, 3542EA Utrecht | 035-1234567</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffb6c1',
  },
});

import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Formik} from 'formik';

export default class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*Flexbox 1 met Adresgegevens*/}
        <View style={styles.upperBox}>
          <View style={styles.inner}>
            <Text style={styles.titleText}>Adres</Text>
            <Text style={styles.inner}>
              Beautysalon Nov{'\n'}
              Zonnebaan 9{'\n'}
              3542EA Utrecht{'\n'}
              035-1234567{'\n'}
            </Text>
          </View>
        </View>

        {/*Flexbox 2 met Openingstijden*/}
        <View style={styles.upperBox}>
          <View style={styles.inner}>
            <Text style={styles.titleText}>Openingstijden</Text>
            <Text style={styles.inner}>
              Maandag 8:30 - 17:00 {'\n'}
              Dinsdag 8:30 - 17:00 {'\n'}
              Woensdag 8:30 - 20:00 {'\n'}
              Donderdag 8:30 - 17:00 {'\n'}
              Vrijdag en zaterdag 10:00 17:00 {'\n'}
            </Text>
          </View>
        </View>

        {/*Flexbox 3 met Google Maps*/}
        <View style={styles.underBox}>
          <View style={styles.inner}>
            <Text style={styles.titleText}>Google maps</Text>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              initialRegion={{
                latitude: 52.117471,
                longitude: 5.039224,
                latitudeDelta: 0.0023,
                longitudeDelta: 0.023,
                zoom: 25,
              }}>
              <Marker
                coordinate={{latitude: 52.117471, longitude: 5.039224}}
                title={'Beautysalon Novi'}
              />
            </MapView>
          </View>
        </View>

        {/*Flexbox 4 met contactformulier*/}
        <View style={styles.underBox}>
          <View style={styles.inner}>
            <Text style={styles.titleText}>Contact formulier{'\n'} </Text>
            <Formik
              initialValues={{naam: '', email: '', bericht: ''}}
              onSubmit={(values) => {
                Alert.alert(JSON.stringify(values));
              }}>
              {(props) => (
                <View>
                  {/*Tekstveld: naam*/}
                  <TextInput
                    style={styles.input}
                    placeholder="Naam"
                    onChangeText={props.handleChange('naam')}
                    value={props.values.naam}
                  />

                  {/*Tekstveld: E-mailadres*/}
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                  {/*Tekstveld: Bericht*/}
                  <TextInput
                    style={styles.inputBericht}
                    placeholder="Bericht"
                    onChangeText={props.handleChange('bericht')}
                    value={props.values.bericht}
                  />

                  {/*Bevestigknop*/}
                  <Button
                    title="submit"
                    color="pink"
                    onPress={props.handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  upperBox: {
    width: '50%',
    padding: 5,
  },
  underBox: {
    width: '100%',
    padding: 5,
  },
  inner: {
    flexGrow: 1,
    backgroundColor: '#ffe4e1',
    fontSize: 13,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    flexGrow: 1,
    height: 300,
  },
  input: {
    borderWidth: 1,
    margin: 15,
    height: 40,
    borderColor: 'grey',
  },
  inputBericht: {
    margin: 15,
    height: 150,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
  },
});

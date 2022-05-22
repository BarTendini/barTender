import React, { Component } from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity, Button, Alert  } from 'react-native';
import {themeStyles} from "../../styles/theme/ThemeStyles"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Alert_Visibility: false
    };
  }

  cancelAlertBox(visible) {
    this.setState({ Alert_Visibility: visible });
  }

  okButton = () => {
    Alert.alert("OK Button Clicked.");
  }

  render() {
    return (
      <View style={styles.container} >
        <Modal
          visible={this.state.Alert_Visibility}
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => { this.cancelAlertBox(!this.state.Alert_Visibility) }} >

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#33333399" }}>

            <View style={styles.MainAlertView}>

              <Text style={styles.AlertTitle}>Custom Alert Dialog Box Title.</Text>
              <View style={{ width: '100%', height: 0.5, backgroundColor: '#fff' }} />

              <Text style={styles.AlertMessage}> Are You Sure ?? </Text>

              <View style={{ width: '100%', height: 0.5, backgroundColor: '#fff' }} />

              <View style={{ flexDirection: 'row', height: '30%' }}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.okButton} activeOpacity={0.7} >
                  <Text style={styles.TextStyle}> OK </Text>
                </TouchableOpacity>

                <View style={{ width: 0.5, height: '100%', backgroundColor: '#fff' }} />

                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.cancelAlertBox(!this.state.Alert_Visibility) }} activeOpacity={0.7} >
                  <Text style={styles.TextStyle}> CANCEL </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

        <Button onPress={() => { this.cancelAlertBox(true) }} color="#f73378" title="Custom Alert Dialog Box" />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
     MainAlertView: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: themeStyles.light.backgroundColor1, 
      borderRadius:50,
      height: 300,
      width: '90%',      
      
    },
    AlertTitle: {
      fontSize: 25,
      
      textAlign: 'center',
      padding: 10,
      height: '28%'
    },
    AlertMessage: {
      fontSize: 22,
      
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: 10,
      height: '40%'
    },
    buttonStyle: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    TextStyle: {
      
      textAlign: 'center',
      fontSize: 22,
      marginTop: -5
    }
  });
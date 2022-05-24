import React, { Component, useState} from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity, Button, Alert  } from 'react-native';
import {themeStyles} from "../../styles/theme/ThemeStyles"
import Accordion from 'react-native-collapsible/Accordion';
import { Entypo } from "@expo/vector-icons";


/* necessario per essere chiamato 
  const [alertVisibility, setAlertVisibility] = useState(false)  variabile di stato

  const showAlert=()=>{  // permette di aprire l'allert tramite "onPress"
    if (alertVisibility===false){
        setAlertVisibility(true)
    }
  }
*/



const TenderAllert = (elements) =>{
const cancelAlertBox = () => {
  elements.state(false);
}
const okButton = () => {
  Alert.alert("OK Button Clicked.");
}
  const _renderContent = () => {
    
    return (
      <View style={{flex:1, padding:10}}>
        {elements.children}
      </View>
      );
    
  }
  const _renderHeader = () => {
    return (
      <View style={{flexDirection: "row", alignContent: 'center', borderWidth: 1}}>
        <Text style={styles.AlertTitle}>{elements.title ? elements.title : "notifica"}</Text>
        <Entypo
            onPress={() => { cancelAlertBox() }}
            name={"circle-with-cross"}
            size={40}
            color={'black'} 
            style={styles.FavouriteButton}                               
        />
      </View>

    );
  }

console.log("tenderAllert")
  return(
    <View style={styles.container} >
    <Modal
      visible={elements.visibility }
      transparent={true}
      animationType={"fade"}
      onRequestClose={() => { cancelAlertBox() }} >

      <View style={styles.fullPageBackground}>

        <View style={styles.MainAlertView}>
          {_renderHeader()}
          <View style={styles.horizontalWhiteLines} />

          {_renderContent()}

          <View style={styles.horizontalWhiteLines} />

          <View style={{ flexDirection: 'row',  }}>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{okButton()}} activeOpacity={0.7} >
              <Text style={styles.TextStyle}> OK </Text>
            </TouchableOpacity>

            <View style={styles.verticalWhiteLine} />

            <TouchableOpacity style={styles.buttonStyle} onPress={() => { cancelAlertBox() }} activeOpacity={0.7} >
              <Text style={styles.TextStyle}> CANCEL </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  </View>
);
  
}

export default TenderAllert

const styles = StyleSheet.create(
  {
    fullPageBackground:{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor:"#33333399" 
  },
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
      width:"85%"
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
    },
    horizontalWhiteLines:{ 
      width: '100%', 
      height: 0.5, 
      backgroundColor: '#fff' 
    },
    verticalWhiteLine: { 
      width: 0.5, 
      height: '100%', 
      backgroundColor: '#fff' 
    },
    FavouriteButton: { 
     backgroundColor: themeStyles.light.backgroundColor1,
     borderRadius:50,
     borderWidth:0
  },
  });



  

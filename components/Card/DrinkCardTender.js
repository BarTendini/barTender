import {Text,View, Animated, StyleSheet, Easing, TouchableOpacity} from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import {useRef, useState} from "react";
import CardTitle from "./CardTitle";
import { AntDesign } from '@expo/vector-icons';
import { themeStyles } from "../../styles/theme/ThemeStyles"
import { FontAwesome } from "@expo/vector-icons";

export const zero = "0deg";
export const half = "180deg";

const CardTender = (elements) => {
    const arrow_up = "up" // chiuso
    const open = [zero, half]
    const close = [half, zero]
    const spinValue = useRef(new Animated.Value(0)).current
    const [spin, setSpin] = useState(1)
    const animTime = 400
    const [activeSections, setActiveSections] = useState([])
    const [iconName, setIconName] = useState( 'chain')
    const toggleChain = () => {
        if (iconName == 'chain-broken'){
            setIconName("chain")
        }
        else{
            setIconName("chain-broken")
        }

    }

    const spinOpen = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: open
    })

    const spinClose = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: close
    })

    const SECTIONS = [
        elements.title
    ];

    const header_button=()=>{
        if (elements.action){
            return(
                <View style={{ flexDirection: "row" ,
                    flex:0.3 ,
                    justifyContent: "center"
                }}>
                    <FontAwesome
                        onPress={()=>{toggleChain(); elements.action("action worked")}}
                        name={iconName}
                        size={24}
                        color={iconName=="chain" ?"#000000" : "#0066ff"}
                        style={{
                            justifyContent: "center",
                            flex:1,
                            marginTop:10,
                            paddingTop:10,
                            paddingBottom:5,
                            paddingHorizontal: 5,
                            alignSelf: "center",
                            backgroundColor: "#ffffff",
                            textAlign: "center",
                            borderRadius: 50,
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 5},
                            shadowRadius: 5,
                            shadowOpacity: 0.5,
                    }}
                    />
                </View>
            )
        }
        return (<></>)
    }

    const _renderHeader = (section) => {
        return (
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <CardTitle>{section}</CardTitle>
                </View>
                {header_button()}
                <View style={styles.ArrowIcon}>
                    <Animated.View style={{ transform: [{ rotate: activeSections ? spinOpen : spinClose }] }}>
                        <AntDesign name={arrow_up} size={24} color="black"/>
                    </Animated.View>
                </View>
            </View>
        )
    }

    const _renderContent = (section) => {
        return (elements.children)
    }

    const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
        Animated.timing(
            spinValue,
            {
                toValue: spin,
                duration: animTime,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()
        setSpin(spin ? 0 : 1)

    }

    const stile = {
        backgroundColor: elements.color ? elements.color : themeStyles.light.backgroundColor1,
        borderColor: elements.borderColor ? elements.borderColor : themeStyles.light.backgroundColor1,
        borderWidth: elements.borderColor ? 6 : 0
    }
    return (
        <View style={[styles.Descrizione, stile]}>
            <Accordion
                sections={SECTIONS}
                activeSections={activeSections}
                touchableComponent={TouchableOpacity}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
                duration={animTime}
            />
        </View>
    )
}

export default CardTender;

const styles = StyleSheet.create({
    Descrizione: {
        marginTop: 20,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingBottom: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    ArrowIcon: {
        flex: 0.3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 30,
        marginBottom: 1
    }
})

import { DarkTheme } from "@react-navigation/native";
import { StyleSheet, Platform, StatusBar } from "react-native";

const themeStyles = {
    light:{
        backgroundColor1: "#ffcc8b",
        backgroundColor2: "#ffffff"
    },
    dark:{
        backgroundColor1: "#cca36f",
        backgroundColor2: "#000000"
    },
    unavailableColor: {
        backgroundColor: "#ccc",
        color:"#222"
    }
};

const themeStylesSheet = StyleSheet.create({
    light1:{
        backgroundColor: "#ffcc8b"
    },
    light2:{
        backgroundColor: "#ffffff"
    },
    dark1:{
        backgroundColor: "#cca36f",
    },
    dark2:{
        backgroundColor: "#000000"
    }
});

export {themeStyles, themeStylesSheet};
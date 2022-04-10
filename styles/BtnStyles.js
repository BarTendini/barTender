import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    rectangle: {
        "display": "flex",
        "height": 50,
        "width": "50%",
        "borderWidth": 1,
        "borderColor": "black",
        "borderStyle": "solid",
        "borderTopLeftRadius": 20,
        "borderTopRightRadius": 20,
        "borderBottomRightRadius": 20,
        "borderBottomLeftRadius": 20
    },
    circle: {
        "height": 70,
        "width": 70,
        "borderWidth": 1,
        "borderColor": "black",
        "borderStyle": "solid",
        "borderTopLeftRadius": "50%",
        "borderTopRightRadius": "50%",
        "borderBottomRightRadius": "50%",
        "borderBottomLeftRadius": "50%",
        "position": "relative",
        "backgroundColor": "#FFFFFF",
        transform: [
            { translateX: 10 },
            { translateY: -10 }
        ]
    },
    circleIcon: {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "absolute",
        "top": "17%",
        "left": "10%",
        "fontSize": 30,
    },
    rectangleText : {
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "50%",
        "position": "absolute"

    }
});
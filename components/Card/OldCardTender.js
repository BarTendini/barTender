// import {View, TouchableOpacity, StyleSheet, Animated} from "react-native";
// import CardTitle from "./CardTitle";
// import {useRef, useState} from "react";
//
// {/*https://stackoverflow.com/questions/45428284/make-animated-collapsible-card-component-with-initial-props-to-show-or-hide*/}
//
// const CardTender = (elements) => {
//     const heightAnim = useRef(new Animated.Value(0)).current
//     const [contentHeight, setContentHeight] = useState(0)
//     const [open, setOpen] = useState(false)
//     const initHeight = (evt) => {
//         if (contentHeight>0) return;
//         const { height } = evt.nativeEvent.layout;
//         setContentHeight(height)
//         heightAnim.setValue(open ? getMaxValue() : getMinValue())
//     }
//     const getMaxValue = () => { return contentHeight }
//     const getMinValue = () => { return 0 }
//     const toggle = () => {
//         setOpen(!open)
//         Animated.timing(heightAnim, {
//             toValue: open ? getMinValue() : getMaxValue(),
//             duration: 200,
//             useNativeDriver: false
//         }).start();
//     }
//     const getTitle = () => {
//         let trovato = null
//         elements.children.find(e => {
//             if (e.type && e.type.name === 'CardTitle') {
//                 trovato = e
//             }
//         })
//         return trovato
//     }
//     return (
//         <View style={styles.Descrizione}>
//             <TouchableOpacity onPress={toggle}>
//                 <CardTitle>{elements.title}</CardTitle>
//             </TouchableOpacity>
//             <Animated.View style={{ height: heightAnim }}
//                onLayout={initHeight}>
//                 { elements.children }
//             </Animated.View>
//         </View>
//     )
// }
//
// export default CardTender;
//
// const styles = StyleSheet.create({
//     Descrizione: {
//         backgroundColor: '#ffcc8b',
//         marginTop: 20,
//         borderRadius: 25,
//         marginHorizontal: 10,
//         paddingBottom: 15,
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOffset: {width: 0, height: 5},
//         shadowRadius: 4,
//         shadowOpacity: 0.5,
//     },
// })

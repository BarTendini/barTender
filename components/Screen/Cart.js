import React, {useState, useEffect} from "react"; //quasi sempre necessario
import { SafeAreaView, Platform, ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import Header from "../componenti/TenderComponents/BannerTender";
import commonStyles from "../../styles/CommonStyles";
import {CartInfo, removeCartInfo, withdraw, getNextToWithdrawId} from "../../dati/CartInfo";
import {IconsButton} from "../../dati/IconsButton";
import {DrinkCardTender} from "../Card/TenderCard";
import TenderButton from "../componenti/TenderComponents/TenderButton";
import {deleteCustomization} from "../../dati/DrinksInfo";
import {LinearGradient} from 'expo-linear-gradient';
import {themeStyles} from "../../styles/theme/ThemeStyles";
import TenderFragment from "../componenti/TenderComponents/TenderFragment";

const Cart = ({route, navigation}) => {
    console.log("Cart")
    const[cartInfo, setCartInfo] = useState(CartInfo)
    const[nextToWithdraw, setNextToWithdraw] = useState(getNextToWithdrawId)
    //console.log(cartInfo)

    useEffect(() => {
        setCartInfo(CartInfo)
        setNextToWithdraw(getNextToWithdrawId())
        console.log(getNextToWithdrawId())
    })
    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }

    function renderItem({item}){

        return (
            <View>
                {item.id === nextToWithdraw ?
                    <Text style={[styles.FeedTestoVoto, {color:"#000000"} ]}>
                        next drink
                    </Text>

                    : <></>
                }
            <DrinkCardTender
                title={item.drink.name + "\n" + item.drink.price + "€"}
                color={item.withdrawn? "#cccccc" : (item.id === nextToWithdraw ? "#FFFFFF" : item.drink.color)}
                borderColor={item.id === nextToWithdraw ? item.drink.color : null}
            >
                <View style={{flex:0.5, fontSize: 24, marginVertical:10, marginHorizontal:20}}>
                    <Text style={{fontWeight:"bold"}}>original</Text>
                    <Text>quantity: {item.drink.quantity}ml</Text>
                    {
                        item.drink.ingredients.map(item =>
                            <Text key={item.id}>{item.nome}: {item.percent}%</Text>
                        )
                    }
                </View>
            </DrinkCardTender>
                {item.id === nextToWithdraw ?
                    <Text style={[styles.FeedTestoVoto, themeStyles.unavailableColor]}>
                        already withdrawn
                    </Text>
                    : <></>
                }
            </View>
        )

    }

    return(
        <TenderFragment navigation={navigation}>
            <View>
                <Text style={{ fontSize: 36, textAlign: 'center' }}>
                    Cart
                </Text>
            </View>
            <FlatList
                data={cartInfo.slice().reverse()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 100}}
            />
            <View style={{
                position: 'absolute',
                width: '100%',
                height: Platform.OS === 'android' ? '8%' : '14%',
                bottom: 0,
                justifyContent: 'center',

            }}>
            <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 0.2}}
                style={{height: 110, paddingTop:20,paddingBottom:30,  flexDirection: "row", justifyContent: 'center',  marginBottom: 20}}
            >
                <View style={styles.parallelButtons}>
                    <TenderButton testo={'ritira'} navigation={navigation} action={() => {withdraw(cartInfo), setNextToWithdraw(nextToWithdraw-1)}}/>
                </View>

            </LinearGradient>
            </View>
        </TenderFragment>)
}

export default Cart;




const styles = StyleSheet.create({
    parallelButtons: {
        flex: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
    },
    FeedTestoVoto: {
        flex:1,
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        marginTop:40,
        margin: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        backgroundColor: themeStyles.light.backgroundColor1
    },
})



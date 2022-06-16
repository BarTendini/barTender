import React, {useState, useEffect} from "react"; //quasi sempre necessario
import { Platform, View, Image, StyleSheet, Text} from "react-native";
import {CartInfo, withdraw, getNextToWithdrawId} from "../../dati/CartInfo";
import {IconsButton} from "../../dati/IconsButton";
import {DrinkCardTender} from "../Card/TenderCard";
import {LinearGradient} from 'expo-linear-gradient';
import {themeStyles} from "../../styles/theme/ThemeStyles";
import {TenderFragment, TenderFlatList, TenderButton, TenderAlert} from "../componenti/tender-components";
import commonStyles from "../../styles/CommonStyles";


const Cart = ({route, navigation}) => {
    console.log("Cart")
    const[cartInfo, setCartInfo] = useState(CartInfo)
    const[nextToWithdraw, setNextToWithdraw] = useState(getNextToWithdrawId)
    //console.log(cartInfo)
    const [alertVisibility, setAlertVisibility] = useState(false)
    const [alertVisibilityWithdraw, setAlertVisibilityWithdraw] = useState(false)
    const [peopleInFrontOfYou, setPeopleInFrontOfYou] = useState(Math.floor(Math.random() * 25))
    Math.floor(Math.random() * 16777215)
    useEffect(() => {
        setCartInfo(CartInfo)
        setNextToWithdraw(getNextToWithdrawId())
        console.log(getNextToWithdrawId())
    })
    const buttonToShow = () => {
        return navigation.canGoBack() ? IconsButton.back : IconsButton.logout
    }
    const showAlert=()=>{
        if (alertVisibility===false){
            setAlertVisibility(true)
        }
    }
    const showAlertWithdraw=()=>{
        if (alertVisibilityWithdraw===false){
            setAlertVisibilityWithdraw(true)
        }
    }
    const updateWaitingLine=()=>{
        if (peopleInFrontOfYou > 0){
            setPeopleInFrontOfYou(Math.floor(peopleInFrontOfYou / 3))
        }
    }

    function renderItem({item}){

        return (
            <View>
                {item.id === nextToWithdraw ?
                    <Text style={[styles.FeedTestoVoto, {color:"#000000"} ]}>
                        Prossimo drink
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
                    <Text>quantit°: {item.drink.quantity}ml</Text>
                    {
                        item.drink.ingredients.map(item =>
                            <Text key={item.id}>{item.nome}: {item.percent}%</Text>
                        )
                    }
                </View>
            </DrinkCardTender>
                {item.id === nextToWithdraw ?
                    <Text style={[styles.FeedTestoVoto, themeStyles.unavailableColor]}>
                        Già ritirati
                    </Text>
                    : <></>
                }
            </View>
        )

    }

    return(
        <TenderFragment navigation={navigation} title={'Ordini'}>
            {/*<View>*/}
            {/*    <Text style={{ fontSize: 36, textAlign: 'center' }}>*/}
            {/*        Cart*/}
            {/*    </Text>*/}
            {/*</View>*/}
            <TenderFlatList
                data={cartInfo.slice().reverse()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                footerPadding={60}

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
                    {peopleInFrontOfYou <= 5 ? 
                        <TenderButton testo={'ritira'} navigation={navigation} action={() => {showAlertWithdraw(), setNextToWithdraw(nextToWithdraw-1)}}/>
                        : <TenderButton testo={'ritira'} navigation={navigation} action={() => {showAlert()}}/>
                    }   
                </View>

            </LinearGradient>
            </View>

            <TenderAlert
        visibility = {alertVisibility} 
        state = {setAlertVisibility}
        title = {"Elimina Code"}
        tenderButtons = {[{testo: "ok", action:()=>{updateWaitingLine()}}]
        }
        >
        <View>
            <Text style={{fontSize:24}}>
                <Text>Because of the bar beeing happily crowded </Text>
                <Text style={{fontWeight:"bold"}}>we will notify you </Text>
                <Text> when the time comes </Text>
                <Text style={{fontWeight:"bold"}}>to collect your order</Text>
            </Text>
            <Image
                source={ require("../../image/icons/happyCrowd.png")}
                style={[commonStyles.DrinkImm, {flexShrink:1, maxHeight:150}]}
            />
            <Text style={{fontSize:24}}>
                <Text>people in front of you: </Text>
                <Text style={{fontWeight:"bold"}}>{peopleInFrontOfYou} </Text>
            </Text>
        </View>
    </TenderAlert>
    <TenderAlert
        visibility = {alertVisibilityWithdraw} 
        state = {setAlertVisibilityWithdraw}
        title = {"Ritira"}
        tenderButtons = {[{testo: "ok", action:()=>{withdraw(cartInfo)}}]
        }
        >
        <View>
            <Text style={{fontSize:24}}>
                <Text>Avvicina il telefono al distributore per </Text>
                <Text style={{fontWeight:"bold"}}>ritirare l'ordine</Text>
                <Text> oppure appoggia il </Text>
                <Text style={{fontWeight:"bold"}}> bicchiere smart</Text>
            </Text>
            <Image
                source={ require("../../image/icons/drinkWithdraw.png")}
                style={[commonStyles.DrinkImm, {flexShrink:1, maxHeight:150}]}
            />
        </View>
    </TenderAlert>
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



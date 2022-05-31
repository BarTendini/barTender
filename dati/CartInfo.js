import React from 'react';
import {DrinksInfo} from "./DrinksInfo";

var id = -1
var nextToWithdrawId = 2

export {CartInfo, addCartInfo, removeCartInfo, withdraw, getNextToWithdrawId}

function getNextToWithdrawId(){
    return parseInt(""+nextToWithdrawId );
}

function withdraw(cartInfo){
    if (nextToWithdrawId>=0 && nextToWithdrawId < cartInfo.length) {
        cartInfo[nextToWithdrawId].withdrawn = true
        console.log("withdrawn: "+ cartInfo[nextToWithdrawId].drink.name)
        nextToWithdrawId++
    }else {
        console.log("nothing to withdraw nextId: " + nextToWithdrawId)
    }
}
function addCartInfo(drinksInfo, drinkId, isCustom){
    CartInfo.push(newCartInfo(drinksInfo, drinkId, isCustom))
}

function removeCartInfo(cartInfoId){
    CartInfo = CartInfo.filter((e) => {
        return e.id !== cartInfoId
    })
}

function newCartInfo(drinksInfo, drinkId, isCustom, withdrawn=false, timeStamp=null){ //format: dd/mm/yyyy;
    if (!timeStamp){
        timeStamp = getCurrentDate()
    }
    id += 1
    return {
        id: id,
        drink: drinksInfo[drinkId],
        isCustom: isCustom,
        withdrawn: withdrawn,
        timeStamp: timeStamp
    }
}

function nextToWithdraw(cartInfo){
    var i = 0
    for(i = cartInfo.length-1; i >= 0; i--){
        if (!cartInfo[i].withdrawn){
            return i
        }
    }
    console.warn("id not found in getNextToWithdraw")
    return null
}


var CartInfo = [
    newCartInfo(
        DrinksInfo,
        0,
        false,
        true,
        "28/05/2022"
    ),
    newCartInfo(
        DrinksInfo,
        3,
        false,
        true,
        "29/05/2022"),
    newCartInfo(
        DrinksInfo,
        10,
        false,
        false,
        "30/05/2022"),

]

const getCurrentDate=()=>{
    var date = new Date()
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return day + '/' + month + '/' + year;//format: dd/mm/yyyy;
}
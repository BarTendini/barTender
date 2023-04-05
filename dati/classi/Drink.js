import React from "react";
import {getIngredientFromNome} from "../IngredientsInfo";


export default class Drink {
    constructor(drink) {
        this._id = drink["id"] // deve necessariamente essere diverso dagli altri
        this._name = drink["name"] // nome del drink
        this._type = drink["type"] //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        this._image = drink["image"] // richiama un immagine
        this._quantity = drink["quantity"]
        this._recipe = drink["recipe"]
        this._ingredients = drink["ingredients"]? drink["ingredients"]: setIngredients(this._recipe, this._quantity)
        this._color = drink["color"] // sfondo della bolla del bar
        this._textColor = drink["textColor"]// colore del testo della bolla
        this._favorite = drink["favorite"] // è favorito
        this._price = drink["price"]
        this._alcoholicTax = drink["alcoholicTax"]
        this._description = drink["description"]
        this._favorite = drink["favorite"]? drink["favorite"]: false
        this._customQuantity = -1
        this._custom = []
        this.isCorrect()
    }

    isCustom(){
        return this._custom===[]
    }

    set custom(value) {
        this._custom = value;
    }

    set favorite(value) {
        this._favorite = value;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get image() {
        return this._image;
    }

    get ingredients() {
        return this._ingredients;
    }

    get recipe() {
        return this._recipe;
    }

    get custom() {
        return this._custom;
    }

    get color() {
        return this._color;
    }

    get textColor() {
        return this._textColor;
    }

    get favorite() {
        return this._favorite;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    get customQuantity() {
        return this._customQuantity;
    }

    get alcoholicTax() {
        return this._alcoholicTax;
    }

    get description() {
        return this._description;
    }

    isCorrect(){
        if(!(this._id != null && this._name && this._type && this._recipe != null && this._ingredients != null && this._color && this._custom != null)){
            console.warn(`error while creating drink: id:${this._id}; name:${this._name}; type:${this._type}; recipe:${this._recipe}; ingredients:${this._ingredients}; custom:${this._custom}; color:${this._color}`)
            return false
        }
        return true
    }

    setRecipe = (ingredients = [{name: "unknown", quantity: 0}],  unit ="ml") =>{
        let result = []
        ingredients.forEach(element => {
            let tmp = copy(getIngredientFromNome(element.name))
            //let tmp = getIngredientFromNome(element.name)
            tmp["quantity"] = element.quantity
            tmp["unit"] = unit
            result.push(tmp)
        });
        return result
    }

    customizeIngredients(ingredientID, ingredientNewQuantity, isFixedQuantity){
        console.log("customizeIngredients")
        if (!this.isCustom()){
            this._custom = copyArray(this._ingredients)
        }
        if (isFixedQuantity){
            this.updateWithFixedQuantity(ingredientID, ingredientNewQuantity)
        }
        else{
            this.updateWithFreeQuantity(ingredientID, ingredientNewQuantity)
        }
    }
    updateWithFixedQuantity(ingredientID, ingredientNewQuantity){
        console.log("updateWithFixedQuantity")
        let sumOfQuantities = 0
        this._custom.forEach(e => {
            if(this._custom[i].id === ingredientID){
                sumOfQuantities += ingredientNewQuantity
            }
            else {
                sumOfQuantities += e.quantity
            }
        })

        let i;
        for (i = 0 ; i < this._custom.length; i++){
            this._custom[i].percent = precise(this._custom[i].quantity / sumOfQuantities * 100)
            if(this._custom[i].id === ingredientID) {

                this._custom[i].quantity = precise(this._quantity * ( ingredientNewQuantity / sumOfQuantities))
            }
            else {

                this._custom[i].quantity = precise(this._quantity * (this._custom[i].quantity / sumOfQuantities))
            }
        }
    }
    updateWithFreeQuantity(ingredientID, ingredientNewQuantity){
        console.log("updateWithFreeQuantity   id:" + ingredientID + " quantity:"+ingredientNewQuantity + " customLength:" + this._custom.length )
        let i;
        let sumOfQuantities = 0
        this._custom.forEach(e => {
            if(e.id === ingredientID){
                sumOfQuantities += ingredientNewQuantity
            }
            else {
                sumOfQuantities += e.quantity
            }
        })
        this._customQuantity = sumOfQuantities
        for (i = 0 ; i < this._custom.length; i++){

            if(this._custom[i].id === ingredientID){
                const quantityToUpdate = ingredientNewQuantity - this._custom[i].quantity
                this._custom[i].quantity = ingredientNewQuantity
                this._custom[i].percent = precise(ingredientNewQuantity / sumOfQuantities * 100)

            }else{
                this._custom[i].percent = precise(this._custom[i].quantity / sumOfQuantities * 100)

                //console.log(drink.custom[i].nome + ": "+ drink.custom[i].percent + "%")
            }
        }

    }

    deleteCustomization() {
        this.custom = []
        console.log("deleteCustomization")
    }

}



function setIngredients(recipe=[], quantityML =200){
    if (recipe.length === 0){
        return []
    }

    let ingredients = []
    const unit = recipe[0].unit

    if (unit === "%") {
        recipe.forEach(e => {
            let tmp = e
            tmp["percent"] = precise(tmp["quantity"])
            tmp["quantity"] = quantityML * (tmp["percent"] / 100)
            ingredients.push(tmp)
        })
    }
    else if (unit === "parti"){
        let sumOfAllParts = 0
        recipe.forEach(e => {
            sumOfAllParts += e["quantity"]
            //console.log(sumOfAllParts)
        })
        recipe.forEach(e => {
            let tmp = e
            tmp["percent"] = precise(tmp["quantity"] / sumOfAllParts * 100)
            tmp["quantity"] = quantityML * (tmp["quantity"] / sumOfAllParts)
            ingredients.push(tmp)
        })
    }
    else if (unit === "ml"){
        let sumOfAllML = 0
        //console.log("recipe -----------------------")
        //console.log(recipe)
        recipe.forEach(e => {
            //console.log(e["quantity"])
            sumOfAllML = sumOfAllML + e["quantity"]
            //console.log(sumOfAllML)
        })
        recipe.forEach(e => {
            let tmp = e
            tmp["percent"] = precise(tmp["quantity"] / sumOfAllML * 100)
            tmp["quantity"] = quantityML * (tmp["quantity"] / sumOfAllML)
            ingredients.push(tmp)
        })
    }

    return (
        ingredients
    )
}

function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
}
function copyArray(mainObj) {
    let objCopy = []; // objCopy will store a copy of the mainObj
    let key;

    mainObj.forEach(e=>{
        objCopy.push(copy(e));
    })
    return objCopy;
}
function precise(x) {
    return Math.round(x)//.toPrecision(3);
}

const setRecipe = (ingredients = [{name: "unknown", quantity: 0}],  unit ="ml") =>{
    let result = []
    ingredients.forEach(element => {
        let tmp = copy(getIngredientFromNome(element.name))
        //var tmp = getIngredientFromNome(element.name)
        tmp["quantity"] = element.quantity
        tmp["unit"] = unit
        result.push(tmp)
    });
    return result
}
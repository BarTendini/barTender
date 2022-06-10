import React from "react";
import {getIngredientFromNome} from "../IngredientsInfo";


export default class Recipe { // describes a recipe and gives you the ingredients with the quantities
    constructor(basicIngredients = [{name: "unknown", quantity: 0}], unit) {
        let result = []
        basicIngredients.forEach(element => {
            let tmp = copy(getIngredientFromNome(element.name))
            //var tmp = getIngredientFromNome(element.name)
            tmp["quantity"] = element.quantity
            tmp["unit"] = unit
            result.push(tmp)
        });
        this._recipe = result
    }

    getRecipe(){
        return this._recipe
    }

    getIngredientsFromTotalQuantity(quantityML =200){
        if (this._recipe.length === 0){
            return []
        }

        let ingredients = []
        const unit = this._recipe[0].unit

        if (unit === "%") {
            this._recipe.forEach(e => {
                let tmp = e
                tmp["percent"] = precise(tmp["quantity"])
                tmp["quantity"] = quantityML * (tmp["percent"] / 100)
                ingredients.push(tmp)
            })
        }
        else if (unit === "parti"){
            let sumOfAllParts = 0
            this._recipe.forEach(e => {
                sumOfAllParts += e["quantity"]
                //console.log(sumOfAllParts)
            })
            this._recipe.forEach(e => {
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
            this._recipe.forEach(e => {
                //console.log(e["quantity"])
                sumOfAllML = sumOfAllML + e["quantity"]
                //console.log(sumOfAllML)
            })
            this._recipe.forEach(e => {
                let tmp = e
                tmp["percent"] = precise(tmp["quantity"] / sumOfAllML * 100)
                tmp["quantity"] = quantityML * (tmp["quantity"] / sumOfAllML)
                ingredients.push(tmp)
            })
        }
        //console.log("setIngredients----------------------------")
        //console.log(ingredients)
        return (
            ingredients
        )
    }

    isCorrect(){
        if(!(this._recipe != null && this._recipe.length > 0 && this._recipe[0].name !== "unknown" && this._recipe[0].quantity > 0 && this._recipe[0].unit != null)){
            console.warn(`error while creating Recipe: recipe:${this._recipe != null? this._recipe.length : null }; recipe[0].name:${this._recipe[0].name}; recipe[0].quantity:${this._recipe[0].quantity}; recipe[0].unit:${this._recipe[0].unit};`)
            return false
        }
        return true
    }

}


function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
}

function precise(x) {
    return Math.round(x)//.toPrecision(3);
}
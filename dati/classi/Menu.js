import React from "react";
import {DrinksInfo} from "../DrinksInfo";

export default class Menu {
    constructor(id, barName, menu = [] , fromDrinkInfo=false) {
        this._id = id;
        this._barName = barName;
        this._menu = fromDrinkInfo? DrinksInfo : menu;
        this.isCorrect()
    }

    appendMenuItem(item){
        this._menu.push(item)
    }

    get id() {
        return this._id;
    }

    get barName() {
        return this._barName;
    }

    get menu() {
        return this._menu;
    }

    isCorrect(){
        if(!(this._menu != null && this._barName != null && this.id != null)){
            console.warn(`error while creating menu: id:${this._id}; name:${this._barName};  menu:${this._menu}`)
            return false
        }
        return true
    }
}
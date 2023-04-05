import React from "react";


export default class DrinkDto {
    constructor() {
        this._id = null // deve necessariamente essere diverso dagli altri
        this._name= null
        this._category = null
        this._color = null
        this._textColor = null
        this._imageUrl = null
        this._description = null
    }

    isEqual(other :DrinkDto){
        return this._id === other._id
    }

    get id() :number{
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name():string {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get category() :string{
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get color():string {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get textColor():string {
        return this._textColor;
    }

    set textColor(value) {
        this._textColor = value;
    }

    get imageUrl():string {
        return this._imageUrl;
    }

    set imageUrl(value) {
        this._imageUrl = value;
    }

    get description():string  {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}
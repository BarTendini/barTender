import React,{useState} from "react";

export default class Ingredient {
    constructor(ingredient) {
        this._id = ingredient["id"];
        this._name = ingredient["name"]? ingredient["name"] : ingredient["nome"]; // in igredientsInfo e scritto nome non name
        this._type = ingredient["type"];
        this._available = ingredient["available"];
        this._alcoholic = ingredient["alcoholic"];
        this._color = ingredient["color"]? ingredient["color"]: generateColor() ;
        //const [customQuantity, setCustomQuantity] = useState(-1)
        //this._customQuantity = customQuantity
        //this._setCustomQuantity = setCustomQuantity
        this.isCorrect()
    }

    /*get customQuantity() {
        return this._customQuantity;
    }

    set customQuantity(value) {
        this._setCustomQuantity(value);
    }*/

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get available() {
        return this._available;
    }

    get alcoholic() {
        return this._alcoholic;
    }

    get color() {
        return this._color;
    }


    isCorrect(){
        if(!(this._id != null && this._name && this._type && this._available != null && this._alcoholic != null && this._color)){
            console.warn(`error while creating ingredient: id:${this._id}; name:${this._name}; type:${this._type}; available:${this._available}; alcoholic:${this._alcoholic}; color:${this._color}`)
            return false
        }
        return true
    }
}

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};
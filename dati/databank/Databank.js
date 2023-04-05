import DrinkDto from "../Dto/DrinkDto";
import DrinkApiClient from "../Dto/DrinkApiClient";

/**
 * pensato per immagazzinare tutti i dati provenienti dal db.
 * dovrebbe anhe gestire la non duplicazione
 * sto pensando se, a posteriori, dotarlo di un sistema per ottimizzare l'aggiornamento dei dati
 * come un "aggiorna solo se da server c'è stata una modifica dei dati"
 */
export default class DrinkApiClient { //
    //todo dovrebbe diventare un singleton
    static INSTANCE = new this();

    //todo tutti queste proprietà dovranno avere solo un getter
    constructor() {
        this._user = null // dati dello user che sta utilizzando l'app
        this._idCard = null // id card dello user

        this._addresses = null //lista di indirizzi
        this._bars = null
        this._chartItems = null
        this._cups = null
        this._customers = null //lista di utilizatori caricati per un qualche motivo
        this._dispensers = null
        this._dispensersIngredients = null
        this._drinks = null
        this._ingredients = null
        this._recipesItemBarCustom = null
        this._recipesItemCustom = null
        this._recipesItem = null
        this._reviews = null
    }




    getDrinks() :DrinkDto[] {
        const client  = new DrinkApiClient();
        if (this._drinks === null){
            this._drinks = [];
        }
        this._drinks.concat(client.getDrinks())
        //todo tentativo di eliminare i duplicati più vecchi
        this._drinks = this._drinks.filter((value, index, array) => array.indexOf(value).isEqual(index));
        return this._drinks;
    }
}
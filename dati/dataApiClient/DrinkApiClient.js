import {DrinkDto} from "../Dto/DrinkDto";

/**
 * pensato per gestire tutte le chiamate alle api per DrinkDto
 */
export default class DrinkApiClient {
    constructor() {}

    get allDrinks() { //esegue la chiamata al servizio
        let list = []
        list.push(new DrinkDto)
        return list
    }

}



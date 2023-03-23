import { getIngredientFromNome, ingredientsInfo } from "./IngredientsInfo";
import React, {useState} from 'react';
// Se importi Menu crei un ciclo
// dati/DrinksInfo.js -> dati/classi/Menu.js -> dati/DrinksInfo.js
// A quanto pare è consigliabile evitarli
//import Menu from "./classi/Menu";
import Drink from "./classi/Drink";
import Ingredient from "./classi/Ingredient";

const fakeText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."


const drinkInfo = ( id_,
                    name_,
                    type_ = "unknown",
                    image_ = null,
                    ingredients_ = [],
                    color_ = "#999999",
                    textColor_ = 'black',
                    favorite_ = false,
                    price_ = 5.5,
                    quantity_ = 200,
                    alchoolicTax_ = 0,
                    description_ = fakeText
                ) =>{

    console.log('drinkInfo: ' + name_ + " ------------------------------------------")
    return new Drink(
        {
            id: id_, // deve necessariamente essere diverso dagli altri
            name: name_, // nome del drink
            type: type_, //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
            image: image_, // richiama un immagine
            ingredients: setIngredients(ingredients_, quantity_),
            recipe: ingredients_,
            custom: [],
            color: color_, // sfondo della bolla del bar
            textColor: textColor_,// colore del testo della bolla
            favorite: favorite_, // è favorito
            price: price_,
            quantity: quantity_,
            customQuantity: null,
            alcoholicTax: alchoolicTax_,
            description: description_
        }
    )
}

const setRecipe = (ingredients = [{name: "unknown", quantity: 0}],  unit ="ml") =>{
    var result = []
    ingredients.forEach(element => {
        var tmp = copy(getIngredientFromNome(element.name))
        //var tmp = getIngredientFromNome(element.name)
        tmp["quantity"] = element.quantity
        tmp["unit"] = unit
        result.push(tmp)
    });
    return result
}

function setIngredients(recipe=[], quantityML =200){
    if (recipe.length == 0){
        return []
    }

    let ingredients = []
    const unit = recipe[0].unit

    if (unit == "%") {
        recipe.forEach(e => {
            var tmp = e
            tmp["percent"] = precise(tmp["quantity"])
            tmp["quantity"] = quantityML * (tmp["percent"] / 100)
        ingredients.push(tmp)
    })
    }
    else if (unit == "parti"){
        var sumOfAllParts = 0
        recipe.forEach(e => {
            sumOfAllParts += e["quantity"]
            //console.log(sumOfAllParts)
        })
        recipe.forEach(e => {
            var tmp = e
            tmp["percent"] = precise(tmp["quantity"] / sumOfAllParts * 100)
            tmp["quantity"] = quantityML * (tmp["quantity"] / sumOfAllParts)
        ingredients.push(tmp)
    })
    }
    else if (unit == "ml"){
        var sumOfAllML = 0
        //console.log("recipe -----------------------")
        //console.log(recipe)
        recipe.forEach(e => {
            //console.log(e["quantity"])
            sumOfAllML = sumOfAllML + e["quantity"]
            //console.log(sumOfAllML)
        })
        recipe.forEach(e => {
            var tmp = e
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

const DrinksInfo = [ // questo array definisce tutte le informazioni riguardanti i drink
    // il primo oggetto definisce un singolo drink
    drinkInfo(  0, // deve necessariamente essere diverso dagli altri
                'Ichnusa', // nome del drink
                "birra", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
                require("../image/drinks/drawings/ichnusa.png"), // richiama un immagine
                setRecipe([ // array degli ingredienti
                    {name: "ichnusa", quantity:330}
                ],"ml"),
                '#CD7F32', // sfondo della bolla
                'black',// colore del testo della bolla
                true, // è favorito
                2.50, //prezzo
                330,  //quantità
                5,  // tasso alcolico
                "Birra Ichnusa, or simply Ichnusa, is the name of a popular Sardinian-made beer, which is brewed in Assemini, a town near the Sardinian capital Cagliari. It is named after the Latinized ancient name for Sardinia, Hyknusa.\nBirra Ichnusa is a lager (5.0% ABV) with a hoppy taste.\nBirra Ichnusa was founded in Cagliari in 1912. In 1967 the brewery was finally moved to Assemini. In 1981 more than 400,000 hl beer was brewed.[2] In 1986 the brewery was taken over by Heineken" // testo
            ),
    drinkInfo(  1,
                'Cosmopolitan',
                "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
                require("../image/drinks/drawings/cosmopolitan.png"), // richiama un immagine
                setRecipe([
                    {name: "vodka", quantity:40},
                    {name: "cointreau", quantity:15},
                    {name: "limeJuice", quantity:15},
                    {name: "blueberryJuice", quantity:30}
                ]),
                '#5580e6',
                'black',
                false,
                5.50,
                330,
                5,
                "The Cosmopolitan (aka 'Cosmo') is a vodka-based cocktail that has become very popular with women, especially since its prominent appearance on the HBO television show 'Sex and the City.' Legend has it the Cosmopolitan was originally served to South Beach, Florida party-leavers.[1] The Cosmopolitan, or 'Cosmo' is a sweet-tart combination of citrus and cranberry flavors that, conveniently, is an attractive pink colour when mixed and served properly."
            ),
        drinkInfo(  2,
            'Aperol Sprits',
            "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
            require("../image/drinks/drawings/aperolSpritz.png"), // richiama un immagine
            setRecipe([
                {name: "prosecco", quantity:3},
                {name: "aperol", quantity:2},
                {name: "soda", quantity:1},
            ],"parti"),
            '#FF5E13',
            'black',
            false,
            5.50,
            330,
            5,
            "Aperol, an orange-red liquor invented by the Barbieri brothers in Padova in 1919, is a go-to Spritz option. Low in alcohol, pleasantly citrusy and slightly bitter, it is a light and fresh aperitif that owes its flavors and aromas to sweet and bitter oranges, rhubarb, and gentian root. The other components are a trade secret and remain unchanged. When the Campari Group purchased Aperol in 2003, they vowed to remain faithful to the original recipe."
        ),
        drinkInfo(  3,
            'Vodka Redbull',
            "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
            null, // richiama un immagine
            setRecipe([
                {name: "redBull", quantity:70},
                {name: "vodka", quantity:30}
            ],"%"),
            '#5580e6',
           'black',
           false,
            5.50,
            330,
            5,
            "Il cocktail Vodka Redbull è un long drink amato e conosciuto dai tutti i giovani per vari motivi: è semplice e veloce da preparare, non necessita di shaker, è molto dolce ed è un energy drink, ovvero un cocktail stimolante che aiuta a non sentire la stanchezza e la fatica. Gli ingredienti indispensabili, come dice il nome, sono solo due: la Vodka e la Red Bull (o qualunque altro energy drink). Al gusto sembra non molto alcolico perché la dolcezza della Red Bull copre il sapore della vodka, tuttavia il grado alcoolico del cocktail con le dosi che andiamo a proporre  è pari al 30% Vol.  Mi raccomando, bevete responsabilmente. Vi lascio al cocktail con vodka e redbull."
        ),
        drinkInfo( 4,
            'Cuba Libre',
            "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
            null, // richiama un immagine
            setRecipe([
                {name: "cocacola", quantity:120},
                {name: "whiteRum", quantity:50},
                {name: "limeJuice", quantity:1}
            ],"%"),
            '#800020',
            'black',
            false,
            5.50,
            200,
            15,
            "Il Cuba libre è un cocktail ufficiale IBA, appartenente alla categoria dei long drinks a base di rum bianco, cola e lime. Simile al rum & cola, i due termini vengono spesso utilizzati in modo intercambiabile, sebbene indichino due cocktail differenti."
        ),
        drinkInfo(  5, // deve necessariamente essere diverso dagli altri
            'gin tonic', // nome del drink
            "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
            null, // richiama un immagine
            setRecipe([ // array degli ingredienti
                {name: "gin", quantity:30},
                {name: "tonicWater", quantity:70}
            ],"%"),
            '#fff99c', // sfondo della bolla
            'black',// colore del testo della bolla
            false, // è favorito
            6.50, //prezzo
            200,  //quantità
            15,  // tasso alcolico
            fakeText // testo
    ),
    drinkInfo(  6, // deve necessariamente essere diverso dagli altri
        'moscow mule', // nome del drink
        "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        null, // richiama un immagine
        setRecipe([ // array degli ingredienti
            {name: "vodka", quantity:50},
            {name: "gingerBeer", quantity:120},
            {name: "limeJuice", quantity:1}
        ],"ml"),
        '#5580e6', // sfondo della bolla
        'black',// colore del testo della bolla
        false, // è favorito
        5.60, //prezzo
        200,  //quantità
        15,  // tasso alcolico
        fakeText
    ),
    drinkInfo(  7, // deve necessariamente essere diverso dagli altri
        'tequila sunrise', // nome del drink
        "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        null, // richiama un immagine
        setRecipe([ // array degli ingredienti
            {name: "tequilaSilver", quantity:90},
            {name: "orangeJuice", quantity:180},
            {name: "grenadineSyrup", quantity:30}
        ],"ml"),
        '#5580e6', // sfondo della bolla
        'black',// colore del testo della bolla
        false, // è favorito
        5.60, //prezzo
        200,  //quantità
        15,  // tasso alcolico
        fakeText
    ),
    drinkInfo(  8, // deve necessariamente essere diverso dagli altri
        'sex on the beach', // nome del drink
        "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        null, // richiama un immagine
        setRecipe([ // array degli ingredienti
            {name: "vodka", quantity:40},
            {name: "orangeJuice", quantity:40},
            {name: "blueberryJuice", quantity:40},
            {name: "peachVodka", quantity:20}
        ],"ml"),
        '#ff69b4', // sfondo della bolla
        'black',// colore del testo della bolla
        false, // è favorito
        5.60, //prezzo
        200,  //quantità
        15,  // tasso alcolico
        fakeText
    ),
    drinkInfo(  9, // deve necessariamente essere diverso dagli altri
        'carignano', // nome del drink
        "vino", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        require("../image/drinks/drawings/carignano.png"), // richiama un immagine
        setRecipe([ // array degli ingredienti
            {name: "carignano", quantity:100}
        ],"%"),
        '#58181F', // sfondo della bolla
        'black',// colore del testo della bolla
        false, // è favorito
        5.60, //prezzo
        200,  //quantità
        15,  // tasso alcolico
        fakeText
    ),
    drinkInfo(  10, // deve necessariamente essere diverso dagli altri
        'vermentino', // nome del drink
        "vino", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        require("../image/drinks/drawings/vermentino.png"), // richiama un immagine
        setRecipe([ // array degli ingredienti
            {name: "vermentino", quantity:100}
        ],"%"),
        '#EEEDC4', // sfondo della bolla
        'black',// colore del testo della bolla
        false, // è favorito
        5.60, //prezzo
        200,  //quantità
        15,  // tasso alcolico
        fakeText
    ),
]

export {
    DrinksInfo,
    getTypes,
    getDrinksOfType,
    getAvailableAndUnavailableDrinks,
    switchFavouriteStateFromId,
    fullDrinkListForCocktailStyles,
    fullDrinkListForInputRadio,
    deleteCustomization,
    getIngredientById,
    getCustomIngredientById
};

const getTypes=(drinksInfo)=>{
    console.log("getTypes");
    let types =[
        {id:0, type:"Preferiti"},
        {id:1, type:"Tutti"}
    ];
    drinksInfo.forEach(element => {
        if (!types.some(e => e.type === element.type)) {
            types.push({id:types.length, type:element.type})
        }
    });
    //console.log(types);
    return types;
}

const getDrinksOfType = (drinksInfo, type) => {
    //console.log("getDrinksOfType");
    if (type === "Tutti") {
        return (drinksInfo);
    }
    else if (type === "Preferiti") {
        return drinksInfo.filter(e => e.favorite);
    }
    return drinksInfo.filter(e => {
        return e.type === type
    });

}

/*
    Output di prova
        Per i vini
        unavaible 2,
        avaible: 6
 */
const getAvailableAndUnavailableDrinks = (drinksInfo) => {
    console.log("getAvailableAndUnavailableDrinks");
    const drinks = {
        availableDrinks: [],
        unavailableDrinks: []
    }
    drinksInfo.forEach(element => {
        if (element.ingredients.every(ingrediente => ingrediente.available))
            drinks.availableDrinks.push(element);
        else
            drinks.unavailableDrinks.push(element)
    });
    console.log("aviables : " + drinks.availableDrinks.length);
    console.log("unaviables : " + drinks.unavailableDrinks.length);
    return drinks;
}

const setUnaviableColors = (unavailableDrinks) =>{
    const bgColor = "#ccc"
    const textColor = "#222"
    for (let i = 0; i < unavailableDrinks.length; i++) {
        unavailableDrinks[i].color = bgColor;
        unavailableDrinks[i].textColor = textColor;
    }
    return (unavailableDrinks);
}

const switchFavouriteStateFromId = (drinksInfo, id) => {
    //console.log("switchFavouriteStateFromId: " + DrinksInfo[id].name + " has been changed in " + !DrinksInfo[id].favorite);
    drinksInfo[id].favorite = !drinksInfo[id].favorite;
}


const fullDrinkListForCocktailStyles = () =>{
    var drinks = ""
    DrinksInfo.forEach(element => {
        drinks = drinks + drinkForCocktailStyles(element);
    })
    //console.log("fullDrinkListForCocktailStyles------------------------------------------------")
    //console.log(drinks)
    return drinks;
}


const drinkForCocktailStyles = (drink) =>{
    var ingredienti = ""
    var virgola = "\n\t\t\t"
    drink.ingredients.forEach(element => {

        ingredienti = ingredienti + virgola + ingredientForCocktailStyles(element);
        virgola = ",\n\t\t\t"
    });
    //console.log(drink.ingredients)
    return `
        {
        \tname: "` + drink.name +`",
        \tid: "` +drink.name +`",
        \tingredients: [`
        + ingredienti +`
        \t],
        \tgarnish: "Orange Peel",
        \tglass: "Old fashioned"
        },`
}

const ingredientForCocktailStyles = (ingredient) => {
    const color = (ingredient.color ? ingredient.color :  generateColor())
    //console.log("ingredientForCocktailStyles " + ingredient + ": "+color)

    return'{ text: "' + ingredient.nome +'", color: "' + color + '" }'
}

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };


  const fullDrinkListForInputRadio = () => {
    var drinks = ""
    DrinksInfo.forEach(element => {
        drinks = drinks + drinkForInputRadio(element);
    })
    //console.log(drinks)
    return drinks;
  }

  const drinkForInputRadio = (drink) => {
    return `
    \t\t<input type="radio" name="drink-select" id="${drink.name}" />
    \t\t<label for="${drink.name}">${drink.name}</label>`
  }

function precise(x) {
    return Math.round(x)//.toPrecision(3);
}

function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
}
export function copyArray(mainObj) {
    let objCopy = []; // objCopy will store a copy of the mainObj
    let key;

    mainObj.forEach(e=>{
        objCopy.push(copy(e));
    })
    return objCopy;
}
function customizeIngredients(drink, ingredientID, ingredientNewQuantity, isFixedQuantity){
    console.log("customizeIngredients")
    if (!drink.custom){
        drink.custom = copyArray(drink.ingredients)
    }
    if (isFixedQuantity){
        updateWithFixedQuantity(drink,ingredientID, ingredientNewQuantity)
    }
    else{
        updateWithFreeQuantity(drink, ingredientID, ingredientNewQuantity)
    }
}

export function updateWithFixedQuantity(drink,ingredientID, ingredientNewQuantity){
     console.log("updateWithFixedQuantity")
      var sumOfQuantities = 0
    drink.custom.forEach(e => {
          if(drink.custom[i].id == ingredientID){
              sumOfQuantities += ingredientNewQuantity
          }
          else {
              sumOfQuantities += e.quantity
          }
      })

    let i;
    for (i = 0 ; i < drink.custom.length; i++){
        drink.custom[i].percent = precise(drink.custom[i].quantity / sumOfQuantities * 100)
        if(drink.custom[i].id == ingredientID) {

            drink.custom[i].quantity = precise(drink.quantity * ( ingredientNewQuantity / sumOfQuantities))
        }
        else {

            drink.custom[i].quantity = precise(drink.quantity * (drink.custom[i].quantity / sumOfQuantities))
        }
    }
}
export function updateWithFreeQuantity(drink=DrinksInfo[1], ingredientID, ingredientNewQuantity){
    console.log("updateWithFreeQuantity   id:" + ingredientID + " quantity:"+ingredientNewQuantity + " customLength:" + drink.custom.length )
    let i;
    let sumOfQuantities = 0
    drink.custom.forEach(e => {
        if(e.id == ingredientID){
            sumOfQuantities += ingredientNewQuantity
        }
        else {
            sumOfQuantities += e.quantity
        }
    })
    drink.customQuantity = sumOfQuantities
    for (i = 0 ; i < drink.custom.length; i++){

        if(drink.custom[i].id == ingredientID){
            const quantityToUpdate = ingredientNewQuantity - drink.custom[i].quantity
            drink.custom[i].quantity = ingredientNewQuantity
            drink.custom[i].percent = precise(ingredientNewQuantity / sumOfQuantities * 100)

        }else{
            drink.custom[i].percent = precise(drink.custom[i].quantity / sumOfQuantities * 100)

            //console.log(drink.custom[i].nome + ": "+ drink.custom[i].percent + "%")
        }
    }

}

export function isDrinkCustom(drink) {
      return drink.custom.length > 0
}

function deleteCustomization(drink) {
      drink.custom = []
    console.log("deleteCustomization")
}

function deleteCustomIngridient(){

}

function getIngredientById (drinksInfo, drinkId, ingredientId){
      return drinksInfo[drinkId].ingredients.find(x => x.id === ingredientId)
}
function getCustomIngredientById (drinksInfo, drinkId, ingredientId){
    return drinksInfo[drinkId].custom.find(x => x.id === ingredientId)
}
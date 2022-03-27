import { getIngredientFromNome, ingredientsInfo } from "./IngredientsInfo";

const DrinksInfo = [ // questo array definisce tutte le informazioni riguardanti i drink
    // il primo oggetto definisce un singolo drink
    {
        id: 0, // deve necessariamente essere diverso dagli altri
        name: 'Ichnusa', // nome del drink   
        type:"beer", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), // richiama un immagine     
        ingredients: [ // array degli ingredienti
            getIngredientFromNome("ichnusa") // quantityML:200 }  
        ],
        color: '#CD7F32', // sfondo della bolla del bar
        textColor: 'black',// colore del testo della bolla
        favorite: true // è favorito
    } ,
    {
        id: 1, 
        name: 'Cosmopolitan',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("vodka"),
            getIngredientFromNome("cointreau"),
            getIngredientFromNome("limeJuice"),
            getIngredientFromNome("blueberryJuice")
        ],
        color: '#5580e6', 
        textColor: 'black',
        favorite: false
    } ,
    {
        id: 2, 
        name: 'Aperol Sprits',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("prosecco"),
            getIngredientFromNome("aperol"),
            getIngredientFromNome("soda")
        ],
        color: 'orange', 
        textColor: 'black',
        favorite: false
    } ,
    {
        id: 3, 
        name: 'Vodka Redbull',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("redBull"),
            getIngredientFromNome("vodka")
        ],
        color: '#5580e6', 
        textColor: 'black',
        favorite: false
    } ,
    {
        id: 4, 
        name: 'Cuba Libre',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("cocacola"),
            getIngredientFromNome("whiteRum"),
            getIngredientFromNome("limeJuice")
        ],
        color: '#800020', 
        textColor: 'black',
        favorite: true
    } ,
    {
        id: 5, 
        name: 'gin tonic',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("gin"),
            getIngredientFromNome("tonicWater")
        ],
        color: '#fff99c', 
        textColor: 'black',
        favorite: false
    } ,
    {
        id: 6, 
        name: 'moscow mule',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("vodka"),
            getIngredientFromNome("gingerBeer")
        ],
        color: '#5580e6', 
        textColor: 'black',
        favorite: true
    } ,
    {
        id: 7, 
        name: 'tequila sunrise',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("tequilaSilver"),
            getIngredientFromNome("blueberryJuice"),
            getIngredientFromNome("orangeJuice")
        ],
        color: '#5580e6', 
        textColor: 'black',
        favorite: true
    } ,
    {
        id: 8, 
        name: 'sex on the beach',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("vodka"),
            getIngredientFromNome("orangeJuice"),
            getIngredientFromNome("peachVodka"),
            getIngredientFromNome("blueberryJuice")
        ],
        color: '#ff69b4', 
        textColor: 'black',
        favorite: false
    } ,
    {
        id: 9, 
        name: 'carignano',
        type:"wine", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("carignano")
        ],
        color: '#58181F', 
        textColor: 'black',
        favorite: false
    } ,
    {
        id: 10, 
        name: 'vermentino',
        type:"wine", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, whine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("vermentino")
        ],
        color: '#EEEDC4', 
        textColor: 'black',
        favorite: false
    } ,
    
]

export {DrinksInfo, getTypes, getDrinksOfType, getAvailableAndUnavailableDrinks};

const getTypes=(drinksInfo)=>{
    console.log("getTypes");
    let types =[
        {id:0, type:"favourites"},
        {id:1, type:"all"}        
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
    console.log("getDrinksOfType");
    if (type === "all") {
        return (drinksInfo);
    }
    else if (type === "favourites") {
        return drinksInfo.filter(e => e.favorite);
    }
    
    console.log("Tipo da testare: " + type)
    return drinksInfo.filter(e => {
        console.log(e.type)
        return e.type === type
    });
    
}

const getAvailableAndUnavailableDrinks = (drinksInfo) => {
    console.log("getAvailableAndUnavailableDrinks");
    let availableDrinks =[];
    let unavailableDrinks =[];
    let areAllAviableIngredient = true;
    let j = 0;
    drinksInfo.forEach(element => {
        while(areAllAviableIngredient && element.ingredients.length > j){
            if(areAllAviableIngredient && element.ingredients[j].available === false){
                areAllAviableIngredient = false;
            }
            j=j+1
        }
        if (areAllAviableIngredient){
            availableDrinks.push(element);
            j=0;            
        }
        else{
            unavailableDrinks.push(element)
            j=0;
            areAllAviableIngredient = true;
        }        
    });
    console.log("unaviables : ");
    console.log(unavailableDrinks.length);
    console.log("aviables : ");
    console.log(availableDrinks.length);
    return([availableDrinks,setUnaviableColors(unavailableDrinks)]);
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


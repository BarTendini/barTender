import { getIngredientFromNome, ingredientsInfo } from "./IngredientsInfo";

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
    return {
        id: id_, // deve necessariamente essere diverso dagli altri
        name: name_, // nome del drink
        type: type_, //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: image_, // richiama un immagine
        ingredients: ingredients_,
        color: color_, // sfondo della bolla del bar
        textColor: textColor_,// colore del testo della bolla
        favorite: favorite_, // è favorito
        price: price_,
        quantity: quantity_,
        alchoolicTax: alchoolicTax_,
        description: description_
    }
}

const setIngredients = () =>{
    
}


const DrinksInfo = [ // questo array definisce tutte le informazioni riguardanti i drink
    // il primo oggetto definisce un singolo drink
    drinkInfo(  0, // deve necessariamente essere diverso dagli altri 
                'Ichnusa', // nome del drink 
                "beer", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine 
                require("../image/drinks/drawings/ichnusa.png"), // richiama un immagine 
                [ // array degli ingredienti
                getIngredientFromNome("ichnusa") // quantityML:200 }
                ],
                '#CD7F32', // sfondo della bolla  
                'black',// colore del testo della bolla 
                true, // è favorito 
                2.50, 
                330, 
                5, 
                fakeText
            ),
    drinkInfo(  1,
                'Cosmopolitan',
                "cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
                require("../image/drinks/drawings/cosmopolitan.png"), // richiama un immagine
                [
                    getIngredientFromNome("vodka"),
                    getIngredientFromNome("cointreau"),
                    getIngredientFromNome("limeJuice"),
                    getIngredientFromNome("blueberryJuice")
                ],
                '#5580e6',
                'black',
                false,
                5.50,
                330,
                5
            ),
    {
        id: 2,
        name: 'Aperol Sprits',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/drinks/drawings/aperolSpritz.png"), // richiama un immagine
        ingredients: [
            getIngredientFromNome("prosecco"),
            getIngredientFromNome("aperol"),
            getIngredientFromNome("soda")
        ],
        color: "#FF5E13",
        textColor: 'black',
        favorite: false,
        price: 5.50,
        quantity: 330,
        alchoolicTax: 5
    } ,
    {
        id: 3,
        name: 'Vodka Redbull',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: null, // richiama un immagine
        ingredients: [
            getIngredientFromNome("redBull"),
            getIngredientFromNome("vodka")
        ],
        color: '#5580e6',
        textColor: 'black',
        favorite: false,
        price: 5.50,
        quantity: 330,
        alchoolicTax: 5
    } ,
    {
        id: 4,
        name: 'Cuba Libre',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: null, // richiama un immagine
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
        image: null, // richiama un immagine
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
        image: null, // richiama un immagine
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
        image: null, // richiama un immagine
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
        image: null,
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
        image: require("../image/drinks/drawings/carignano.png"),
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
        image: require("../image/drinks/drawings/vermentino.png"),
        ingredients: [
            getIngredientFromNome("vermentino")
        ],
        color: '#EEEDC4',
        textColor: 'black',
        favorite: false
    } ,

]

export {DrinksInfo, getTypes, getDrinksOfType, getAvailableAndUnavailableDrinks, switchFavouriteStateFromId};

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
    console.log("switchFavouriteStateFromId:");
    console.log(DrinksInfo[id] + "has been changed");
    drinksInfo[id].favorite = !drinksInfo[id].favorite;
}
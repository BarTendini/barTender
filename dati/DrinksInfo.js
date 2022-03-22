import { getIngredientFromNome, ingredientsInfo } from "./IngredientsInfo";

const DrinksInfo = [ // questo array definisce tutte le informazioni riguardanti i drink
    // il primo oggetto definisce un singolo drink
    {
        id: 0, // deve necessariamente essere diverso dagli altri
        name: 'Ichnusa', // nome del drink   
        type:"beer", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), // richiama un immagine     
        ingredients: [ // array degli ingredienti
            getIngredientFromNome("ichnusa")   
        ],
        color: '#CD7F32', // sfondo della bolla del bar
        textColor: 'black'// colore del testo della bolla
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
        textColor: 'black'
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
        textColor: 'black'
    } ,
    {
        id: 3, 
        name: 'Vodka Redbull',
        type:"cocktail", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine
        image: require("../image/ristoranti/daPino.png"), 
        ingredients: [
            getIngredientFromNome("redBul"),
            getIngredientFromNome("vodka")
        ],
        color: '#5580e6', 
        textColor: 'black'
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
        textColor: 'black'
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
        textColor: 'black'
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
        textColor: 'black'
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
        textColor: 'black'
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
        textColor: 'black'
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
        textColor: 'black'
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
        textColor: 'black'
    } ,
    
]

export default DrinksInfo;
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

const setIngredients = (ingredients = [{name: "unknown", quantity: 0, unit:"ml"}]) =>{
    var result = []
    ingredients.forEach(element => {
        var tmp = getIngredientFromNome(element.name)
        tmp["quantity"] = element.quantity
        tmp["unit"] = element.unit
        result.push(tmp)
    });
    return result
}


const DrinksInfo = [ // questo array definisce tutte le informazioni riguardanti i drink
    // il primo oggetto definisce un singolo drink
    drinkInfo(  0, // deve necessariamente essere diverso dagli altri 
                'Ichnusa', // nome del drink 
                "beer", //beer, cocktail, non_alcoholic_cocktail, beverage, bitter, wine 
                require("../image/drinks/drawings/ichnusa.png"), // richiama un immagine 
                setIngredients([ // array degli ingredienti
                    {name: "ichnusa", quantity:330} 
                ]),
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
                setIngredients([
                    {name: "vodka", quantity:40, unit:"ml"},
                    {name: "cointreau", quantity:15, unit:"ml"},
                    {name: "limeJuice", quantity:15, unit:"ml"},
                    {name: "blueberryJuice", quantity:30, unit:"ml"}
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
            setIngredients([
                {name: "prosecco", quantity:3, unit:"parti"},
                {name: "aperol", quantity:2, unit:"parti"},
                {name: "soda", quantity:1, unit:"parti"},
            ]),
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
            setIngredients([
                {name: "redBull", quantity:70, unit:"%"},
                {name: "vodka", quantity:30, unit:"%"}
            ]),
            '#5580e6',
           'black',
           false,
            5.50,
            330,
            5,
            "Il cocktail Vodka Redbull è un long drink amato e conosciuto dai tutti i giovani per vari motivi: è semplice e veloce da preparare, non necessita di shaker, è molto dolce ed è un energy drink, ovvero un cocktail stimolante che aiuta a non sentire la stanchezza e la fatica. Gli ingredienti indispensabili, come dice il nome, sono solo due: la Vodka e la Red Bull (o qualunque altro energy drink). Al gusto sembra non molto alcolico perché la dolcezza della Red Bull copre il sapore della vodka, tuttavia il grado alcoolico del cocktail con le dosi che andiamo a proporre  è pari al 30% Vol.  Mi raccomando, bevete responsabilmente. Vi lascio al cocktail con vodka e redbull."
        ),
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
    console.log("switchFavouriteStateFromId: " + DrinksInfo[id].name + " has been changed in " + !DrinksInfo[id].favorite);
    drinksInfo[id].favorite = !drinksInfo[id].favorite;
}
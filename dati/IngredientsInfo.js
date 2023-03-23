import Ingredient from "./classi/Ingredient"

const ingredientsInfo = [ // definisce i singoli ingredienti che si possono inserire nella macchina
    {id:0,  nome: "ichnusa",    type:"beer",    available:false, alcoholic:true,    color:"#f28e1c"},
    {id:1,  nome: "vodka",      type:"vodka",   available:true, alcoholic:true,     color:"#bfc0ee"},
    {id:2,  nome: "cointreau",  type:"bitter",  available:true, alcoholic:true,     color:"#C86117" },
    {id:3,  nome: "limeJuice",  type:"juice",   available:true, alcoholic:false,    color:"#c6dba3" },
    {id:4,  nome: "blueberryJuice",     type:"juice",   available:true, alcoholic:false,    color:"#4f86f7" },
    {id:5,  nome: "prosecco",   type:"prosecco",available:true, alcoholic:true,     color:"#fad6a5"},
    {id:6,  nome: "aperol",     type:"alcoholicIngredient", available:true, alcoholic:true, color:"#fe863d" },
    {id:7,  nome: "soda",       type:"soda",    available:true, alcoholic:false,    color:"#cccccc"},
    {id:8,  nome: "redBull",    type:"energyDrink", available:true, alcoholic:false,    color:"#DB0A40"},
    {id:9,  nome: "cocacola",   type:"soda",    available:true, alcoholic:false,    color:null},
    {id:10, nome: "whiteRum",   type:"rum",     available:true, alcoholic:true,     color:null },
    {id:11, nome: "gin",        type:"gin",     available:true, alcoholic:true,     color:null },
    {id:12, nome: "tonicWater", type:"beverage",    available:true, alcoholic:false,    color:null },
    {id:13, nome: "gingerBeer", type:"beverage",    available:true, alcoholic:false,    color:null },
    {id:14, nome: "tequilaSilver",   type:"tequila",   available:true, alcoholic:true,  color:null },
    {id:15, nome: "grenadineSyrup",   type:"syrup",     available:true, alcoholic:false,    color:null },
    {id:16, nome: "orangeJuice",type:"juice",   available:false,    alcoholic:false,    color:null },
    {id:17, nome: "peachVodka", type:"vodka",   available:true,   alcoholic:true,   color:null },
    {id:18, nome: "whiteMartini",   type:"liquor",  available:true, alcoholic:true, color:null },
    {id:19, nome: "pineappleJuice", type:"juice",   available:true, alcoholic:false,    color:null },
    {id:20, nome: "coconut milk",   type:"juice",     available:true, alcoholic:false,  color:null },
    {id:21, nome: "carignano",   type:"wine",     available:true, alcoholic:true,   color:null },
    {id:22, nome: "vermentino",   type:"wine",     available:true, alcoholic:true,  color:null }
];

export {ingredientsInfo, getIngredientFromNome};

const getIngredientFromNome = (nome) => {
    for(let i = 0; i < ingredientsInfo.length; i++)
    {
        if(ingredientsInfo[i].nome === nome){
            const ingredient = new Ingredient(ingredientsInfo[i])
            //console.log(ingredient.id)
            //console.log(`funzia ? ${ingredient.customQuantity}:`)
            //ingredient.customQuantity = ingredient.customQuantity + 1000
            //console.log(`purtroppo no! ${ingredient.customQuantity}:`)
            return(ingredientsInfo[i]);
        }
    }
    console.log("ingerdiente non trovato:"+nome)
    return(null);
};
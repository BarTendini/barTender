const ingredientsInfo =[ // definisce i singoli ingredienti che si possono inserire nella macchina
    {id:0,  nome: "ichnusa",    type:"beer",    available:false, alcoholic:true},
    {id:1,  nome: "vodka",      type:"vodka",   available:true, alcoholic:true},
    {id:2,  nome: "cointreau",  type:"bitter",  available:true, alcoholic:true },
    {id:3,  nome: "limeJuice",  type:"juice",   available:true, alcoholic:false },    
    {id:4,  nome: "blueberryJuice",     type:"juice",   available:true, alcoholic:false },
    {id:5,  nome: "prosecco",   type:"prosecco",available:true, alcoholic:true },
    {id:6,  nome: "aperol",     type:"alcoholicIngredient", available:true, alcoholic:true },
    {id:7,  nome: "soda",       type:"soda",    available:true, alcoholic:false},
    {id:8,  nome: "redBull",    type:"energyDrink", available:true, alcoholic:false },
    {id:9,  nome: "cocacola",   type:"soda",    available:true, alcoholic:false },
    {id:10, nome: "whiteRum",   type:"rum",     available:true, alcoholic:true },
    {id:11, nome: "gin",        type:"gin",     available:true, alcoholic:true },
    {id:12, nome: "tonicWater", type:"beverage",    available:true, alcoholic:false },
    {id:13, nome: "gingerBeer", type:"beverage",    available:true, alcoholic:false },
    {id:14, nome: "tequilaSilver",   type:"tequila",   available:true, alcoholic:true },
    {id:15, nome: "grenadineSyrup",   type:"syrup",     available:true, alcoholic:false },
    {id:16, nome: "orangeJuice",type:"juice",   available:false,    alcoholic:false },
    {id:17, nome: "peachVodka", type:"vodka",   available:true,   alcoholic:true },
    {id:18, nome: "whiteMartini",   type:"liquor",  available:true, alcoholic:true },
    {id:19, nome: "pineappleJuice", type:"juice",   available:true, alcoholic:false },
    {id:20, nome: "coconut milk",   type:"juice",     available:true, alcoholic:false },
    {id:21, nome: "carignano",   type:"wine",     available:true, alcoholic:true },    
    {id:22, nome: "vermentino",   type:"wine",     available:true, alcoholic:true }
];

export {ingredientsInfo, getIngredientFromNome};

const getIngredientFromNome = (nome) => {
    for(let i = 0; i < ingredientsInfo.length; i++)
    {
        if(ingredientsInfo[i].nome === nome){
            return(ingredientsInfo[i]);
        }
    }
    console.log("ingerdiente non trovato:"+nome)
    return(null);
};
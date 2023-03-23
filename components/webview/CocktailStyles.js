import { fullDrinkListForCocktailStyles, fullDrinkListForInputRadio } from "../../dati/DrinksInfo";
const CocktailStyles = `     /* ========================== *\\ Utilities \\* ========================== */ .u-vertical-rhythm > * + * { margin-top: 1.5rem; } /* ========================== *\\ Global Elements \\* ========================== */ *, *:before, *:after { box-sizing: border-box; } html, body { height: 100%; } body { align-items: center; display: flex; flex-direction: column; font-family: 'DM Sans', sans-serif; justify-content: center; } .page__content { width: 100%; padding: 4rem 2rem; } /* ========================== *\\ Labels \\* ========================== */ .cocktail__label { font-family: 'Raleway', sans-serif; font-size: 15vmin; left: 0; opacity: 0.075; padding: 1rem; position: absolute; text-transform: uppercase; text-align: center; width: 100%; } /* ========================== *\\ Controls \\* ========================== */ .controls { margin-bottom: 8rem; text-align: center; } .controls__label { font-size: 2.25rem; font-weight: 700; } .form-group { display: flex; justify-content: center; } label { display: block; margin-bottom: 0.5rem; } [type="radio"] { opacity: 0; position: absolute; z-index: -1; } [type="radio"] + label { cursor: pointer; font-size: 1.2rem; margin: 0 1rem; transition: color 100ms ease-out; } [type="radio"] + label:after { content: ''; display: block; height: 2px; margin-top: 0.25rem; width: 100%; background-color: black; transform: scaleX(0); transform-origin: 0 50%; transition: background-color 100ms ease-out, transform 100ms ease-out; } [type="radio"]:checked + label { color: dodgerblue; } [type="radio"]:checked + label:after { background-color: dodgerblue; transform: scaleX(1); } /* ========================== *\\ Buttons \\* ========================== */ .btn { background-color: transparent; border: none; border-radius: 0.125rem; font-family: inherit; font-size: inherit; padding: 0.75rem 1rem; } .btn:active { transform: translateY(1px); } .btn--primary { color: white; background-color: dodgerblue; } /* ========================== *\\ Glass \\* ========================== */ .glass { align-items: center; display: flex; flex-direction: column; margin: 0 auto; position: relative; width: 25vmin; z-index: 1; } .bowl { --border: 1vmin; align-items: center; background-color: rgba(233, 233, 233, 0.75); border: var(--border) solid #e9e9e9; border-top: 0; border-radius: 1vmin 1vmin 50vmin 50vmin; display: flex; height: 25vmin; justify-content: center; position: relative; width: 100%; z-index: 1; } .bowl:before { background-image: linear-gradient(to bottom, white, transparent 80%, transparent); content: ''; height: 100%; left: calc(var(--border)  * -1); opacity: 0.4; position: absolute; top: var(--border); width: calc(50% + var(--border)); z-index: 2; } .bowl:after { background: linear-gradient(to right, #C89E48, #FCF6BA 20%, #B68D34 60%, #E4DE9F 90%, #B58633); border-radius: 0.25vmin 0.25vmin 0 0; content: ''; height: 1vmin; position: absolute; top: 0; width: calc(100% + var(--border) * 2); z-index: -1; } .stem { background-color: #e9e9e9; background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), transparent 15%, transparent 75%, rgba(0, 0, 0, 0.05)); height: 20vmin; position: relative; margin-top: -1vmin; width: 4vmin; z-index: -1; } .stem:before { background-image: linear-gradient(to bottom, white, transparent 80%, transparent); content: ''; height: 100%; left: calc(var(--border)  * -1); opacity: 0.4; position: absolute; top: var(--border); width: 35%; z-index: 2; } .base { background-color: #e9e9e9; border-radius: 0.5vmin; height: 1.5vmin; position: relative; width: 20vmin; z-index: 1; } .base:before { background-image: linear-gradient(to bottom, white, transparent 80%, transparent); content: ''; height: 100%; left: calc(var(--border)  * -1); opacity: 0.4; position: absolute; top: var(--border); width: calc(50% + var(--border)); z-index: 2; } /* ========================== *\\ Ingredients \\* ========================== */ .ingredient-colors, .ingredient-list { --outline: 2vmin; border-radius: inherit; display: flex; flex-direction: column-reverse; height: calc(100% - var(--outline) * 2); margin-top: calc(var(--outline) * 2); position: relative; width: 100%; z-index: 1; } .ingredient-colors { opacity: 0.75; overflow: hidden; } .ingredient-colors:before { --height: 8vmin; background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4)); border-radius: 100%; bottom: calc(var(--height) / -2); content: ''; height: var(--height); position: absolute; width: 100%; z-index: 2; } .ingredient-colors .ingredient { flex-basis: 100%; position: relative; transform: scaleY(0); transform-origin: 50% 100%; } .ingredient-colors .ingredient.animate { animation: fill 400ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards; } .ingredient-list { left: calc(100% + 2rem); position: absolute; top: 0; } .ingredient-list .ingredient { flex-basis: 100%; font-size: 0.75rem; line-height: 1.15; opacity: 0; position: relative; transform-origin: 50% 100%; transform: translateX(-1rem); } .ingredient-list .ingredient:before { background-color: black; border-radius: 50vmin; content: ''; height: 2px; right: calc(100% + 0.5rem); position: absolute; top: 0.375rem; width: 2rem; transform: scaleX(0); transform-origin: 0 50%; transition: transform 300ms 200ms cubic-bezier(0.215, 0.61, 0.355, 1); } .ingredient-list .ingredient.animate { animation: ingredient-text 400ms 200ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards; } .ingredient-list .ingredient.animate:before { transform: scaleX(1.0001); } /* ========================== *\\ Garnish \\* ========================== */ .garnish { --size: 12vmin; background-color: #fff44f; border: 1vmin solid #f2e300; border-radius: 100%; box-shadow: inset white 0 0 0 0.5vmin; height: var(--size); right: calc(100% - var(--size) / 2); position: absolute; bottom: calc(100% - var(--size) / 2); width: var(--size); z-index: -1; } /* ========================== *\\ Animation Keyframes \\* ========================== */ @keyframes fill { to { transform: scaleY(1.0001); } } @keyframes ingredient-text { to { opacity: 1; transform: translateX(0); } }      `;
export const CocktailHtml =
    `<style>/* ========================== *\\
   Utilities
\\* ========================== */
.u-vertical-rhythm > * + * {
    margin-top: 1.5rem;
}

/* ========================== *\\
   Global Elements
\\* ========================== */
*, *:before, *:after {
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

body {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: "DM Sans", sans-serif;
    justify-content: center;
}

.page__content {
    width: 100%;
    padding: 4rem 2rem;
}

/* ========================== *\\
   Labels
\\* ========================== */
.cocktail__label {
    font-family: "Raleway", sans-serif;
    font-size: 15vmin;
    left: 0;
    opacity: 0.075;
    padding: 1rem;
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
}

/* ========================== *\\
   Controls
\\* ========================== */
.controls {
    margin-bottom: 8rem;
    text-align: center;
}

.controls__label {
    font-size: 2.25rem;
    font-weight: 700;
}

.form-group {
    display: none;
    justify-content: center;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

[type=radio] {
    opacity: 0;
    position: absolute;
    z-index: -1;
}
[type=radio] + label {
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0 1rem;
    transition: color 100ms ease-out;
}
[type=radio] + label:after {
    content: "";
    display: block;
    height: 2px;
    margin-top: 0.25rem;
    width: 100%;
    background-color: black;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: background-color 100ms ease-out, transform 100ms ease-out;
}
[type=radio]:checked + label {
    color: dodgerblue;
}
[type=radio]:checked + label:after {
    background-color: dodgerblue;
    transform: scaleX(1);
}

/* ========================== *\\
   Buttons
\\* ========================== */
.btn {
    background-color: transparent;
    border: none;
    border-radius: 0.125rem;
    font-family: inherit;
    font-size: inherit;
    padding: 0.75rem 1rem;
}
.btn:active {
    transform: translateY(1px);
}

.btn--primary {
    color: white;
    background-color: dodgerblue;
}

/* ========================== *\\
   Glass
\\* ========================== */
.glass {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    width: 25vmin;
    z-index: 1;
}

.bowl {
    --border: 1vmin;
    align-items: center;
    background-color: rgba(233, 233, 233, 0.75);
    border: var(--border) solid #e9e9e9;
    border-top: 0;
    border-radius: 1vmin 1vmin 50vmin 50vmin;
    display: flex;
    height: 25vmin;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 1;
}
.bowl:before {
    background-image: linear-gradient(to bottom, white, transparent 80%, transparent);
    content: "";
    height: 100%;
    left: calc(var(--border) * -1);
    opacity: 0.4;
    position: absolute;
    top: var(--border);
    width: calc(50% + var(--border));
    z-index: 2;
}
.bowl:after {
    background: linear-gradient(to right, #C89E48, #FCF6BA 20%, #B68D34 60%, #E4DE9F 90%, #B58633);
    border-radius: 0.25vmin 0.25vmin 0 0;
    content: "";
    height: 1vmin;
    position: absolute;
    top: 0;
    width: calc(100% + var(--border) * 2);
    z-index: -1;
}

.stem {
    background-color: #e9e9e9;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), transparent 15%, transparent 75%, rgba(0, 0, 0, 0.05));
    height: 20vmin;
    position: relative;
    margin-top: -1vmin;
    width: 4vmin;
    z-index: -1;
}
.stem:before {
    background-image: linear-gradient(to bottom, white, transparent 80%, transparent);
    content: "";
    height: 100%;
    left: calc(var(--border) * -1);
    opacity: 0.4;
    position: absolute;
    top: var(--border);
    width: 35%;
    z-index: 2;
}

.base {
    background-color: #e9e9e9;
    border-radius: 0.5vmin;
    height: 1.5vmin;
    position: relative;
    width: 20vmin;
    z-index: 1;
}
.base:before {
    background-image: linear-gradient(to bottom, white, transparent 80%, transparent);
    content: "";
    height: 100%;
    left: calc(var(--border) * -1);
    opacity: 0.4;
    position: absolute;
    top: var(--border);
    width: calc(50% + var(--border));
    z-index: 2;
}

/* ========================== *\\
   Ingredients
\\* ========================== */
.ingredient-colors,
.ingredient-list {
    --outline: 2vmin;
    border-radius: inherit;
    display: flex;
    flex-direction: column-reverse;
    height: calc(100% - var(--outline) * 2);
    margin-top: calc(var(--outline) * 2);
    position: relative;
    width: 100%;
    z-index: 1;
}

.ingredient-colors {
    opacity: 0.75;
    overflow: hidden;
}
.ingredient-colors:before {
    --height: 8vmin;
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
    border-radius: 100%;
    bottom: calc(var(--height) / -2);
    content: "";
    height: var(--height);
    position: absolute;
    width: 100%;
    z-index: 2;
}
.ingredient-colors .ingredient {
    flex-basis: 100%;
    position: relative;
    transform: scaleY(0);
    transform-origin: 50% 100%;
}
.ingredient-colors .ingredient.animate {
    -webkit-animation: fill 400ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    animation: fill 400ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

.ingredient-list {
    left: calc(100% + 2rem);
    position: absolute;
    top: 0;
}
.ingredient-list .ingredient {
    flex-basis: 100%;
    font-size: 0.75rem;
    line-height: 1.15;
    opacity: 0;
    position: relative;
    transform-origin: 50% 100%;
    transform: translateX(-1rem);
}
.ingredient-list .ingredient:before {
    background-color: black;
    border-radius: 50vmin;
    content: "";
    height: 2px;
    right: calc(100% + 0.5rem);
    position: absolute;
    top: 0.375rem;
    width: 2rem;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 300ms 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ingredient-list .ingredient.animate {
    -webkit-animation: ingredient-text 400ms 200ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    animation: ingredient-text 400ms 200ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
.ingredient-list .ingredient.animate:before {
    transform: scaleX(1.0001);
}

/* ========================== *\\
   Garnish
\\* ========================== */
.garnish {
    --size: 12vmin;
    background-color: #fff44f;
    border: 1vmin solid #f2e300;
    border-radius: 100%;
    box-shadow: inset white 0 0 0 0.5vmin;
    height: var(--size);
    right: calc(100% - var(--size) / 2);
    position: absolute;
    bottom: calc(100% - var(--size) / 2);
    width: var(--size);
    z-index: -1;
}

/* ========================== *\\
   Animation Keyframes
\\* ========================== */
@-webkit-keyframes fill {
    to {
        transform: scaleY(1.0001);
    }
}
@keyframes fill {
    to {
        transform: scaleY(1.0001);
    }
}
@-webkit-keyframes ingredient-text {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes ingredient-text {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}</style>

<main class="page__content">
    <section class="controls u-vertical-rhythm" id="controls">
        <h1 class="controls__label" id="drinkTitle"> . </h1>
        <div class="form-group">
            <input type="radio" name="drink-select" id="negroni" />
            <label for="negroni">Negroni</label>
            <input type="radio" name="drink-select" id="manhattan" />
            <label for="manhattan">Manhattan</label>
            <input type="radio" name="drink-select" id="old-fashioned" />
            <label for="old-fashioned">Old Fashioned</label>
            <input type="radio" name="drink-select" id="old-nazi" />
            <label for="old-nazi">Al Burro</label>` + fullDrinkListForInputRadio() + `
            
        </div>
    </section>
    <section class="cocktail">
        <h2 class="cocktail__label" id="drink-name"></h2>
        <div class="glass" id="glass">
            <div class="garnish"></div>
            <div class="bowl">
                <div class="ingredient-colors" id="ingredient-colors"></div>
                <ul class="ingredient-list" id="ingredient-list"></ul>
            </div>
            <div class="stem"></div>
            <div class="base"></div>
        </div>
    </section>
</main>
<script>
    (function() {
        const drinkTitle = document.getElementById("drink-name");
        const drinkSelect = document.querySelectorAll('[name="drink-select"]');
        const ingredientColors = document.getElementById("ingredient-colors");
        const ingredientList = document.getElementById("ingredient-list");
        const drinks = [
            {
                name: "Negroni",
                id: "negroni",
                ingredients: [
                    { text: "1 oz Campari", color: "#B8141B" },
                    { text: "1 oz Gin", color: "#ADFAF7" },
                    { text: "1 oz Sweet red Vermouth", color: "#A62C2B" }
                ],
                garnish: "Orange Peel",
                glass: "Old fashioned"
            },
            ` + fullDrinkListForCocktailStyles() + `
            {
                name: "Manhattan",
                id: "manhattan",
                ingredients: [
                    { text: "Dash Angostura bitters", color: "#620F06" },
                    { text: "2 oz Rye or Canadian whisky", color: "#E89230" },
                    { text: "3/4 oz Sweet red vermouth", color: "#A62C2B" }
                ],
                garnish: "Maraschino cherry",
                glass: "Cocktail"
            },
            {
                name: "Old Fashioned",
                id: "old-fashioned",
                ingredients: [
                    { text: "1 1/2 oz Bourbon or Rye whiskey", color: "#E89230" },
                    { text: "2 dashes Angostura bitters", color: "#620F06" },
                    { text: "1 Sugar cube", color: "#FFFFFF" },
                    { text: "Few dashes plain water", color: "#1CA3EC" }
                ],
                garnish: null,
                glass: "Old fashioned"
            },            
            {
                name: "drink al burro",
                id: "old-nazi",
                ingredients: [{ text: "burro", color: "#E89230" }],
                garnish: null,
                glass: "Old fashioned"
            }
        ];

        for (let i = 0; i < drinkSelect.length; i++) {
            drinkSelect[i].addEventListener("click", () => getDrink(drinkSelect[i].id));
        }

        function getDrink(id) {
            const drink = drinks.find((item) => item.id === id);

            ingredientColors.innerHTML = "";
            ingredientList.innerHTML = "";

            drink.ingredients.forEach((ingredient) => {
                ingredientColors.appendChild(addIngredientColor(ingredient));
                ingredientList.appendChild(addIngredientListItem(ingredient));
            });

            drinkTitle.textContent = drink.name;

            animateIngredients(ingredientColors);
            animateIngredients(ingredientList);
        }

        function addIngredientColor(ingredient) {
            let node = document.createElement("div");

            node.className = "ingredient";
            node.dataset.ingredient = ingredient.text;
            node.style.backgroundColor = ingredient.color;

            return node;
        }

        function addIngredientListItem(ingredient) {
            let node = document.createElement("li");

            node.className = "ingredient";
            node.innerHTML = ingredient.text;

            return node;
        }

        function animateIngredients(el) {
            const list = el.querySelectorAll(".ingredient");

            [...list].forEach((ingredient, i) => {
                setTimeout(() => {
                    ingredient.classList.add("animate");
                }, i * 400);
            });
        }

    })();
</script>`

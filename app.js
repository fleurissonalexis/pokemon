let pokeHistory = [];
// starting + button event click
document.addEventListener('DOMContentLoaded', async () => {
    const start = Date.now();
    await getPokemon();
    console.log(`Time: ${Date.now() - start} ms`);

   //button get pokemon onclicked => Display two new Pokemon
    document.querySelector('#get-pokemon-btn').addEventListener('click', async () => {
        await getNewPokemon();
    })

    document.querySelector('#battle-btn').addEventListener('click', () => {
        battlePokemon();
    })
})

//API call and 2 Pokemon Object
const getPokemon = async () => {
    // Call PokeAPi twice to get two pokemon object
    const randomNumberOne = getUniqueNumber(pokeHistory, 807) + 1;
    const randomNumberTwo = getUniqueNumber(pokeHistory, 807) + 1;

    // For each pokemon display: 
    // Name, Sprite, Base HP stat, Name & PP of 4 Pokemon moves (1st four or random)
    const pokeDataArr = await pokemonDataSync(randomNumberOne, randomNumberTwo);

    await renderPokemonSync(pokeDataArr);
}

const pokemonDataSync = async (num1, num2) => {
    let pokeDataArr = [];
    const pokemonOne = await makeApiCall(num1);
    const pokemonTwo = await makeApiCall(num2);

    pokeDataArr.push(pokemonOne);
    pokeDataArr.push(pokemonTwo);

    return await pokeDataArr;
}


let list = document.getElementById("listPokemon")

function consultPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json()
                .then(function (pokemon) {
                    crepokemon(pokemon, num)
                })
        })
}

function consultpokemons() {
    let premierID = Math.round(Math.random() * 150)
    let deuxiemeID = Math.round(Math.random() * 150)

    consultPokemon(premierID, 1)
    consultPokemon(deuxiemeID, 2)
}

function crepokemon(pokemon, num) {
    let item = list.querySelector(`#pokemon-${num}`)

    let img = item.getElementsByTagName("img")[0]
    img.setAttribute("src", pokemon.sprites.front_default)

    let nom = item.getElementsByTagName("p")[0]
    nom.textContent = pokemon.name
}

consultpokemons()
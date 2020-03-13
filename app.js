let list = document.getElementById("listPokemon");


////////////////////////////////////////////////////
//cherche le pokemon
function consultpokemons2(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json()
                .then(function (pokemon) {
                    crepokemon2(pokemon, num)
                })
        })
}


// crée un num aleatoire et un id pour le pokemon 1 et 2
function consultpokemons2() {
    let deuxiemeID = Math.round(Math.random() * 150)
    consultPokemon(deuxiemeID, 2)
}



// affiche son nom + img
function crepokemon2(pokemon, num) {
    let item = list.querySelector(`#pokemon-${num}`)

    let img = item.getElementsByTagName("img")[0]
    img.setAttribute("src", pokemon.sprites.front_default)

    let nom = item.getElementsByTagName("p")[0]
    nom.textContent = pokemon.name

}

////////
function consultPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json()
                .then(function (pokemon) {
                    crepokemon(pokemon, num)
                })
        })
}


// crée un num aleatoire et un id pour le pokemon 1 et 2
function consultpokemons() {
    let premierID = Math.round(Math.random() * 150)
    let deuxiemeID = Math.round(Math.random() * 150)
    consultPokemon(premierID, 1)
    consultPokemon(deuxiemeID, 2)
}



// affiche son nom + img
function crepokemon(pokemon, num) {
    let item = list.querySelector(`#pokemon-${num}`)

    let img = item.getElementsByTagName("img")[0]
    img.setAttribute("src", pokemon.sprites.front_default)

    let nom = item.getElementsByTagName("p")[0]
    nom.textContent = pokemon.name

}

consultpokemons();


const randomchoice = () => {
    let max = 4
    let min = 1
    return Math.floor(Math.random() * (max - min) + min);
}

var userLife = 100
var robotLife = 100
var round = 1

const getForce = () => {
    let max =  30
    let min = 0
    return Math.floor(Math.random() * (max - min) + min);
}

const getlife = () => {
    let max =  15
    let min = 0
    return Math.floor(Math.random() * (max - min) + min);
}


// Les pokemon s'attaque 

const Launch = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    console.log(`userLife: ${userLife}`)
    console.log(`robotLife: ${robotLife}`)
    console. log(`round n°${round}`)
    
    const forceUser = getForce()
    var choirobot = randomchoice()
    console.log (`numero choix du robot : ${choirobot}`)

}
const battlePokemonUser = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    console.log(`userLife: ${userLife}`)
    console.log(`robotLife: ${robotLife}`)
    console. log(`round n°${round}`)
    
    const forceUser = getForce()
    var choirobot = randomchoice()
    console.log (`numero choix du robot : ${choirobot}`)
    

    if(choirobot ==1){
        battlePokemonRobot();
    }else if(choirobot ==2){
        soinPokemonRobot()
    }else if(choirobot ==3){
        protegeRobot()
    }
    robotLife -= forceUser
    if(robotLife <= 0 || userLife <=  0){
        console.log("close partie")
        if(robotLife <= 0 && userLife > 0){
            console.log("win")
            nextRound()
        }else if(userLife <= 0 && robotLife > 0){
            loosePage()
        }
    }else{

    }
}

const battlePokemonRobot = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    const forceRobot = getForce()
    console.log(`force robot: ${forceRobot}`)
    userLife -= forceRobot

    if(robotLife <= 0 || userLife <=  0){
        console.log("close partie")
        if(robotLife <= 0 && userLife > 0){
            console.log("win")
            nextRound()
        }else if(userLife <= 0 && robotLife > 0){
            loosePage()
        }
    }else{

    }
}

// les pokemon se soignent
const soinPokemonUser = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    console.log(`userLife: ${userLife}`)
    console.log(`robotLife: ${robotLife}`)
    console. log(`round n°${round}`)
    
    const soinUser = getlife()
    var choirobot = randomchoice()
    userLife = soinUser + userLife

    if(choirobot ==1){
        battlePokemonRobot();
    }else if(choirobot ==2){
        soinPokemonRobot()
    }else if(choirobot ==3){
        protegeRobot()
    }

    if(robotLife <= 0 || userLife <=  0){
        console.log("close partie")
        if(robotLife <= 0 && userLife > 0){
            console.log("win")
            nextRound()
        }else if(userLife <= 0 && robotLife > 0){
            loosePage()
        }
    }else{

    }

}

const soinPokemonRobot = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    const soinRobot = getlife()
    console.log(`soin robot: ${soinRobot}`)
    robotLife = soinRobot + robotLife
    
    if(robotLife <= 0 || userLife <=  0){
        console.log("close partie")
        if(robotLife <= 0 && userLife > 0){
            console.log("win")
            nextRound()
        }else if(userLife <= 0 && robotLife > 0){
            loosePage()
        }
    }else{

    }
}

// les pokemons se protège
const protegeUser = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    console.log(`userLife: ${userLife}`)
    console.log(`robotLife: ${robotLife}`)
    console. log(`round n°${round}`)
    
    forceRobot = 0
    var choirobot = randomchoice()
    if(choirobot ==1){
        forceRobot = 0
        console. log(`il a raté son coup`)
    }else if(choirobot ==2){
        soinPokemonRobot()
    }else if(choirobot ==3){
        protegeRobot()
    }

    if(robotLife <= 0 || userLife <=  0){
        console.log("close partie")
        if(robotLife <= 0 && userLife > 0){
            console.log("win")
            nextRound()
        }else if(userLife <= 0 && robotLife > 0){
            loosePage()
        }
    }else{

    }

}

const protegeRobot = () => {
    $("#vie1").html(userLife)
    $("#vie2").html(robotLife)
    $("#round").html(`round : ${round}`)
    

    document.getElementById('jauge').style.width = `${userLife}` + '%';
    document.getElementById('jauge2').style.width = `${robotLife}` + '%';

    forceUser = 0
    if(robotLife <= 0 || userLife <=  0){
        console.log("close partie")
        if(robotLife <= 0 && userLife > 0){
            console.log("win")
            nextRound()
        }else if(userLife <= 0 && robotLife > 0){
            loosePage()
        }
    }else{

    }

}



const nextRound = () => {
    robotLife = 100
    userLife = 100

    robotLife = robotLife + 50*round
    consultpokemons2();
    $("#resultat").html("manche suivante")
    round ++
}

const loosePage = () => {
    robotLife = 100
    userLife = 100
    round = 1
    $("#resultat").html("tu as perdu")
    
    
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=Ywoh06QC87SD53OtIyyhhxyzM7MZKSAl&q=lose&limit=1w`)
    .then(resp => resp.json())
    .then(resd => {
    console.log(resd)
        let gif1 = resd.data.data.image_original_url
        console.log(gif1)
        $("#gif1").attr("src", gif1);
    })
    

    // get number of round
}









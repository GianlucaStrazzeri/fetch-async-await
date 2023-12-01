// fetch("https://pokeapi.co/api/v2/pokemon")
// .then(response=>response.json())
// .then(data=>{
    
//     console.log(data)

// });

//Capturado ids del Dom

//Capturo buscador
const searchInput =document.getElementById("searchInput");

//Capturo search
const searchBtn = document.getElementById('searchBtn');

//Capturo botón pagina previa
const prevBtn =document.getElementById("prevBtn");

//Capturo botón pagina siguiente
const nextBtn =document.getElementById("nextBtn");

//Capturo botón reset para devolver los valores iniciales
const resetBtn =document.getElementById("resetBtn");

//Capturo zona de inserción de los pokemons
const app =document.getElementById("app");



//data.previous= pagina previa

//data.results= me enseñará 20 pokemons por pagina, cada uno tiene su
//name con el nombre y 
//url: con la foto

//const printPokemon = async () => {
//    for (pokemon of getPokemon) {
//        console.log(Pokemon)
//    }
//}


const printPoke = async (pokemonList) => {

    for (const poke of pokemonList) {
    //obtenemos la url con todos los datos del pokemon con otro forEach
    try {
        const res = await fetch(poke.url);
        if (!res.ok) {
            throw new Error(`Hubo un error al cargar los datos de ${poke.name}`);
        }
        const pokemonData = await res.json();

        //Pillamos la foto y la capturamos en la constante imageUrl
        const imageUrl = pokemonData.sprites.front_default;
        app.innerHTML += `
        <div class="entry">
        <img src=${imageUrl} alt='${poke.name}'/>
        <p><b>${poke.name}</b></p>
        </div>
        `;

        

    } catch (error) {
        console.error(error);
        app.innerHTML = `Ha habido un error al cargar los datos de ${poke.name}`
    }
}
};

const getPokemon = async () => {

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        if (!response.ok) {
            throw new Error('No se ha podido cargar los datos de los pokemon');
        }
        const catchPokemon = await response.json();
        console.log(catchPokemon)
        
        printPoke(catchPokemon.results);

        
       

    } catch (error) {
        console.log(error)
    }
}

searchBtn.addEventListener('click', () => {searchPokemon();})

// Función para buscar el pokemon
const searchPokemon = async () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");

        if (!res.ok) {
            throw new Error("Ha habido un error al cargar la información del pokemon");
        }

        const catchPokemon = await res.json();

        // Filtrar la lista de Pokémon basándose en el nombre de búsqueda
        const filteredPokemonList = catchPokemon.results.filter(pokemon => pokemon.name.includes(searchInput));

        if (filteredPokemonList.length === 0) {
            app.innerHTML = "No se han encontrado pokémon con ese nombre";
        } else {
            // Llama a la función printPokemon para imprimir los nombres y las imágenes de los pokemon filtrados
            printPoke(filteredPokemonList);
        }
    } catch (error) {
        console.error(error);
        app.innerHTML = "Ha habido un error al cargar la información del pokemon";
    }
};

getPokemon();

//catchPokemon.next= document.addEventListener("click",printPoke());
//Estructura del Fetch inicial
const pokemonList = document.getElementById("app");
const modal = document.querySelector(".modal");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

const baseURL = "https://pokeapi.co/api/v2/pokemon";
let currentPage = 1;


fetch("https://pokeapi.co/api/v2/pokemon")
.then(response=>response.json())
.then((data) =>{
    console.log(data)

    data.forEach(function(objeto) {
        var li = document.createElement('li'))};

);


//estructura para pagina siguiente y precedente
nextPage.addEventListener('click', function() {
    getFetchRickandMortyCharacter(next)
  })
  
  prevPage.addEventListener('click', function() {
    getFetchRickandMortyCharacter(prev)
  })
  
  getFetchRickandMortyCharacter(page)
  

  
  
  


  const searchPokemon = async () => {
    const searchInput = document.getElementById("searchInput");
    const pokemonName = searchInput.value.toLowerCase();

    if (!pokemonName) {
        alert('Por favor, ingresa un nombre de Pokémon');
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            console.log('Nombre del Pokémon encontrado:', data.name);
            
        })
        .catch(error => {
            console.error(error);

            if (error.message === 'Pokémon no encontrado') {
                alert('Pokémon no encontrado');
            }
        });
};

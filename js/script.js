//Estructura del Fetch

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response=>response.json())
.then(data=>{
    console.log(data)
});

//Capturado ids del Dom

//Capturo buscador
const searchInput =document.getElementById("searchInput");

//Capturo botón  que le da el empezar al comando buscar
const searchBtn =document.getElementById("searchBtn");

//Capturo botón pagina previa
const prevBtn =document.getElementById("prevBtn");

//Capturo botón pagina siguiente
const nextBtn =document.getElementById("nextBtn");

//Capturo botón reset para devolver los valores iniciales
const resetBtn =document.getElementById("resetBtn");

//Capturo area donde irán todos los pokemons 
const app=document.getElementById("app");




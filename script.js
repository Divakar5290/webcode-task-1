document.body.innerHTML = `
<h1 class="heading_container">POKEMON CHARACTERS</h1>
<div id="mainContainer" class="main-container">  </div> `;
const poke_container = document.getElementById("mainContainer");


const getData = async id => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    pokeCards(pokemon);
  }
  catch (error) {
    console.error(error);
  }
};
getData(1);
const fetchpokemons = async () => {
  for (let i = 2; i <= 50; i++) {
    await getData(i);
  }
}
fetchpokemons();

function pokeCards(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokeAbility = pokemon.abilities;
  const pokeMove = pokemon.moves;
 
const pokeInnerHTML =`
<div class="card" ;">
  <div class="card-header">
   
  <p class="name"><b>Name-</b>${name}</p>
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> <p class="ability"><b>Abilities-</b>
       ${pokeAbility[0] && pokeAbility[1] ?
      `${pokeAbility[0].ability.name}, 
           ${pokeAbility[1].ability.name}` : "none"}</p>
    </li>

    <li class="list-group-item"> <p><b>Moves</b>-${pokeMove[0].move.name}</p></li>

    <li class="list-group-item"><p><b>Weight</b>-${pokemon.weight}</p></li>
  </ul>

</div>
`;

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
}



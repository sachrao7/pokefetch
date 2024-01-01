document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetch-button');

  fetchButton.addEventListener('click', () => {
      const pokemonId = document.getElementById('pokemon-input').value;
      fetchPokemon(pokemonId);
  });
});

function fetchPokemon(pokemonId) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayPokemon(data))
      .catch(error => console.error('Error fetching data:', error));
}


  function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');

    const html = `
        <div class="pokemon-card">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-image">
            <div class="pokemon-details">
                <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <!-- Add more details as needed -->
                <p><strong>Versions:</strong> ${pokemon.game_indices.map(version => version.version.name).join(', ')}</p>
            </div>
        </div>
    `;

    pokemonInfo.innerHTML = html;
}


// function displayPokemon(pokemon) {
//   const { name, id, height, weight, types, abilities, base_experience, game_indices, sprites } = pokemon;
  
//   const card = document.createElement('div');
//   card.classList.add('card');

//   const image = document.createElement('img');
//   image.src = sprites.front_default;
//   image.alt = name;

//   const title = document.createElement('h2');
//   title.textContent = `${name} #${id}`;

//   const details = document.createElement('p');
//   details.innerHTML = `<strong>Type:</strong> ${types.map(type => type.type.name).join(', ')}<br>`;
//   details.innerHTML += `<strong>Abilities:</strong> ${abilities.map(ability => ability.ability.name).join(', ')}<br>`;
//   details.innerHTML += `<strong>Height:</strong> ${height} dm<br>`;
//   details.innerHTML += `<strong>Weight:</strong> ${weight} hectograms<br>`;
//   details.innerHTML += `<strong>Base Experience:</strong> ${base_experience}<br>`;

//   const versions = document.createElement('p');
//   versions.innerHTML = '<strong>Game Versions:</strong> ';
//   versions.innerHTML += game_indices.map(index => index.version.name).join(', ');

//   card.appendChild(image);
//   card.appendChild(title);
//   card.appendChild(details);
//   card.appendChild(versions);

//   const container = document.querySelector('.container');
//   container.innerHTML = '';
//   container.appendChild(card);
// }

  // Modify the above line based on the specific data you want to display

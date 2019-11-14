import pokemons from './pokemons.json';

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemon = pokemon.name.toLowerCase();
    return normalizedPokemon.startsWith(normalizedName);
  });
  return pickPokemons;
}

// export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
//   /**
//    * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
//    *
//    * See Array.prototype.sort()
//    */
//   return pokemons;
// }

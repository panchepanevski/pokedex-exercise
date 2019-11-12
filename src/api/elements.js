export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}

export function createPokemonElements(pokemons) {
  const listElement = document.createElement('ul');
  pokemons.forEach(pokemon => {
    const pokemonElement = createPokemonElement(pokemon);
    listElement.appendChild(pokemonElement);
  });
  return listElement;
}

export function createPokemonElement(pokemon) {
  const itemElement = document.createElement('li');
  itemElement.innerHTML = pokemon.name;
  return itemElement;
}

export function removeChilds(parent) {
  parent.innerHTML = '';
}

export function appendChild(parent, child) {
  parent.appendChild(child);
}
export function setChild(parent, child) {
  removeChilds(parent);
  appendChild(parent, child);
}

export function resetInput(input) {
  input.value = '';
}

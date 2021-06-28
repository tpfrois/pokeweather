import axios from 'axios';

const getPokemonsByType = async (type) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return data.pokemon;
  } catch (error) {
    console.log(error);
  }
}

const getPokemon = async (pokemon) => {
  try {
    const { data } = await axios.get(pokemon.url);
    const pokemonData = {
      name: data.name,
      image: data["sprites"]["other"]["official-artwork"]["front_default"],
      stats: data.stats
    }
    return pokemonData;
  } catch (error) {
    console.log(error);
  }
}

export { getPokemonsByType, getPokemon }
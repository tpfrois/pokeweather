import waterIcon from '../assets/types-icons/water.svg';
import bugIcon from '../assets/types-icons/bug.svg';
import electricIcon from '../assets/types-icons/electric.svg';
import fireIcon from '../assets/types-icons/fire.svg';
import grassIcon from '../assets/types-icons/grass.svg';
import groundIcon from '../assets/types-icons/ground.svg';
import iceIcon from '../assets/types-icons/ice.svg';
import normalIcon from '../assets/types-icons/normal.svg';
import rockIcon from '../assets/types-icons/rock.svg';


export function getPokemonType({ temperature, isRaining }) {
  if (isRaining) return "electric";
  console.log(temperature);
  const types = {
    [temperature < 5]: "ice",
    [temperature >= 5 && temperature < 10]: "water",
    [temperature > 12 && temperature < 15]: "grass",
    [temperature > 15 && temperature < 21]: "ground",
    [temperature > 23 && temperature < 27]: "bug",
    [temperature > 27 && temperature <= 33]: "rock",
    [temperature > 33]: "fire"
  };
  const type = types[true] ? types[true] : "normal";
  return type;
}

export function getFiveRandomPokemons(pokemonsList) {
  const pokemons = [];
  while (pokemons.length < 5) {
    const random = Math.floor(Math.random() * pokemonsList.length) + 1;
    if (pokemons.filter(pokemonObject => pokemonObject.name === pokemonsList[random].pokemon.name)) pokemons.push(pokemonsList[random].pokemon);
  }
  return pokemons;
}

export const pokemonTypeIcon = {
  water: waterIcon,
  bug: bugIcon,
  electric: electricIcon,
  fire: fireIcon,
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  rock: rockIcon
}

export const filterStats = (stats) => {
  const attack = stats.find(statObject => statObject.stat.name === "attack").base_stat;
  const defense = stats.find(statObject => statObject.stat.name === "defense").base_stat;
  const hp = stats.find(statObject => statObject.stat.name === "hp").base_stat;
  const speed = stats.find(statObject => statObject.stat.name === "speed").base_stat;

  return { attack, defense, hp, speed }
}
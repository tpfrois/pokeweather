import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';

import useQuery from '../../hooks/useQuery';
import { getCityWeather } from '../../services/weatherapi';
import { getPokemonsByType, getPokemon } from '../../services/pokeapi';
import { getPokemonType, getFiveRandomPokemons, pokemonTypeIcon, filterStats } from '../../helpers';

import Loading from '../../components/Loading';
import PokeCard from '../../components/PokeCard';
import { BodyStyle, Container, LocationInfo, TypeInfo, CardsContainer } from './styles';

const fetchAllPokemonsData = async (pokemonsList) => {
  const fivePokemons = getFiveRandomPokemons(pokemonsList);
  const pokemons = [];

  for (const pokemon of fivePokemons) {
    const data = await getPokemon(pokemon);
    const filteredStats = filterStats(data.stats);
    pokemons.push({ ...data, filteredStats });
  }
  console.log(pokemons);
  return pokemons;
}

const Weather = () => {
  const city = useQuery().get("city");

  const [loading, setLoading] = useState(true);
  const [cityError, setCityError] = useState(false);

  const [weather, setWeather] = useState({});
  const [pokemonType, setPokemonType] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const weather = await getCityWeather(city);
        setWeather(weather);
        const pokemonType = getPokemonType(weather);
        setPokemonType(pokemonType);
        const pokemonsList = await getPokemonsByType(pokemonType);
        const pokemons = await fetchAllPokemonsData(pokemonsList);
        setPokemons(pokemons);
        setLoading(false);
      } catch (error) {
        setCityError(true);
        setLoading(false);
        return;
      }

    }
    city && fetchAll();
  }, [city]);


  if (!city) {
    return <Loading />
  }

  if (cityError) return (
    <Loading cityError loading={false} />
  )

  if (loading) return (
    <Loading loading />
  )



  return (
    <>
      <BodyStyle type={pokemonType} icon={pokemonTypeIcon[pokemonType]} />
      <Container>
        <LocationInfo>
          <FiMapPin size={72} color={'white'} />
          <div>
            <h1>{city}</h1>
            <p>{weather.main}</p>
          </div>
          <span>{weather.temperature}</span>
          <span>ºC</span>
        </LocationInfo>
        <TypeInfo>
          <h2>{pokemonType} Pokemons</h2>
          <img src={pokemonTypeIcon[pokemonType]} alt={`${pokemonType} Icon`} />
        </TypeInfo>
        <CardsContainer>
          {pokemons &&
            pokemons.map(pokemon =>
              <PokeCard key={pokemon.name} img={pokemon.image} type={pokemonType} name={pokemon.name}
                attack={pokemon.filteredStats.attack} defense={pokemon.filteredStats.defense}
                hp={pokemon.filteredStats.hp} speed={pokemon.filteredStats.speed} />
            )
          }
        </CardsContainer>
        <Link to="/">Find other pokemons</Link>
      </Container>
    </>
  )
}

export default Weather;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { FiMapPin } from 'react-icons/fi';
import { CgPokemon } from 'react-icons/cg';

const Home = () => {
  const [city, setCity] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`weather?city=${city}`);
  }

  return (
    <Container>
      <h1>PokeWeather</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Type a city name..." />
        <FiMapPin size={24} color={"white"} />
        <button type="submit"><CgPokemon size={32} color={"#F15F3E"} /></button>
      </form>
    </Container>)
}

export default Home;
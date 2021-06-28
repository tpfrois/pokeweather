import React from 'react';
import { Link } from 'react-router-dom';

import Ash from '../../assets/ash.svg';
import { Container } from './styles';

const Loading = ({ cityError, loading }) => {

  return (
    <Container>
      <img src={Ash} alt="Ash" />
      <div>
        {loading ? <h1>Catching Pokemons...</h1> : cityError === true ? <h1>We couldn't find pokemons in your city</h1> :
          <h1>We need your city to find pokemons</h1>}
        <Link to="/">Go Back</Link>
      </div>
    </Container>
  )
}

export default Loading;

